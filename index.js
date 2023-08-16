import express from "express";
const app = express();

//command netstat -ano | findstr "LISTENING"

app.listen(3000, () => {
	console.log("running on port 3000 ");
	//server port
});

app.get("/", (req, res) => {
	res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
	//Do something with the data9
	res.sendStatus(201);
});

app.put("/user/rence", (req, res) => {
	res.sendStatus(200);
});

app.patch("/user/rence", (req, res) => {
	res.sendStatus(200);
});

app.delete("/user/rence", (req, res) => {
	//Deleting
	res.sendStatus(200);
});
