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
var User_1 = __importDefault(require("../models/User"));
var jwt_1 = __importDefault(require("../utils/jwt"));
var bcrypt_1 = __importDefault(require("../utils/bcrypt"));
var Post_1 = __importDefault(require("../models/Post"));
var Comment_1 = __importDefault(require("../models/Comment"));
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.prototype.get = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, id, user, posts, comments, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        token = req.headers.token;
                        id = jwt_1.default.verify(token);
                        return [4 /*yield*/, User_1.default.findById(id.userId).select("-password")];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, Post_1.default.find({ author: id.userId }).populate("author", ["_id", "firstName", "lastName", "username"])];
                    case 2:
                        posts = _a.sent();
                        return [4 /*yield*/, Comment_1.default.find().populate("author post commentId", [
                                "_id",
                                "firstName",
                                "lastName",
                                "username",
                                "media",
                                "title",
                                "body",
                                "author",
                                "comment",
                            ])];
                    case 3:
                        comments = _a.sent();
                        res.status(200).json({ message: "ok", data: { user: user, posts: posts, comments: comments } });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        res.status(500).json({ message: "Server Error!" });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    default_1.prototype.register = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, existingUser, hashedPassword, user, token, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        data = req.body;
                        if (!data.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{7,17}$/))
                            return [2 /*return*/, res.status(400).json({
                                    message: "Kamida 7 ta belgi, ko'pi bn 17 ta belgi, kotta-kichkina harf, belgi, son bo'lishi kerak!",
                                })];
                        return [4 /*yield*/, User_1.default.findOne({ email: data.email })];
                    case 1:
                        existingUser = _a.sent();
                        if (existingUser)
                            return [2 /*return*/, res.status(400).json({ message: "Bad request!" })];
                        return [4 /*yield*/, bcrypt_1.default.hashPassword(data.password)];
                    case 2:
                        hashedPassword = _a.sent();
                        if (!hashedPassword)
                            return [2 /*return*/, res.status(500).json({ message: "Server Error!" })];
                        return [4 /*yield*/, User_1.default.create(__assign(__assign({}, data), { password: hashedPassword, confirmPassword: hashedPassword }))];
                    case 3:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, res.status(500).json({ message: "Server Created Error!" })];
                        token = jwt_1.default.sign({ userId: user.id });
                        res.status(201).json({ message: "User Created!", token: token });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        res.status(500).json({ message: "Server Error!" });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    default_1.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, token, id, updateUser, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = req.body;
                        token = req.headers.token;
                        id = jwt_1.default.verify(token);
                        return [4 /*yield*/, User_1.default.findOneAndUpdate({ _id: id.userId }, { $set: data }).select("-password")];
                    case 1:
                        updateUser = _a.sent();
                        if (!updateUser)
                            return [2 /*return*/, res.status(500).json({ message: "Server Update Error!" })];
                        res.status(200).json({ message: "User Update!", updateUser: updateUser });
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
    default_1.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, id, deleteUser, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        token = req.headers.token;
                        id = jwt_1.default.verify(token);
                        return [4 /*yield*/, User_1.default.findByIdAndDelete({
                                _id: id.userId,
                            }).select("-password")];
                    case 1:
                        deleteUser = _a.sent();
                        if (!deleteUser)
                            return [2 /*return*/, res.status(500).json({ message: "Server Deleted Error!" })];
                        res.status(200).json({ message: "User Deleted!", deleteUser: deleteUser });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
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
