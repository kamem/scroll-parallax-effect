import { Easing, EasingFunction } from '../utils/easing';
export declare const strokeDraw: (value: number, path: SVGGeometryElement, easingName: Easing | EasingFunction) => void;
export declare const getMaxPathLength: (paths: NodeListOf<SVGGeometryElement> | SVGGeometryElement[]) => number;
