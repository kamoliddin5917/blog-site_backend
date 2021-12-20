"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(schema) {
    return function (req, res, next) {
        var data = {};
        if (req.body && Object.keys(req.body).length > 0) {
            data.body = req.body;
        }
        if (req.query && Object.keys(req.query).length > 0) {
            data.query = req.query;
        }
        if (req.params && Object.keys(req.params).length > 0) {
            data.params = req.params;
        }
        var result = schema.validate(data, {
            convert: true,
            allowUnknown: false,
            abortEarly: false,
        });
        if (result.error) {
            return res
                .status(422)
                .json({ message: "Validation error", error: result.error });
        }
        next();
    };
}
exports.default = default_1;
