import { checkEmail } from './checkEmail'

interface CredentialType {
    email: string;
    password: string;
}

function validateSignIn(credentials: { email: unknown, password: unknown}, response): CredentialType {

    try {

        if (!credentials) {
            response.status(400).json({
                error: 'credentials are invalid.'
            })
            return
        }
    
        if (!credentials.email || typeof credentials.email !== 'string' || !checkEmail(credentials.email, response)) {
            response.status(400).json({
                error: 'email is invalid.'
            })
            return
        }
        if (!credentials.password || typeof credentials.password !== 'string') {
            response.status(400).json({
                error: 'password is invalid.'
            })
            return
        }

        return credentials as CredentialType

    } catch(e: unknown) {
        if (e instanceof Error) {
            response.status(400).json(e)
            return
        }
    }
}

export default validateSignIn