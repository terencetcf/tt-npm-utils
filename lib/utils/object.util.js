"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtil = void 0;
exports.objectUtil = {
    isEmpty: (value) => {
        return (value == null ||
            (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0) ||
            value.length === 0);
    },
};
