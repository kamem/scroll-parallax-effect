import ScrollStatus from '../lib/scrollStatus';
import type { DirectionPositionName } from '../lib/scrollStatus';
export interface ScrollEventOpt {
    targetPercentage?: number;
    threshold?: number;
    status?: ScrollStatus;
}
export declare const setScrollEvents: (func: (status: ScrollStatus) => void, { targetPercentage, threshold, status }?: ScrollEventOpt) => void;
declare type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}` ? `${T extends Capitalize<T> ? "-" : ""}${Lowercase<T>}${CamelToKebabCase<U>}` : S;
export declare type CamelToKebab<T extends object> = {
    [K in keyof T as `${CamelToKebabCase<string & K>}`]: T[K] extends object ? CamelToKebab<T[K]> : T[K];
};
export declare type CSSStyleDeclarationName = (keyof CSSStyleDeclaration | keyof CamelToKebab<CSSStyleDeclaration>) & string;
export declare const kebabToCamelCase: (str: CSSStyleDeclarationName) => string;
export declare const generateCamelCaseStyle: (str: CSSStyleDeclarationName) => keyof CSSStyleDeclaration;
export declare type Ele = string | Element | HTMLElement | null;
export declare const getElement: (element: Ele) => HTMLElement;
export declare const getStyleValues: (value: string) => number[];
export declare const generateStyleValue: (styleValue?: string | number | undefined) => string;
export declare const generateStyleValueString: (style: string, values: number[]) => string;
export declare const generateHex: (colorString: string) => string;
export declare type Rgb = [r: number, g: number, b: number];
export declare const generateRGB: (colorString: string) => Rgb;
export declare const hexadecimalToRgb: (value: string) => string;
export declare const getStringColor: (styleValue: string) => string;
export declare const _offset: (element: Ele | undefined, endScrollPosition: number, directionPositionName: DirectionPositionName) => number;
export declare type TriggerPositionType = 'end' | string | Element | HTMLElement;
export declare type TriggerPositionArray = [TriggerPositionType, number | string];
export declare type TriggerPosiiton = number | TriggerPositionType | TriggerPositionArray | undefined;
export declare const scrollPositionStringToNumber: (triggerPosition: TriggerPosiiton, status?: ScrollStatus) => number;
export {};
