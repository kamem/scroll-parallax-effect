type Ele = Element | HTMLElement;
type Direction = 'y' | 'x';
type Stage = typeof globalThis | Window | Ele;
export type DirectionPositionName = 'Top' | 'Left';
export type StageSizeName = 'Height' | 'Width';
type ScrollName = 'pageYOffset' | 'pageXOffset' | 'scrollTop' | 'scrollLeft';
export interface StatusParams {
    stage?: Stage;
    direction?: Direction;
    functions?: [(status: ScrollStatus) => void, ScrollPosition?][];
    targetPercentage?: number;
    threshold?: number;
    updateFunction?: (status: ScrollStatus) => void;
}
export default class ScrollStatus {
    stage: Stage;
    direction: Direction;
    functions: [(status: ScrollStatus) => void, ScrollPosition?][];
    targetPercentage: number;
    scrollPosition: number;
    endScrollPosition: number;
    threshold?: number;
    ScrollPosition: ScrollPosition;
    updateFunction?: (status: ScrollStatus) => void;
    stageSize: number;
    contentSize: number;
    stageSizeName?: StageSizeName;
    directionPositionName: DirectionPositionName;
    constructor();
    setVal(opt: StatusParams): this;
    scrollEventUpdate(): void;
    update(): void;
    setDirectionInfo(): void;
}
export declare class ScrollPosition {
    stage: Stage;
    targetPercentage: number;
    threshold?: number;
    stageSize: number;
    direction: Direction;
    scrollPosition: number;
    endScrollPosition: number;
    scrollName: ScrollName;
    constructor(opt: ScrollStatus);
    getScrollPosition(): number;
    generateScrollPosition(): number;
}
export declare const Status: ScrollStatus;
export {};
