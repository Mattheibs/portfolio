require("dotenv").config();
const url = process.env.MONGO_DB_URL;
const app = require("./app");
const mongoose = require("mongoose");

mongoose
	.connect(url.replace("<password>", process.env.MONGO_DB_PS))
	.then(() => {
		console.log("Connected to DB");
	});

const server = app.listen("3000", () => {
	console.log("Server started");
});
