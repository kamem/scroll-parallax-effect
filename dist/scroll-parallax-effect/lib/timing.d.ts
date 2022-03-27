import { TriggerPosiiton } from '../utils/util';
import type { Ele } from '../utils/util';
import ScrollStatus from './scrollStatus';
export declare type EventFunctionType = (target: Ele | undefined, isOver: boolean) => void;
export interface TimingOotions {
    el?: Ele;
    target?: Ele | keyof HTMLElementTagNameMap | null;
    status?: ScrollStatus;
    className?: string;
    triggerPosition?: TriggerPosiiton;
    targetPercentage?: number;
    threshold?: number;
    start?: EventFunctionType;
    end?: EventFunctionType;
    toggle?: [EventFunctionType, EventFunctionType];
}
export default class Timing {
    el?: Ele;
    isLineOver: boolean;
    eventScrollElementPosition: TriggerPosiiton;
    toggle: [EventFunctionType, EventFunctionType];
    constructor(opt: TimingOotions);
    getEventScrollElementPosition(status: ScrollStatus): number;
    timingEvent(status: ScrollStatus): void;
}
