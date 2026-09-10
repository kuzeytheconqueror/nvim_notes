const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const list = [];

let aut_id = 1;

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello, world!" });
	console.log("Hello world camed");
});

app.get("/api/greet", (req, res) => {	
	res.json({ message: "greetings!" });
	console.log("greeting camed!");
});

app.post("/api/post", (req, res) => {

	const {name, email} = req.body;


	if(!name || !email){
	return res.status(400).json({error: "Name and email is required"}); 
	}

	const newuser = { id: aut_id, name, email};
	
	list.push(newuser);

	aut_id++;

	res.status(201).json(newuser);
});

app.get("/api/getall", (req, res) => {
	res.json(list);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});


