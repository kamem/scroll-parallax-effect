import { TriggerPosiiton, CSSStyleDeclarationName } from './util';
import { Easing } from './easing';
declare type Ele = Element | HTMLElement;
declare type MotionStyles = {
    [key in CSSStyleDeclarationName]?: string | number;
};
declare type MotionValues = {
    [key in CSSStyleDeclarationName]?: number[];
};
export interface Motion {
    start?: TriggerPosiiton;
    end?: TriggerPosiiton;
    toStyle?: MotionStyles;
    fromStyle?: MotionStyles;
    easing?: Easing;
    fromStyleValues?: MotionValues;
    toStyleValues?: MotionValues;
}
export default class Fit {
    el: Ele;
    motions: Motion[];
    rangeMotions: Motion[];
    styleValues: MotionStyles;
    constructor(el: Ele);
    setMotion(motion: Motion): void;
    setStyleValues(): void;
    generateStyleValues(motionStyles: MotionStyles): MotionValues;
    setStyleValue(motionStyles: MotionStyles): MotionStyles;
    setRangeMotions(status?: import("./scrollStatus").default): void;
    setDefaultStyles(): void;
    setFromStyle(): void;
    getLastToStyle(style: CSSStyleDeclarationName, i: number): string;
    setStart(): void;
    getLastStart(i: number): TriggerPosiiton;
    generateScrollStyleValues(style: string, fromtStyle: number, toStyle: number, easingName: string | Easing, scrollPercent?: number): number;
    getStyleValues(status?: import("./scrollStatus").default): MotionStyles;
}
export {};
