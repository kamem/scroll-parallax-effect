import { TriggerPosiiton, CSSStyleDeclarationName } from '../utils/util';
import { Easing, EasingFunction } from '../utils/easing';
import ScrollStatus from './scrollStatus';
declare type Ele = Element | HTMLElement | null;
declare type MotionStyles = {
    [key in CSSStyleDeclarationName]?: string | number;
};
declare type MotionValues = {
    [key in CSSStyleDeclarationName]?: number[];
};
export interface Motion {
    start?: TriggerPosiiton;
    end: TriggerPosiiton;
    fromStyle?: MotionStyles;
    toStyle?: MotionStyles;
    easing?: Easing | EasingFunction;
    fromStyleValues?: MotionValues;
    toStyleValues?: MotionValues;
}
export default class Fit {
    el?: Ele;
    motions: Motion[];
    rangeMotions: Motion[];
    styleValues: MotionStyles;
    constructor(el?: Ele);
    setMotion(motion: Motion | Motion[]): void;
    setStyleValues(): void;
    generateStyleValues(motionStyles?: MotionStyles): MotionValues;
    setStyleValue(motionStyles?: MotionStyles): MotionStyles;
    setRangeMotions(status: ScrollStatus): void;
    setDefaultStyles(): void;
    setFromStyle(): void;
    getLastToStyle(style: CSSStyleDeclarationName, i: number): string;
    setStart(): void;
    getLastStart(i: number): TriggerPosiiton;
    generateScrollStyleValues(style: string, fromtStyle: number, toStyle: number, easingName: string | ((i: number, b: number, c: number, d: number) => number) | undefined, scrollPercent: number): number;
    getStyleValues(status: ScrollStatus): MotionStyles;
}
export {};
