"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
exports.default = {
    register: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            email: joi_1.default.string().email().required(),
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string().required(),
            username: joi_1.default.string().required(),
            password: joi_1.default.string().required(),
            confirmPassword: joi_1.default.ref("password"),
        })
            .with("password", "confirmPassword")
            .required(),
    }),
    update: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            firstName: joi_1.default.string(),
            lastName: joi_1.default.string(),
            username: joi_1.default.string(),
            image: joi_1.default.string(),
        })
            .required(),
    }),
};
