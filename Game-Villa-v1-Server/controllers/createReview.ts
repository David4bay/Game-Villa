import type { Request, Response } from 'express'
import verifyReviews from '../utils/verifyReviews'
import { Review } from '../models/reviews'
import { User } from '../models/user'

async function createReview(request: Request, response: Response) {
    try {
        const { reviewerId, gameLink, header, content, pictures } = verifyReviews(request.body, response)

        

        const userExists = await User.findById(reviewerId)

        if (!userExists) {
            response.status(401).json({ error: 'no reviewer id provided.'})
            return
        }

        const review: any = await new Review({ reviewerId, gameLink, header, content, pictures }).save()

        if (!review) {
            response.status(404).json({ error: 'failed to create a review.'})
            return
        }

        await User.updateOne({ _id: userExists.id }, { $set: { reviews: { $push: [ review._id ]}}})

        response.status(201).json({ message: 'review created successfully.', review: review.header })
        return
    } catch (e: unknown) {
        if (e instanceof Error) {
            response.status(400).json({ error: `Unable to create a review. ${e}`})
        }
    }
}

export default createReview