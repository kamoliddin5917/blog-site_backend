"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
exports.default = {
    sign: function (data) { return (0, jsonwebtoken_1.sign)(data, process.env.JWT_SECRET); },
    verify: function (data) { return (0, jsonwebtoken_1.verify)(data, process.env.JWT_SECRET); },
};
