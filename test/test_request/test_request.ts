import request from '../../src/request'

request('https://jsonplaceholder.typicode.com/todos/1', 'GET')
    .then(response => {
        console.log(response)
        return response.parse()
    })
    .then(console.log)
    .catch(console.error)