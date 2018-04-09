
const express = require("express"); // not syntax for module there is no . or / 
const app = express();

// our data
// not the syntax for requring file
const fruits = require("./models/fruits.js")

// index route 

app.get("/fruits", (req, res) => {
	// res.send(fruits);
	// for(let i = 0; i < fruits.length; i++) {

	// }
	
	res.render("index.ejs", {
		fruitList: fruits

	})
})

// show route 

app.get("/fruits/:id", (req, res) => {
	// const index  = req.params.id
	// res.send(fruits[index])

	// you render templates
	// you can pass in the data you want to display in your template as the second parameter
	// your data will be an always be an object 
	// advice: use singualr for show page
	res.render("show.ejs", {
		fruit: fruits[req.params.id]
	})

})


app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})