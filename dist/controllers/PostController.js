"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = __importDefault(require("../models/Post"));
var mongoose_1 = __importDefault(require("mongoose"));
var jwt_1 = __importDefault(require("../utils/jwt"));
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, token, id, post, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = req.body;
                        token = req.headers.token;
                        id = jwt_1.default.verify(token);
                        return [4 /*yield*/, Post_1.default.create(__assign(__assign({}, data), { author: id.userId }))];
                    case 1:
                        post = _a.sent();
                        if (!post)
                            return [2 /*return*/, res.status(500).json({ message: "Server Created Error" })];
                        res.status(201).json({ message: "Post Created!", post: post });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json({ message: "Server Error!" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    default_1.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, postId, token, id, updatePost, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = req.body;
                        postId = req.params.postId;
                        token = req.headers.token;
                        id = jwt_1.default.verify(token);
                        if (!mongoose_1.default.Types.ObjectId.isValid(postId))
                            return [2 /*return*/, res.status(400).json({ message: "Bad request!" })];
                        return [4 /*yield*/, Post_1.default.findOneAndUpdate({ _id: postId, author: id.userId }, { $set: data })];
                    case 1:
                        updatePost = _a.sent();
                        if (!updatePost)
                            return [2 /*return*/, res.status(500).json({ message: "Server Update Error!" })];
                        res.status(200).json({ message: "Post Update!", updatePost: updatePost });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(500).json({ message: "Server Error!" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    default_1.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var postId, token, id, deletePost, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        postId = req.params.postId;
                        token = req.headers.token;
                        id = jwt_1.default.verify(token);
                        if (!mongoose_1.default.Types.ObjectId.isValid(postId))
                            return [2 /*return*/, res.status(400).json({ message: "Bad request!" })];
                        return [4 /*yield*/, Post_1.default.findOneAndDelete().and([
                                { author: id.userId },
                                { _id: postId },
                            ])];
                    case 1:
                        deletePost = _a.sent();
                        if (!deletePost)
                            return [2 /*return*/, res.status(500).json({ message: "Server Deleted Error!" })];
                        res.status(200).json({ message: "Post Deleted!", deletePost: deletePost });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(500).json({ message: "Server Error!" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return default_1;
}());
exports.default = default_1;
