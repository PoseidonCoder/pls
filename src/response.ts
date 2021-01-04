import { IncomingMessage } from 'http'

class Response extends IncomingMessage {
    original;

    constructor(response) {
        super(response)
        this.original = response
    }

    /**
     * parse
     */
    public parse(): Promise<any> {
        return new Promise((resolve, reject) => {
            var body = ''

            this.original.on('data', chunk => body += chunk)

            this.original.on('error', error => {
                reject('Liason: there was an error reading from the request body chunks\n' + error)
            })

            this.original.on('end', () => {
                try {
                    resolve(JSON.parse(body))
                } catch {
                    reject('Liason: there was an error parsing the request body')
                }
            })
        })
    }
}

export default Response