import express from "express";
const app = express();
const server = 7000;

app.get("/", (req, res) => {
	res.send("<h1>Hello!<h1/>");
});

app.listen(server, () => {
	console.log(`port is running`);
});
