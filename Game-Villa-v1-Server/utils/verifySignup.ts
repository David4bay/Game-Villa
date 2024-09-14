import type { Response } from 'express'
import type { SignUpInfo } from '../types/signup'
import { checkEmail } from './checkEmail'

export function verifySignup(user: { username: unknown, password: unknown, email: unknown, age: unknown }, response: Response): SignUpInfo {
    try {
        
        if (!user) {
            response.status(400).json({ error: 'malformatted user info, no user registered.'})
            return
        }
        if (typeof user.username !== 'string' || !user.username) {
            response.status(400).json({ error: 'malformatted user info, username is invalid.'})
            return
        }
        if (typeof user.password !== 'string' || !user.password) {
            response.status(400).json({ error: 'malformatted user info, password is invalid.'})
            return
        }
        if (typeof user.email !== 'string' || !user.email || !checkEmail(user.email, response)) {
            response.status(400).json({ error: 'malformatted user info, email is invalid.'})
            return
        }
        if (typeof user.age !== 'number' || isNaN(user.age) || user.age < 18) {
            response.status(400).json({ error: 'malformatted user info, age is invalid.'})
            return
        }
        return user as SignUpInfo
    } catch(e) {
        if (e instanceof Error) {
            response.status(400).json({
                error: `Unable to verify user info. ${e}`
            })
            return
        }
    }
}