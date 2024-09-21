import type { Request, Response } from 'express'
import checkComment from '../utils/checkComment'
import { Review } from '../models/reviews'
import { Comment } from '../models/comments'
import jwt from 'jsonwebtoken'

async function createComment(request: Request, response: Response) {
    try {

        const { reviewId, commenterId, comment, createdAt } = checkComment(request.body, response)

        const reviewExists = await Review.findById(reviewId)

        if (!reviewExists) {
            response.status(404).json({ error: 'review id does not exist.'})
            return
        }

        const newComment = await new Comment({ reviewId, commenterId, comment, createdAt }).save()

        if (!newComment) {
            response.status(404).json({ error: 'failed to create comment.'})
            return
        }

        


    } catch (e: unknown) {

        if (e instanceof Error) {
            response.status(400).json({ error: `failed to create a comment. ${e}`})
            return
        }
    }
}

export default createComment