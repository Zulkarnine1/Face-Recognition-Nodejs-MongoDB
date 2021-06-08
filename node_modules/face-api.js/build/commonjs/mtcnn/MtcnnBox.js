"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classes_1 = require("../classes");
var MtcnnBox = /** @class */ (function (_super) {
    tslib_1.__extends(MtcnnBox, _super);
    function MtcnnBox(left, top, right, bottom) {
        return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, true) || this;
    }
    return MtcnnBox;
}(classes_1.Box));
exports.MtcnnBox = MtcnnBox;
//# sourceMappingURL=MtcnnBox.js.map