
const express = require("express");
const app = express();


const fruits = ["apple", "banana", "pear"];


// index route 

app.get("/fruits", (req, res) => {
	res.send(fruits);
})





app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})