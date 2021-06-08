"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractWeightEntry = common_1.extractWeightEntryFactory(weightMap, paramMappings);
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
    common_1.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
exports.extractParamsFromWeigthMap = extractParamsFromWeigthMap;
//# sourceMappingURL=extractParamsFromWeigthMap.js.map