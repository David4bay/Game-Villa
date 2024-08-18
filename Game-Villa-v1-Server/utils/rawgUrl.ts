require('dotenv').config()

const { RAWG_API_KEY } = process.env

export const mainUrl = `https://rawg.io/api/games?key=${RAWG_API_KEY}&page_size=15`