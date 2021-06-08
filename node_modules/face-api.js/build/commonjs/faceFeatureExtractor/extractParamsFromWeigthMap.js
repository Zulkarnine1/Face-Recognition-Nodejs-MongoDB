"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var loadParamsFactory_1 = require("./loadParamsFactory");
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractDenseBlock4Params = loadParamsFactory_1.loadParamsFactory(weightMap, paramMappings).extractDenseBlock4Params;
    var params = {
        dense0: extractDenseBlock4Params('dense0', true),
        dense1: extractDenseBlock4Params('dense1'),
        dense2: extractDenseBlock4Params('dense2'),
        dense3: extractDenseBlock4Params('dense3')
    };
    common_1.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
exports.extractParamsFromWeigthMap = extractParamsFromWeigthMap;
//# sourceMappingURL=extractParamsFromWeigthMap.js.map