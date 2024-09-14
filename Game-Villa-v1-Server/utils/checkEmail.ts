import type { Response } from 'express'

export function checkEmail(email: unknown, response: Response) {

    let emailRegex = /[^@]+@[^@]+\.[^@]+/

    if (!email) {
        response.status(400).json({ error: "No email provided."})
        return
    }

    if (typeof email !== 'string') {
        response.status(400).json({ error: "Email format unknown."})
        return
    }

    if (emailRegex.test(email as string) === false) {
        response.status(400).json({ error: "Email not valid."})
        return
    }
    return email
}