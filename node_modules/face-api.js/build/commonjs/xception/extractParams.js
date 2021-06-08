"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var utils_1 = require("../utils");
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = common_1.extractConvParamsFactory(extractWeights, paramMappings);
    var extractSeparableConvParams = common_1.extractSeparableConvParamsFactory(extractWeights, paramMappings);
    function extractReductionBlockParams(channelsIn, channelsOut, mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/separable_conv1");
        var expansion_conv = extractConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/expansion_conv");
        return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, expansion_conv: expansion_conv };
    }
    function extractMainBlockParams(channels, mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv1");
        var separable_conv2 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv2");
        return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, separable_conv2: separable_conv2 };
    }
    return {
        extractConvParams: extractConvParams,
        extractSeparableConvParams: extractSeparableConvParams,
        extractReductionBlockParams: extractReductionBlockParams,
        extractMainBlockParams: extractMainBlockParams
    };
}
function extractParams(weights, numMainBlocks) {
    var paramMappings = [];
    var _a = common_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractSeparableConvParams = _b.extractSeparableConvParams, extractReductionBlockParams = _b.extractReductionBlockParams, extractMainBlockParams = _b.extractMainBlockParams;
    var entry_flow_conv_in = extractConvParams(3, 32, 3, 'entry_flow/conv_in');
    var entry_flow_reduction_block_0 = extractReductionBlockParams(32, 64, 'entry_flow/reduction_block_0');
    var entry_flow_reduction_block_1 = extractReductionBlockParams(64, 128, 'entry_flow/reduction_block_1');
    var entry_flow = {
        conv_in: entry_flow_conv_in,
        reduction_block_0: entry_flow_reduction_block_0,
        reduction_block_1: entry_flow_reduction_block_1
    };
    var middle_flow = {};
    utils_1.range(numMainBlocks, 0, 1).forEach(function (idx) {
        middle_flow["main_block_" + idx] = extractMainBlockParams(128, "middle_flow/main_block_" + idx);
    });
    var exit_flow_reduction_block = extractReductionBlockParams(128, 256, 'exit_flow/reduction_block');
    var exit_flow_separable_conv = extractSeparableConvParams(256, 512, 'exit_flow/separable_conv');
    var exit_flow = {
        reduction_block: exit_flow_reduction_block,
        separable_conv: exit_flow_separable_conv
    };
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { entry_flow: entry_flow, middle_flow: middle_flow, exit_flow: exit_flow }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map