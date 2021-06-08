"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var loadParamsFactory_1 = require("./loadParamsFactory");
function extractParamsFromWeigthMapTiny(weightMap) {
    var paramMappings = [];
    var extractDenseBlock3Params = loadParamsFactory_1.loadParamsFactory(weightMap, paramMappings).extractDenseBlock3Params;
    var params = {
        dense0: extractDenseBlock3Params('dense0', true),
        dense1: extractDenseBlock3Params('dense1'),
        dense2: extractDenseBlock3Params('dense2')
    };
    common_1.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
exports.extractParamsFromWeigthMapTiny = extractParamsFromWeigthMapTiny;
//# sourceMappingURL=extractParamsFromWeigthMapTiny.js.map