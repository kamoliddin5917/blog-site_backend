"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CommentController_1 = __importDefault(require("../controllers/CommentController"));
var validation_1 = __importDefault(require("../middleware/validation"));
var comment_1 = __importDefault(require("../requestSchema/comment"));
var router = (0, express_1.Router)({ mergeParams: true });
var ctrl = new CommentController_1.default();
router.route("/create").post((0, validation_1.default)(comment_1.default.comment), ctrl.create);
router
    .route("/update/:commentId")
    .put((0, validation_1.default)(comment_1.default.update), ctrl.update);
router
    .route("/delete/:commentId")
    .delete((0, validation_1.default)(comment_1.default.delete), ctrl.delete);
exports.default = router;
