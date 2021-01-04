import { IncomingMessage, OutgoingHttpHeaders } from 'http'
import Response from './response'

const https = require('https')
const url = require('url')

function request(endpoint: string, method: string, payload?: any, headers?: OutgoingHttpHeaders): Promise<Response> {
    const parsed = url.parse(endpoint)

    return new Promise((resolve, reject) => {
        const request = https.request({
            path: parsed.path,
            hostname: parsed.hostname,
            headers: headers,
            method: method
        }, (response: IncomingMessage) => {
            resolve(new Response(response))
        }).on('error', error => reject(error.message))

        if (payload) {
            request.write(payload)
        }

        request.end()
    })
}

export default request