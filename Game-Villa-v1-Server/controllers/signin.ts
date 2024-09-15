import type { Request, Response } from 'express'
import validateSignIn from '../utils/validateSignIn'
import hashPassword from '../utils/hashPassword'
import createToken from '../utils/createToken'
import { User } from '../models/user'

async function signIn(request: Request, response: Response) {
    let token: any
    try {
        
        const { email, password } = validateSignIn(request.body, response)
    
        const exists = await User.findOne({ email })

        if (!exists) {

            response.status(400).json({ error: 'user does not exist.' })
            return
        }

        let salt = exists.salt!

        const verify = hashPassword(password as string, response as Response, salt as string)

        if (verify !== exists.password) {
            response.status(401).json({ error: 'Not authorized to access user.' })
            return
        }

        token = createToken({ user: exists.username } as any, response as Response)
        
        return response.status(200).json({ exists, token })

    } catch (e: unknown) {

        if (e instanceof Error) {

            response.status(400).json({ error: `Something went wrong on sign in. ${e}` })
            return
        }
    }
}

export default signIn