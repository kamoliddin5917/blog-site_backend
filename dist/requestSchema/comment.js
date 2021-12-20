"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
exports.default = {
    comment: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            comment: joi_1.default.string().required(),
            post: joi_1.default.string().required(),
            commentId: joi_1.default.string(),
        })
            .required(),
    }),
    update: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            comment: joi_1.default.string().required(),
        })
            .required(),
        params: joi_1.default.object()
            .keys({
            commentId: joi_1.default.string().required(),
        })
            .required(),
    }),
    delete: joi_1.default.object().keys({
        params: joi_1.default.object()
            .keys({
            commentId: joi_1.default.string().required(),
        })
            .required(),
    }),
};
