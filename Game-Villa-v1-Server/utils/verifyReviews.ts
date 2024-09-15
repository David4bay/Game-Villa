import type { Response } from 'express'

interface ReviewFormat {
    reviewerId: string; 
    gameLink: string; 
    header: string; 
    content: string; 
    pictures: {
        main: string;
        secondary: string;
        tertiary: string;
    }
}

function verifyReviews(review: { 
    reviewerId: unknown,
    gameLink: unknown,
    header: unknown, 
    content: unknown, 
    pictures: {
        main: unknown,
        secondary: unknown,
        tertiary: unknown
    } }, response: Response): ReviewFormat {
    try {

        if (typeof review !== 'object') {
            response.status(400).json({ error: 'invalid review format.'})
            return
        }

        if (!review) {
            response.status(404).json({ error: 'no review provided.'})
            return
        }

        if (!review.reviewerId) {
            response.status(404).json({ error: 'reviewer not provided.'})
            return
        }

        if (!review.gameLink) {
            response.status(404).json({ error: 'no game link provided.'})
            return
        }

        if (!review.header) {
            response.status(404).json({ error: 'no header provided for review.'})
            return
        }

        if (!review.content) {
            response.status(404).json({ error: 'no review content provided.'})
            return
        }

        if (!review.pictures || typeof review.pictures !== 'object') {
            response.status(404).json({ error: 'no media payload received.'})
            return 
        }

        if (!review.pictures.main && !review.pictures.secondary && !review.pictures.tertiary) {
            response.status(404).json({ error: 'no review media received.'})
            return
        }

        return review as ReviewFormat

    } catch (e: unknown) {

        if (e instanceof Error) {
            response.status(400).json({ error: `failed to validate review. ${e}`})
            return
        }
    }

}

export default verifyReviews