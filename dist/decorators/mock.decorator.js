"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_mock_1 = require("jest-mock");
function Mock() {
    return function (target) {
        // the new constructor behaviour
        var metadata = jest_mock_1.getMetadata(target);
        if (metadata === null) {
            return target;
        }
        var mock = jest_mock_1.generateFromMetadata(metadata);
        // copy prototype so intanceof operator still works
        mock.prototype = target.prototype;
        // return new constructor (will override original)
        return mock;
    };
}
exports.Mock = Mock;
