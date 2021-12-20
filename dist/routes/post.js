"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PostController_1 = __importDefault(require("../controllers/PostController"));
var validation_1 = __importDefault(require("../middleware/validation"));
var post_1 = __importDefault(require("../requestSchema/post"));
var router = (0, express_1.Router)({ mergeParams: true });
var ctrl = new PostController_1.default();
router.route("/create").post((0, validation_1.default)(post_1.default.post), ctrl.create);
router
    .route("/update/:postId")
    .put((0, validation_1.default)(post_1.default.update), ctrl.update);
router
    .route("/delete/:postId")
    .delete((0, validation_1.default)(post_1.default.delete), ctrl.delete);
exports.default = router;
