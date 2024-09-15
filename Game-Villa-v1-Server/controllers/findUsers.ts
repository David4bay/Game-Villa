import type { Request, Response } from 'express'
import { User } from '../models/user'

async function findUsers(request: Request, response: Response) {
    try {

        let users = await User.find({})

        if (!users) {
            response.status(404).json({ error: 'no user retrieved.'})
            return
        }

        response.status(200).json({ users })
        return 
    } catch(e: unknown) {

        if (e instanceof Error) {
            response.status(400).json({ error: `failed to fetched users. ${e}`})
            return
        }
    }
}

export default findUsers