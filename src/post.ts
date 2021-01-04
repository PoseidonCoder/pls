import { OutgoingHttpHeaders } from "http";
import request from "./request";

function post(url: string, payload: any, headers: OutgoingHttpHeaders) {
    return request(url, "POST", payload, headers)
}

export default post