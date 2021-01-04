"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("./response");
const https = require('https');
const url = require('url');
function request(endpoint, method, payload, headers) {
    const parsed = url.parse(endpoint);
    return new Promise((resolve, reject) => {
        const request = https.request({
            path: parsed.path,
            hostname: parsed.hostname,
            headers: headers,
            method: method
        }, (response) => {
            resolve(new response_1.default(response));
        }).on('error', error => reject(error.message));
        if (payload) {
            request.write(payload);
        }
        request.end();
    });
}
exports.default = request;
