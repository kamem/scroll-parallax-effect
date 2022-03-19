import ScrollStatus from './scrollStatus';
import { CSSStyleDeclarationName, TriggerPosiiton } from '../utils/util';
declare type Ele = Element | HTMLElement;
declare type OptionValueNumber = number | number[] | number[][];
export interface SpeedOptions {
    status?: ScrollStatus;
    el?: Ele;
    targetPercentage?: number;
    threshold?: number;
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
    el: Ele;
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
