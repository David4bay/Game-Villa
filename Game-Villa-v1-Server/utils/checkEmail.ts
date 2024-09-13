
export function checkEmail(email: unknown) {

    let emailRegex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/

    if (!email) {
        throw new Error('No email given.')
    }

    if (typeof email !== 'string') {
        throw new Error('Email is not a string.')
    }

    if (emailRegex.test(email) === false) {
        throw new Error('Invalid Email given.')
    }
    return true
}