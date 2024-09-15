import type { Request, Response } from 'express'

function errorHandler(error: any, request: Request, response: Response, next: any) {
    if (!error && !error.name) {
        next()
        return
    }

    if (error.name === 'CastError') {
        response.status(400).json({ error: 'malformatted id.'})
        return
    } else if (error.name === 'ValidationError') {
        response.status(400).json({ error: `cannot validate object. ${error}` })
        return
    } else if (error.name === 'JsonWebTokenError') {
        response.status(400).json({ error: 'invalid token.'})
        return
    } else if (error.name === 'TokenExpiredError') {
        response.status(400).json({ error: 'token expired'})
        return
    }

    if (!error.name || error instanceof Error) {
        response.status(500)
        response.json({ error: `Unfortunately could not handle request. ${request}`})
        return
    }
}

export default errorHandler