import request from "./request"
import { OutgoingHttpHeaders } from 'http'

function get(url: string, headers?: OutgoingHttpHeaders) {
    return request(url, "GET", null)
}

export default get