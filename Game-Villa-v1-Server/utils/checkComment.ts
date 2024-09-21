import type { Response } from 'express'
import { visitCommaListElements } from 'typescript'

interface CommentType {
    reviewId: string;
    commenterId: string;
    comment: string;
    createdAt: string  | Object | object;
}

function checkComment(comment: { reviewId: unknown, commenterId: unknown, comment: unknown, createdAt: unknown }, response: Response): CommentType {
    if (!comment.reviewId || typeof comment.reviewId !== 'string') {
        response.status(404).json({ error: 'review id is invalid.'})
        return
    }

    if (!comment.commenterId || typeof comment.commenterId !== 'string') {
        response.status(404).json({ error: 'commenter id is invalid.'})
        return
    }

    if (!comment.comment || typeof comment.comment !== 'string') {
        response.status(404).json({ error: 'comment format invalid.'})
        return
    }

    if (comment.createdAt instanceof Date !== true || typeof comment.createdAt !== 'object' || !comment.createdAt) {
        response.status(404).json({ error: 'date format invalid.'})
        return
    }

    return comment as CommentType
}

export default checkComment