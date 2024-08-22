import { Slide } from "@material-ui/core";
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
	const navItems = ["All Games", "Signin", "Signup"];

	return (
		<React.Fragment>
			<CssBaseline />
			<Toolbar>
			<HideOnScroll {...props}>
				<div>
					<AppBar>
						<Toolbar className="navContainer">
							<Box className="titleSearchContainer">
								<strong className="homeTitle">gv </strong>
								<span className="banner-title">engage. </span>
								<span className="banner-title">review. </span>
								<span className="banner-title">earn. </span>
							</Box>
							<div className="snackBar">
								<ul className="navList">
									{navItems.map((page) => (
										<li key={page}>{page}</li>
									))}
								</ul>
							</div>
						</Toolbar>
					</AppBar>
				</div>
			</HideOnScroll>
			</Toolbar>
<header className="home">
	<div  className="title">
		<h1>
			GameVilla
		</h1>
		<h2>
			Play. Review. <span className="subtitle-emphasis">Earn!</span>
		</h2>
	</div>
</header>
		</React.Fragment>
	);
}

export default Header;