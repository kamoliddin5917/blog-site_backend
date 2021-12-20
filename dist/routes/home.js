"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var HomeController_1 = __importDefault(require("../controllers/HomeController"));
var router = (0, express_1.Router)({ mergeParams: true });
var ctrl = new HomeController_1.default();
router.route("/").get(ctrl.get);
exports.default = router;
