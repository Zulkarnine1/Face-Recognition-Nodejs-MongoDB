import * as tf from '@tensorflow/tfjs-core';
import { NetInput, TNetInput } from '../dom';
import { NeuralNetwork } from '../NeuralNetwork';
import { IMtcnnOptions } from './MtcnnOptions';
import { MtcnnResult, NetParams } from './types';
export declare class Mtcnn extends NeuralNetwork<NetParams> {
    constructor();
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    loadFromDisk(filePath: string | undefined): Promise<void>;
    forwardInput(input: NetInput, forwardParams?: IMtcnnOptions): Promise<{
        results: MtcnnResult[];
        stats: any;
    }>;
    forward(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<MtcnnResult[]>;
    forwardWithStats(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<{
        results: MtcnnResult[];
        stats: any;
    }>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: NetParams;
        paramMappings: import("../common").ParamMapping[];
    };
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("../common").ParamMapping[];
    };
}
