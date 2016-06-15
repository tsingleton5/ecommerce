var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/ecommerce2', function (err) {
	// console.log(err);
});

var Product = require('./Product.js') //var Product is the model with the ProductSchema embedded into it to make it work

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));


app.post('/api/products', function(req, res){
  var newProduct = new Product(req.body);
	newProduct.save(function (error, newProduct) {
		if (error) {
			return res.status(500).json(error);
		}
		return res.status(200).json(newProduct);
	})
});


app.get('/api/products', function(req, res){
  Product.find(req.query, function (error, response) {
		if (error) {
			return res.status(500).json(error);
		}
		return res.status(200).json(response);
  })
});



app.get('/api/products/:id', function(req, res){ // do this one later
  Product.findById(req.params.id, function (error, oneProduct) {
		if (error) {
			return res.status(500).json(error);
		}
		return res.status(200).json(oneProduct);
  })
});


app.put('/api/products/:id', function(req, res){
  Product.findByIdAndUpdate(req.params.id, req.body, function (error, updatedProduct) {
		if (error) {
			return res.status(500).json(error);
		}
		return res.status(200).json(updatedProduct);
  })
});


app.delete('/api/products/:id', function(req, res){
  Product.findByIdAndRemove(req.params.id, function (error, nothing) {
		if (error) {
			return res.status(500).json(error);
		}
		return res.status(200).json(nothing);
  })
});








var port = 8002;
app.listen(port, function () {
  console.log('successfully listening to', port);
})
