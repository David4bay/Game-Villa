import React from "react";
// import 'dotenv/config'
import { createRoot } from "react-dom/client";
import App from "./components/App";

// const name = process.env?.NAME

function Test() {
	return <p>Hello Test, hello, this is a webpack hot-loaded project.</p>;
}

const container = document.body.appendChild(document.createElement("div"));
const root = createRoot(container);

root.render(<App />);
