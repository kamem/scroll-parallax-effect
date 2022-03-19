import { TriggerPosiiton } from '../utils/util';
import ScrollStatus from './scrollStatus';
export declare type EventFunctionType = (target: Ele, isOver: boolean) => {};
declare type Ele = string | Element | HTMLElement;
export interface TimingOotions {
    el?: Ele;
    target?: Ele;
    status?: ScrollStatus;
    className?: string;
    triggerPosition?: TriggerPosiiton;
    eventTriggerWindowPercentage?: number;
    targetPercentage?: number;
    threshold?: number;
    start?: EventFunctionType;
    end?: EventFunctionType;
    toggle?: [EventFunctionType, EventFunctionType];
}
export default class Timing {
    el: Ele;
    isLineOver: boolean;
    triggerPosition: number;
    eventScrollElementPosition: TriggerPosiiton;
    eventTriggerWindowPercentage: number;
    eventScrollPlussWindowPerCentPosition: number;
    toggle: [EventFunctionType, EventFunctionType];
    constructor(opt: TimingOotions);
    getEventScrollElementPosition(status: ScrollStatus): number;
    timingEvent(status: ScrollStatus): {};
}
export {};
