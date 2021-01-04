"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
function post(url, payload) {
    return request_1.default(url, "POST", payload);
}
exports.default = post;
