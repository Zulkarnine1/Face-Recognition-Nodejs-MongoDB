export interface IMtcnnOptions {
    minFaceSize?: number;
    scaleFactor?: number;
    maxNumScales?: number;
    scoreThresholds?: number[];
    scaleSteps?: number[];
}
export declare class MtcnnOptions {
    protected _name: string;
    private _minFaceSize;
    private _scaleFactor;
    private _maxNumScales;
    private _scoreThresholds;
    private _scaleSteps;
    constructor({ minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps }?: IMtcnnOptions);
    get minFaceSize(): number;
    get scaleFactor(): number;
    get maxNumScales(): number;
    get scoreThresholds(): number[];
    get scaleSteps(): number[] | undefined;
}
