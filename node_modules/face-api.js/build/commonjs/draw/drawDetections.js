"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../classes");
var FaceDetection_1 = require("../classes/FaceDetection");
var WithFaceDetection_1 = require("../factories/WithFaceDetection");
var utils_1 = require("../utils");
var DrawBox_1 = require("./DrawBox");
function drawDetections(canvasArg, detections) {
    var detectionsArray = Array.isArray(detections) ? detections : [detections];
    detectionsArray.forEach(function (det) {
        var score = det instanceof FaceDetection_1.FaceDetection
            ? det.score
            : (WithFaceDetection_1.isWithFaceDetection(det) ? det.detection.score : undefined);
        var box = det instanceof FaceDetection_1.FaceDetection
            ? det.box
            : (WithFaceDetection_1.isWithFaceDetection(det) ? det.detection.box : new classes_1.Box(det));
        var label = score ? "" + utils_1.round(score) : undefined;
        new DrawBox_1.DrawBox(box, { label: label }).draw(canvasArg);
    });
}
exports.drawDetections = drawDetections;
//# sourceMappingURL=drawDetections.js.map