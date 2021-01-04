"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
function get(url, headers) {
    return request_1.default(url, "GET", null);
}
exports.default = get;
