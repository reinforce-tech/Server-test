import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("Hello rence page");
});

app.get("/about", (req, res) => {
	res.send(" about me nothing much just like to type things");
});

app.get("/home", (req, res) => {
	res.send("You are in home ");
});

app.get("/about/home", (req, res) => {
	res.send("You are in home");
});

app.get("/home/about", (req, res) => {
	res.send("about me nothing much just like to type things ");
});

app.listen(5000, () => {
	console.log("App running succesfully");
});

//command netstat -ano | findstr "LISTENING"
