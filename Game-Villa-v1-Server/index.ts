require("dotenv").config();
import * as bcrypt from "bcryptjs";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import { home } from "./handlers/home";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const username = process.env.MONGO_USERNAME;
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

mongoose
	.connect(
		`mongodb+srv://${username}:${password}@cluster0.7fmaegp.mongodb.net/gameVilla?retryWrites=true&w=majority&appName=Cluster0`,
	)
	.then(() => {
		console.log("Mongo Atlas connected successfully");
	})
	.catch((e) => {
		console.log(`Sorry, unable to connect to Mongo Atlas, ${e.message}`);
	});

app.get('/', home)

export default app;