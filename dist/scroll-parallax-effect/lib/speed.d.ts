import type ScrollStatus from './scrollStatus';
import type { ScrollEventOpt, TriggerPosiiton, CSSStyleDeclarationName } from '../utils/util';
declare type Ele = Element | HTMLElement | null;
declare type OptionValueNumber = number | number[] | number[][];
export interface SpeedOptions extends ScrollEventOpt {
    el?: Ele;
    contentScrollPosition?: TriggerPosiiton;
    style?: (CSSStyleDeclarationName) | (CSSStyleDeclarationName)[];
    styles?: (CSSStyleDeclarationName) | (CSSStyleDeclarationName)[];
    speed?: OptionValueNumber;
    min?: OptionValueNumber;
    max?: OptionValueNumber;
    contentScrollPositionStyleValue?: (number | string) | (number | string)[];
    contentStyleValue?: (number | string) | (number | string)[];
}
interface Style {
    name: CSSStyleDeclarationName;
    speed: OptionValueNumber;
    min: OptionValueNumber;
    max: OptionValueNumber;
    contentStyleValue: string;
    styleValues: number[];
}
export default class Speed {
    el?: Ele;
    styles: Style[];
    speeds?: number[] | number[][];
    mins?: number[] | number[][];
    maxs?: number[] | number[][];
    contentScrollPositionStyleValues: (number | string)[];
    contentScrollPosition: TriggerPosiiton;
    constructor(ops: SpeedOptions);
    generateStyles(styles: (CSSStyleDeclarationName)[]): {
        name: CSSStyleDeclarationName;
        speed: number | number[];
        min: number | number[];
        max: number | number[];
        contentStyleValue: string;
        styleValues: number[];
    }[];
    generateValues(status: ScrollStatus, style: Style): number[];
    getStyleValues(status: ScrollStatus): {};
}
export {};
