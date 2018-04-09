
const express = require("express"); // not syntax for module there is no . or / 
const app = express();

// our data
// not the syntax for requring file
const fruits = require("./models/fruits.js")

// index route 

app.get("/fruits", (req, res) => {
	res.send(fruits);
})

// show route 


app.get("/fruits/:id", (req, res) => {
	const index  = req.params.id
	res.send(fruits[index])
})


app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})