import type { Request, Response } from 'express'
import type { SignUpInfo } from '../types/signup'

function signUp(request: Request, response: Response) {

    const credentials: SignUpInfo = request.body
}