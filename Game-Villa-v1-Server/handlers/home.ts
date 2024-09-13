import type { Request, Response } from "express";
import { Router } from "express";
import { getCurrentPageAndPageSize } from "../utils/extractPageNumber";
import { fetchAllGames } from '../utils/gamesService'
import signUp from '../controllers/signup'

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

homeRouter.get('/signup', signUp)

export default homeRouter