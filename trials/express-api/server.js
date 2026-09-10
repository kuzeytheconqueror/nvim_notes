const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

list = {};

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello, world!" });
	console.log("message came!");
});

app.post("/api/post", (req, res) => {

	const {name, email} = req.json();


	if(!name || !email){
	return res.status(400).json({error: "Name and email is required"}); 
	}

	const newuser = { id: 1, name, email}

	res.status(201).json(newuser);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
