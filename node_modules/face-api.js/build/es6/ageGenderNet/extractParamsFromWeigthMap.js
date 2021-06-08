import { disposeUnusedWeightTensors, extractWeightEntryFactory } from '../common';
export function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
    function extractFcParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { weights: weights, bias: bias };
    }
    var params = {
        fc: {
            age: extractFcParams('fc/age'),
            gender: extractFcParams('fc/gender')
        }
    };
    disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMap.js.map