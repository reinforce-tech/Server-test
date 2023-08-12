// import express from "express";
// const app = express();
// const server = 7000;

// app.get("/", (req, res) => {
// 	res.send("<h1>Hello!<h1/>");
// });

// app.listen(server, () => {
// 	console.log(`port is running`);
// });

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
