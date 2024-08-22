import React, { useState, useEffect } from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box
} from "@material-ui/core"
import axios from "axios";

// interface Game {
//     id: number;
//     games: <Array[]>;
//     name: string;
//     released: string;
//     background_image: string;
// }

function AllGames() {
    //@ts-ignore
	const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
	
	useEffect(() => {
        if (loading) {
            async function getGameData() {
    //@ts-ignore
                const gameData = await axios.get('http://localhost:3000')
                if (gameData) {
                    setLoading(false)
                    //@ts-ignore
                    setGames(gameData.data?.games)
                    return
                } else {
                    setLoading(false)
                    setError(true)
                    return 
                }
            }
            getGameData()
        }
        return setLoading(false)
	}, []);

    if (loading) return (
    <div>
        <p>Loading...</p>
    </div>
    )

    if (error) return (
        <div>
            <p>Sorry, something went wrong.</p>
        </div>
        )

	return (
<Grid container spacing={2} justifyContent="center">
    {
        games.map((game) => (
            <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <CardMedia
                        component="img"
                        height="250"
                        image={game.background_image}
                        alt={game.name}
                        style={{ objectFit: "cover"}}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" align="center">
                                {game.name}
                            </Typography>
                            <Box display="flex" justifyContent="space-between" mt={2}>
                            <Typography variant="body2" color="textSecondary">
                            Released:
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                            {game.released}
                            </Typography>
                            </Box>
                        </CardContent>
        
                </Card>
            </Grid>
        ))}
</Grid>
    )
} 

export default AllGames;