"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
class Response extends http_1.IncomingMessage {
    constructor(response) {
        super(response);
        this.original = response;
    }
    parse() {
        return new Promise((resolve, reject) => {
            var body = '';
            this.original.on('data', chunk => body += chunk);
            this.original.on('error', error => {
                reject('Liason: there was an error reading from the request body chunks\n' + error);
            });
            this.original.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                }
                catch (_a) {
                    reject('Liason: there was an error parsing the request body');
                }
            });
        });
    }
}
exports.default = Response;
