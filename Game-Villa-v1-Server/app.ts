// import 'dotenv/config'
// import axios from 'axios'
// Testing the API Endpoint
// const API_KEY = process.env.RAWG_API_KEY

// const fetchAllGames = async () => {
//     let games
//     try {
//         games = await axios.get(`https://rawg.io/api/games?key=${API_KEY}&page_size=10`)
//     } catch(err) {
//         console.log(err?.message)
//     } finally {
//         if (games) {
//             let data = await games.data
//             console.log("games payload", data)

//         }
//     }
// }

// fetchAllGames()

const PORT = 3000 || process.env.PORT;
import app from "./index";

app.listen(PORT, () => {
	console.log(`Server online and listening on port ${PORT}`);
});
