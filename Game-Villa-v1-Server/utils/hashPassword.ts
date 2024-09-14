import { Response } from 'express'
import crypto from 'crypto'

function hashPassword(password: string, response: Response, salt: string):string {
    try {
        
        if (typeof password !== 'string') {
            response.status(400).json({ error: 'Password is of invalid type.' })
            return
        }

        let hashedPassword = crypto.createHmac("md5", salt).update(password as string).digest("hex")

        return hashedPassword as string
    } catch(e) {

        if (e instanceof Error) {
            response.status(400).json(e)
            return
        }
    }
}

export default hashPassword