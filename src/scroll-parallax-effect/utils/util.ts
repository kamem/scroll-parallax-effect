import ScrollStatus, { ScrollPosition, Status } from '../lib/scrollStatus';
import type { DirectionPositionName } from '../lib/scrollStatus';

const defaultParallaxStatus = Status;

const ERRROR_PREFIX = '[scroll-parallax-effect]';

export interface ScrollEventOpt {
  targetPercentage?: number;
  threshold?: number;
  status?: ScrollStatus;
}
export const setScrollEvents = (
  func: (status: ScrollStatus) => void,
  {
    targetPercentage,
    threshold,
    status = defaultParallaxStatus,
  }: ScrollEventOpt = {}
) => {
  const isNewScrollPosition =
    !!(targetPercentage && targetPercentage !== status.targetPercentage) ||
    !!(threshold && threshold !== status.threshold);
  status.functions.push([
    func,
    // targetPercentageが違った場合は新しくScrollPositionを作る、statusが異なった場合もstatusのscrollPositiuonを入れる
    isNewScrollPosition
      ? new ScrollPosition(
          Object.assign({}, status, { targetPercentage, threshold })
        )
      : status !== defaultParallaxStatus
      ? status.ScrollPosition
      : undefined,
  ]);
};

type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '-' : ''}${Lowercase<T>}${CamelToKebabCase<U>}`
  : S;

export type CamelToKebab<T extends object> = {
  [K in keyof T as `${CamelToKebabCase<string & K>}`]: T[K] extends object
    ? CamelToKebab<T[K]>
    : T[K];
};

export type CSSStyleDeclarationName = (
  | keyof CSSStyleDeclaration
  | keyof CamelToKebab<CSSStyleDeclaration>
) &
  string;

export const kebabToCamelCase = (str: CSSStyleDeclarationName) => {
  if (!~str.indexOf('-')) return str;
  return str
    .split('-')
    .map((word: string, i: number) => {
      if (i === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};
export const generateCamelCaseStyle = (str: CSSStyleDeclarationName) => {
  return kebabToCamelCase(str) as keyof CSSStyleDeclaration;
};

export type Ele = string | Element | HTMLElement | null;
export const getElement = (element: Ele) => {
  const el: HTMLElement | null =
    typeof element === 'string'
      ? document.querySelector<HTMLElement>(element)
      : (element as HTMLElement);
  if (!el)
    throw new Error(
      `${ERRROR_PREFIX} [${getElement.name}] undefined element "${element}"`
    );
  return el;
};

const numRegExp = /([-]?([1-9]\d*|0)(\.\d+)?)(deg|\)|px|em|rem|%|$|\,)/g;

// 文字列の特定単位がついた数値部分を取得して配列で返す
export const getStyleValues = (value: string) => {
  let valueRegAry;
  let valueAry: number[] = [];
  while ((valueRegAry = numRegExp.exec(value)) !== null) {
    valueAry.push(parseFloat(valueRegAry[1]));
  }
  return valueAry;
};

// カラーの値や、16真数カラーがあった場合は数値(rgb(0,0,0))に変換して返す
export const generateStyleValue = (styleValue?: string | number) => {
  if (styleValue === undefined) return '';
  let value = String(styleValue);
  value = getStringColor(value);
  value = hexadecimalToRgb(value);
  return value;
};

// style文字列の数値部分をvaluesの配列の順番通りに上書きする
export const generateStyleValueString = (style: string, values: number[]) => {
  let i = 0;
  return style.replace(numRegExp, (styleValue) => {
    return styleValue.replace(/[-]?([1-9]\d*|0)(\.\d+)?/, values[i++] as any);
  });
};

// 色変換周りの処理
const plusColor = (s: string) => s + s;
export const generateHex = (colorString: string) => {
  if (colorString.length > 4) return colorString;
  return `#${plusColor(colorString[1])}${plusColor(colorString[2])}${plusColor(
    colorString[3]
  )}`;
};

export type Rgb = [r: number, g: number, b: number];
export const generateRGB = (colorString: string) => {
  const c = colorString.substring(1);
  return [
    parseInt(c.substring(0, 2), 16) || 0,
    parseInt(c.substring(2, 4), 16) || 0,
    parseInt(c.substring(4, 6), 16) || 0,
  ] as Rgb;
};

export const hexadecimalToRgb = (value: string) => {
  return value.replace(/#[0-9a-fA-F]{3,6}/g, (color) => {
    const [r, g, b] = generateRGB(generateHex(color));
    return `rgb(${r},${g},${b})`;
  });
};

export const getStringColor = (styleValue: string) => {
  const colors: { [key: string]: string } = {
    red: 'f00',
    blue: '00f',
    yellow: 'ff0',
    green: '008000',
  };
  return styleValue.replace(
    /red|blue|green|yellow/g,
    (color) => '#' + colors[color]
  );
};

// elementの位置を取得する
export const _offset = (
  element: Ele | undefined,
  endScrollPosition: number,
  directionPositionName: DirectionPositionName
) => {
  const el =
    typeof element === 'string'
      ? element
        ? document.querySelector(element)
        : ''
      : element;
  const dir = directionPositionName === 'Left' ? 'left' : 'top';
  return el ? el.getBoundingClientRect()[dir] + endScrollPosition : 0; // window表示領域内の位置 + 今のスクロール量とすることでブラウザ実際の位置を取得する
};

const isEnd = (value: any) => {
  return typeof value === 'string' && ~['end'].indexOf(value);
};

export type TriggerPositionType = 'end' | string | Element | HTMLElement;
export type TriggerPositionArray = [TriggerPositionType, number | string];
export type TriggerPosiiton =
  | number
  | TriggerPositionType
  | TriggerPositionArray
  | undefined;
export const scrollPositionStringToNumber = (
  triggerPosition: TriggerPosiiton,
  status = defaultParallaxStatus
) => {
  const stageEndScrollNum = status.contentSize - status.stageSize;

  if (
    (typeof triggerPosition === 'number' &&
      triggerPosition! > stageEndScrollNum) ||
    isEnd(triggerPosition)
  ) {
    return stageEndScrollNum;
  }

  // [#test, -100]のような値を想定
  if (~['string', 'object'].indexOf(typeof triggerPosition)) {
    const triggerPositionArray = (
      typeof triggerPosition === 'string'
        ? triggerPosition.split(',')
        : triggerPosition
    ) as TriggerPositionArray;
    const positionName = triggerPositionArray[0] || '';
    const position = isEnd(positionName)
      ? stageEndScrollNum
      : _offset(
          positionName,
          status.endScrollPosition,
          status.directionPositionName
        );
    const s =
      (parseInt(String(triggerPositionArray[1])) || 0) +
      Math.min(position, stageEndScrollNum);
    return Math.min(s, stageEndScrollNum);
  }

  if (typeof triggerPosition === 'number') {
    return Math.min(triggerPosition, stageEndScrollNum);
  }

  return 0;
};
