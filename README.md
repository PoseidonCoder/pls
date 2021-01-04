# liason

"Liason" is a NodeJS promise-based, asynchronous, minimalistic HTTP request API aimed towards beginners.
[*Javascript Promise Tutorial*](https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### GET request example:
```js
const liason = require("liason")
liason.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response=> response.parse()) //returns reponse promise
    .then(body=> console.log(body)) //print response to console
    .catch(error=> console.log(error)) //log error if there is an error
```

#### POST request example:
```js
const liason = require("liason")
liason.post("https://jsonplaceholder.typicode.com/posts", "Hello World!", {"Content-type": "text/plain"})
    .then(response=> response.parse()) //returns reponse promise
    .then(body=> console.log(body)) //print response to console
    .catch(error=> console.log(error)) //log error if there is an error
```

#### Liason Methods:

`get(<url>, <headers>?) => response promise`

`post(<url>, <body>, <headers>) => response promise`

#### Parsing Request Body

The "Liason" API adds the "parse" method to the response promise. Which parses the response to return the response body.
`response.parse() => body promise` 
