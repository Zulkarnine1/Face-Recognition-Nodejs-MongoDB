"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../classes");
var faceExpressionNet_1 = require("../faceExpressionNet");
var WithFaceDetection_1 = require("../factories/WithFaceDetection");
var WithFaceExpressions_1 = require("../factories/WithFaceExpressions");
var utils_1 = require("../utils");
var DrawTextField_1 = require("./DrawTextField");
function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
    if (minConfidence === void 0) { minConfidence = 0.1; }
    var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
    faceExpressionsArray.forEach(function (e) {
        var expr = e instanceof faceExpressionNet_1.FaceExpressions
            ? e
            : (WithFaceExpressions_1.isWithFaceExpressions(e) ? e.expressions : undefined);
        if (!expr) {
            throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
        }
        var sorted = expr.asSortedArray();
        var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
        var anchor = WithFaceDetection_1.isWithFaceDetection(e)
            ? e.detection.box.bottomLeft
            : (textFieldAnchor || new classes_1.Point(0, 0));
        var drawTextField = new DrawTextField_1.DrawTextField(resultsToDisplay.map(function (expr) { return expr.expression + " (" + utils_1.round(expr.probability) + ")"; }), anchor);
        drawTextField.draw(canvasArg);
    });
}
exports.drawFaceExpressions = drawFaceExpressions;
//# sourceMappingURL=drawFaceExpressions.js.map