import axios from 'axios'
import { mainUrl } from './rawgUrl'

export async function fetchAllGames() {
    const allGames = await axios.get(mainUrl)
    return allGames.data
}