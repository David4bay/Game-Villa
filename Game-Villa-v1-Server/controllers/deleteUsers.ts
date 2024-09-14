import type { Request, Response } from 'express'
import { User } from '../models/user'

async function deleteUsers(_request: Request, response: Response) {
    console.log("deleting all users")
try {
    const deleted = await User.deleteMany({})
    // probably need to check for status 204 on the frontend
    response.status(204).json()
    return
} catch (e:unknown) {
    if (e instanceof Error) {
        response.status(400).json({ error: `Unable to delete users model. ${e}` })
        return
    }
}
}

export default deleteUsers