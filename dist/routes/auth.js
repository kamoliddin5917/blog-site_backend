"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = __importDefault(require("../controllers/AuthController"));
var validation_1 = __importDefault(require("../middleware/validation"));
var auth_1 = __importDefault(require("../requestSchema/auth"));
var router = (0, express_1.Router)({ mergeParams: true });
var ctrl = new AuthController_1.default();
router.route("/login").post((0, validation_1.default)(auth_1.default.login), ctrl.login);
exports.default = router;
