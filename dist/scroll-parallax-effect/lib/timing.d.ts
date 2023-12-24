import type { Ele, ScrollEventOpt } from '../utils/util';
import type { TriggerPosiiton } from '../utils/util';
import type ScrollStatus from './scrollStatus';
export type EventFunctionType = (target: Ele | undefined, isOver: boolean) => void;
export interface TimingOotions extends ScrollEventOpt {
    el?: Ele;
    target?: Ele | keyof HTMLElementTagNameMap | null;
    className?: string;
    triggerPosition?: TriggerPosiiton;
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
