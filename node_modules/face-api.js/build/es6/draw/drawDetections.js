import { Box } from '../classes';
import { FaceDetection } from '../classes/FaceDetection';
import { isWithFaceDetection } from '../factories/WithFaceDetection';
import { round } from '../utils';
import { DrawBox } from './DrawBox';
export function drawDetections(canvasArg, detections) {
    var detectionsArray = Array.isArray(detections) ? detections : [detections];
    detectionsArray.forEach(function (det) {
        var score = det instanceof FaceDetection
            ? det.score
            : (isWithFaceDetection(det) ? det.detection.score : undefined);
        var box = det instanceof FaceDetection
            ? det.box
            : (isWithFaceDetection(det) ? det.detection.box : new Box(det));
        var label = score ? "" + round(score) : undefined;
        new DrawBox(box, { label: label }).draw(canvasArg);
    });
}
//# sourceMappingURL=drawDetections.js.map