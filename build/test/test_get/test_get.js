"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("../../src/get");
get_1.default('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.parse())
    .then(console.log)
    .catch(console.error);
