import React from "react";
import "../style/styles.scss";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Header from "./Header/Header";
// import { Helmet } from "react-helmet"
import Home from "./Home/Home";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1e1c22",
		},
		secondary: {
			main: "#f4fff8",
		},
		background: {
			default: "#ffffff",
		},
		text: {
			primary: "#333",
		},
	},

});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Home />
		</ThemeProvider>
	);
}
export default App;
