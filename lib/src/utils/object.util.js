"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtil = void 0;
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
exports.objectUtil = {
    isEmpty: (value) => {
        return (value === undefined ||
            value === NaN ||
            (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0) ||
            (0, lodash_isempty_1.default)(value));
    },
};
