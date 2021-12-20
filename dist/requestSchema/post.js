"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
exports.default = {
    post: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            media: joi_1.default.string().required(),
            title: joi_1.default.string().required(),
            body: joi_1.default.string().required(),
        })
            .required(),
    }),
    update: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            media: joi_1.default.string(),
            title: joi_1.default.string(),
            body: joi_1.default.string(),
        })
            .required(),
        params: joi_1.default.object()
            .keys({
            postId: joi_1.default.string().required(),
        })
            .required(),
    }),
    delete: joi_1.default.object().keys({
        params: joi_1.default.object()
            .keys({
            postId: joi_1.default.string().required(),
        })
            .required(),
    }),
};
