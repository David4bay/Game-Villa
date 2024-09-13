import {
    Typography,
    Container,
    Box,
    Paper
} from "@material-ui/core"
import React from 'react'

function Home() {

    return (
    <Container className="menu">
        <Box className="inner-menu"> {/* Just a transparent design */}
        </Box>
        <Container className="descripton">
            <Box className="description-article-1">
                <Typography variant="h3" className="description-title">Your Opinion Matters-Get Rewarded!</Typography>
                <Typography variant="h3" className="description-summary">
                    From Gamers-Earn Tokens, Level Up!
                </Typography>
            </Box>
            <Box className="description-article-2">
                <Typography variant="h3" className="description-title">Power Up with Your Reviews!</Typography>
                <Typography variant="h3" className="description-summary">
                    From Gamers-Earn Tokens, Level Up!
                </Typography>
                <Typography variant="h3" className="description-summary">
			        Welcome to the ultimate Gaming Community, where every review counts. Join the forum,<br/>
			        Earn Tokens, Level Up. Your Voice, Your Tokens, Your Community.
		        </Typography>
		        <Typography variant="h3" className="description-summary">
			        Discover, Review, and Get Rewarded.
                </Typography>
            </Box>
        </Container>
        <Container>
            <Box>
            <Typography variant="h3">How helpful reviews shape our gaming community</Typography>
            <Paper elevation={3}>
            Explore how user reviews influence the gaming landscape and why we reward our most helpful contributors.
                <Typography>
            Discuss the impact of honest, thorough reviews on other gamers’ decisions, the benefits of participating in the community, and examples of how certain reviews have guided players toward or away from specific games.
                </Typography>
            <a href="#">Top 10 Tips for Writing a Killer Game Review</a>
            </Paper>
            </Box>
            <Box>
                <Typography variant="h3">The Future of Gaming Communities: Token Rewards and Beyond</Typography>
                <Paper>
            Writing a great review is an art. Here’s how you can craft reviews that are both helpful and reward-worthy.
                    <Typography>
            Offer advice on how to structure a review, the importance of being detailed yet concise, and how to focus on key game elements like gameplay, graphics, and storyline.
                    </Typography>
            <a href="#">A look into how tokenization is changing the way gamers interact online.</a>
                </Paper>
            </Box>
            <Box>
                <Typography variant="h3">Game On, Level Up</Typography>
                <Typography>
                Whether you’re a casual gamer or a hardcore enthusiast, your insights matter. Share your experiences, help others, and watch your token stash grow.
                </Typography>
            </Box>
            <Box>
                <Typography variant="h3">Join the Revolution in Gaming Reviews</Typography>
                <p>We’re changing the game—literally. By rewarding helpful reviews, we’re creating a space where quality content and community come first.</p>
            </Box>
        </Container>
    </Container>
    )
}

export default Home