"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../../src/request");
request_1.default('https://jsonplaceholder.typicode.com/todos/1', 'GET')
    .then(response => {
    console.log(response);
    return response.parse();
})
    .then(console.log)
    .catch(console.error);
