<div align='center'>

# liason

## an asynchronous, simple, [promise](https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Promise)-based HTTP request API

</div>

### examples

#### GET request
```js
const liason = require("liason")
liason.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response=> response.parse()) // returns reponse promise
    .then(body=> console.log(body)) // prints response to console
    .catch(error=> console.log(error)) // log error if there is an error
```

#### POST request
```js
const liason = require("liason")
liason.post("https://jsonplaceholder.typicode.com/posts", "Hello World!", {"Content-type": "text/plain"})
    .then(response => response.parse()) // returns reponse promise
    .then(body => console.log(body)) // prints response to console
    .catch(error => console.log(error)) // log error if there is an error
```
### methods 

#### liason

```ts
liason.get(endpoint: string): Promise<Response>
```

```ts
liason.post(endpoint: string, payload: any, headers: http.OutgoingHttpHeaders): Promise<Response>
```

#### Response

```ts
Response.parse(): Promise<any>
``` 
