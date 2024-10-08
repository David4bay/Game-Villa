// import type { Request, Response } from "express";
import { Router } from "express";
// import { getCurrentPageAndPageSize } from "../utils/extractPageNumber";
// import { fetchAllGames } from '../utils/gamesService'
import signUp from '../controllers/signup'
import deleteUsers from '../controllers/deleteUsers'
import signIn from '../controllers/signin'
import createReview from '../controllers/createReview'
import deleteReview from '../controllers/deleteReview'
import findUsers from '../controllers/findUsers'

const homeRouter = Router()

// export async function home(request: Request, response: Response) {

//     let games = await fetchAllGames()

//     if (games) {

//         return response.status(200).json(
//             { 
//             games: games.results, 
//             next: games.hasOwnProperty('next') ? getCurrentPageAndPageSize(games.next) : null }
//             )
//     }
//     return response.status(404).json({ error: 'Unable to fetch games'})
// }

homeRouter.post('/signup', signUp)

homeRouter.post('/signin', signIn)

homeRouter.post('/review/create', createReview)

if (process.env.NODE_ENV === 'development'!) {
    homeRouter.delete('/users/delete', deleteUsers)

    homeRouter.get('/users', findUsers)

    homeRouter.delete('/review/delete', deleteReview)
}

export default homeRouter