"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ObjectDetection_1 = require("./ObjectDetection");
var FaceDetection = /** @class */ (function (_super) {
    tslib_1.__extends(FaceDetection, _super);
    function FaceDetection(score, relativeBox, imageDims) {
        return _super.call(this, score, score, '', relativeBox, imageDims) || this;
    }
    FaceDetection.prototype.forSize = function (width, height) {
        var _a = _super.prototype.forSize.call(this, width, height), score = _a.score, relativeBox = _a.relativeBox, imageDims = _a.imageDims;
        return new FaceDetection(score, relativeBox, imageDims);
    };
    return FaceDetection;
}(ObjectDetection_1.ObjectDetection));
exports.FaceDetection = FaceDetection;
//# sourceMappingURL=FaceDetection.js.map