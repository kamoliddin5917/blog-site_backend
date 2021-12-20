"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Database = /** @class */ (function () {
    function Database() {
        this.url = process.env.MONGO_URL_DB;
    }
    Database.prototype.connect = function () {
        return mongoose_1.default
            .connect(this.url)
            .then(function () {
            console.log("Ishladi");
        })
            .catch(function (error) {
            console.log("mongo connectdan" + error.message);
        });
    };
    return Database;
}());
exports.default = Database;
