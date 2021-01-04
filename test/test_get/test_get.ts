import get from "../../src/get";

get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> response.parse())
    .then(console.log)
    .catch(console.error)