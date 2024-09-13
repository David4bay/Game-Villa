import type { Request, Response } from 'express'
import type { SignUpInfo } from '../types/signup'
import { verifySignup } from '../utils/verifySignup'

function signUp(request: Request, response: Response) {

    const { username, password, email, age } = verifySignup(request.body, response) as SignUpInfo

    console.log("credentials", { username, password, email, age })
}

export default signUp