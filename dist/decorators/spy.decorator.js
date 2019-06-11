"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Stub() {
    return function (target, property) {
        return {
            get: function () {
                var value = jest.fn();
                Object.defineProperty(this, property, {
                    value: value
                });
                return value;
            }
        };
    };
}
exports.Stub = Stub;
