"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_mock_1 = require("jest-mock");
function createMock(cls) {
    var metadata = jest_mock_1.getMetadata(cls);
    if (metadata === null) {
        return cls;
    }
    var mock = jest_mock_1.generateFromMetadata(metadata);
    return new mock();
}
exports.createMock = createMock;
