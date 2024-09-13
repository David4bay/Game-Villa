import type { Response } from 'express'
import { SignUpInfo } from '../types/signup'

export function verifySignup(user: any, response: Response): Response | SignUpInfo {
    if (!user || user instanceof Object !== true) {
        response.status(400).json({ message: 'malformatted user info, no user registered.'})
        return
    }
    if (typeof user.username !== 'string' || !user.username) {
        response.status(400).json({ message: 'malformatted user info, username is invalid.'})
        return
    }
    if (typeof user.password !== 'string' || !user.password) {
        response.status(400).json({ message: 'malformatted user info, password is invalid.'})
        return
    }
    if (typeof user.email !== 'string' || !email || checkEmail(user.email)) {
        response.status(400).json({ message: 'malformatted user info, email is invalid.'})
        return
    }
    return user as SignUpInfo
}