"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var validation_1 = __importDefault(require("../middleware/validation"));
var user_1 = __importDefault(require("../requestSchema/user"));
var router = (0, express_1.Router)({ mergeParams: true });
var ctrl = new UserController_1.default();
router.route("/profile").get(ctrl.get);
router.route("/register").post((0, validation_1.default)(user_1.default.register), ctrl.register);
router.route("/update").put((0, validation_1.default)(user_1.default.update), ctrl.update);
router.route("/delete").delete(ctrl.delete);
exports.default = router;
