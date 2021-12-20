"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("./user"));
var auth_1 = __importDefault(require("./auth"));
var post_1 = __importDefault(require("./post"));
var comment_1 = __importDefault(require("./comment"));
var home_1 = __importDefault(require("./home"));
var router = (0, express_1.Router)({ mergeParams: true });
router.use("/users", user_1.default);
router.use("/auth", auth_1.default);
router.use("/post", post_1.default);
router.use("/comment", comment_1.default);
router.use("/home", home_1.default);
exports.default = router;
