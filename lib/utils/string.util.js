"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtil = void 0;
exports.stringUtil = {
    replaceAll: (value, textToFind, replaceWith) => {
        return value.replace(new RegExp(textToFind, 'g'), replaceWith);
    },
};
