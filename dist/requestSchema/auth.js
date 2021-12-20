"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
exports.default = {
    login: joi_1.default.object().keys({
        body: joi_1.default.object()
            .keys({
            email: joi_1.default.string().email(),
            username: joi_1.default.string(),
            password: joi_1.default.string().required(),
        })
            .xor("username", "email"),
    }),
};
