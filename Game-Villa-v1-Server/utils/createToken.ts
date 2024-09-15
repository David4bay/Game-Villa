import type { Response } from 'express'
import jwt from 'jsonwebtoken'

function createToken(user, response: Response): string {
    let token: any
    let secret = process.env?.JWT_SECRET

    try {

        if (!user) {

            response.status(400).json({ error: 'No user to receive token.' })
            return
        }

        token = jwt.sign(user, secret, { expiresIn: '1hr'})

        return token as string
    } catch(e) {
        if (e instanceof Error) {

            response.status(400).json({ error: `Unable to create token. ${e}` })
            return
        }
    }
    
}

export default createToken