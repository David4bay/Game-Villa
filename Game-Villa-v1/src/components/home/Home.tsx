import axios from 'axios'
import React, { useState, useEffect } from 'react'



function Home() {

    const [games, setGames] = useState([])
//@ts-ignore
    useEffect(async () => {
        let games
        try {
             games = await axios.get('http://localhost:3000')
        } catch(e) {
            console.log(e.message)
        } finally {
            console.log('games fetched', games)
        }
        
    }, [])


    return <p>This is a page</p>
}

export default Home