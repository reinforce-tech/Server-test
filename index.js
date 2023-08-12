import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("Hello rence page");
});

app.get("/about", (req, res) => {
	res.send("Just doing good like always");
});

app.get("/about/home", (req, res) => {
	res.send("home");
});

app.listen(5000, () => {
	console.log("App running succesfully");
});

//command netstat -ano | findstr "LISTENING"
