"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var routes_1 = __importDefault(require("./routes"));
var auth_1 = __importDefault(require("./middleware/auth"));
var app = (0, express_1.default)();
var authMiddleware = new auth_1.default();
app.use(authMiddleware.auth);
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use(routes_1.default);
exports.default = app;
