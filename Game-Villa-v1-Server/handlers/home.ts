import type { Request, Response } from "express";
import { getCurrentPageAndPageSize } from "../utils/extractPageNumber";
import { fetchAllGames } from '../utils/gamesService'

export async function home(request: Request, response: Response) {

    let games = await fetchAllGames()

    if (games) {

        return response.status(200).json(
            { 
            games: games.results, 
            next: games.hasOwnProperty('next') ? getCurrentPageAndPageSize(games.next) : null }
            )
    }
    return response.status(404).json({ error: 'Unable to fetch games'})
}
