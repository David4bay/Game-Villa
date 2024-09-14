import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import type { SignUpInfo } from '../types/signup'
import { verifySignup } from '../utils/verifySignup'
import { User } from '../models/user'

async function signUp(request: Request, response: Response) {
    try {

        let { username, password, email, age } = verifySignup(request.body, response)
    
        console.log('credentials', { username, password, email, age })

        const alreadyExists = await User.findOne({ $or: [{ username }, { email } ] })

        console.log("already exists", alreadyExists)
        if (alreadyExists?.username === username) {
            response.status(400).json({ error: 'username already exists.' })
            return
        }

        if (alreadyExists?.email === email) {
            response.status(400).json({ error: 'email already exists.' })
            return
        }

        const user = await new User({
            username,
            password,
            email,
            age
        }).save()
        const jwtSecret = process.env?.JWT_SECRET!
        const token = jwt.sign({ user: username }, jwtSecret)
        response.status(200).json({ message: 'received successfully', user, token })
        return
    } catch(e: unknown) {
        if (e instanceof Error) {
            
            response.status(400).json(e)
            return
        }
    }
}

export default signUp