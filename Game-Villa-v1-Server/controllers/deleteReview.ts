import type { Request, Response } from 'express'
import { Review } from '../models/reviews'
import verifyReviews from '../utils/verifyReviews'

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

async function deleteReview(request: Request, response: Response) {

    try {
        
        const { reviewerId, gameLink, content } = verifyReviews(request.body, response)

        const findReview = await Review.findOne({ reviewerId, gameLink, content })

        if (!findReview) {
            response.status(404).json({ error: 'unable to find review.'})
            return
        }

        const deletedUser = await Review.findByIdAndDelete(findReview._id)

        if (deletedUser) {
            response.status(204)
            response.json({ message: 'review successfully deleted.'})
            return
        }

        response.status(400).json({ error: 'failed to find the review.'})
        return
    } catch(e: unknown) {

        if (e instanceof Error) {
            response.status(404).json({ error: `unable to delete review. ${e}`})
            return
        }
    }
}

export default deleteReview