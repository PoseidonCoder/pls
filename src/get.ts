import request from "./request";

function get(url: string) {
    return request(url, "GET", null)
}

export default get