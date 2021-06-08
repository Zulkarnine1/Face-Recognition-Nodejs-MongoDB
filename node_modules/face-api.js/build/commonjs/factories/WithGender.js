"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../ageGenderNet/types");
var utils_1 = require("../utils");
function isWithGender(obj) {
    return (obj['gender'] === types_1.Gender.MALE || obj['gender'] === types_1.Gender.FEMALE)
        && utils_1.isValidProbablitiy(obj['genderProbability']);
}
exports.isWithGender = isWithGender;
function extendWithGender(sourceObj, gender, genderProbability) {
    var extension = { gender: gender, genderProbability: genderProbability };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithGender = extendWithGender;
//# sourceMappingURL=WithGender.js.map