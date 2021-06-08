import { Box } from '../classes';
import { RNetParams } from './types';
export declare function stage2(img: HTMLCanvasElement, inputBoxes: Box[], scoreThreshold: number, params: RNetParams, stats: any): Promise<{
    boxes: Box<any>[];
    scores: number[];
}>;
