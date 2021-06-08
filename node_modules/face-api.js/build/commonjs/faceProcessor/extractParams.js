"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
function extractParams(weights, channelsIn, channelsOut) {
    var paramMappings = [];
    var _a = common_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = common_1.extractFCParamsFactory(extractWeights, paramMappings);
    var fc = extractFCParams(channelsIn, channelsOut, 'fc');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { fc: fc }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map