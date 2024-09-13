import { Slide } from "@material-ui/core";
import { Paper, Typography } from '@mui/material'
import { useScrollTrigger } from "@material-ui/core";
import {
	AppBar,
	Box,
	Container,
	CssBaseline,
	Toolbar,
} from "@material-ui/core";
import React from "react";

interface Props {
	window?: () => Window;
	children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

function Header(props: Props) {
	const navItems = ["User Reviews", "All Games", "Signin/Signup"];

	return (
		<React.Fragment>
			<CssBaseline />
			<Toolbar>
			<HideOnScroll {...props}>
				<Box>
					<AppBar>
						<Toolbar className="navContainer">
							<Box className="titleSearchContainer">
								<Paper className="homeTitle">gv </Paper>
								<Paper className="banner-title">engage. </Paper>
								<Paper className="banner-title">review. </Paper>
								<Paper className="banner-title">earn. </Paper>
							</Box>
							<Box className="snackBar">
								<Box className="navList">
									{navItems.map((page) => (
										<Paper key={page}>{page}</Paper>
									))}
								</Box>
							</Box>
						</Toolbar>
					</AppBar>
				</Box>
			</HideOnScroll>
			</Toolbar>
<Container className="home">
	<Box  className="title">
		<Typography variant="h1">
			GameVilla
		</Typography>
		<Typography variant="h2">
			Play. Review. <Paper className="subtitle-emphasis">Earn!</Paper>
		</Typography>
	</Box>
</Container>
		</React.Fragment>
	);
}

export default Header;