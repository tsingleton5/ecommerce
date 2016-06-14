var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();

var db = mongojs('ecommerce', ['products']);

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.post('/api/products', function(req, res){
	db.products.save(req.body, function(error, response){
		if (error) {
			return res.status(500).json(error);
		}
    else {
			return res.json(response);
		}
	});
});


app.get('/api/products', function(req, res){
  db.products.find(req.query, function (error, response) {
    if (error) {
      return res.status(500).json(error);
    }
    else {
			// console.log(req.query, 'in get 1');
      return res.json(response);
    }
  })
});



app.get('/api/products/:id', function(req, res){
	var idObj = {
		_id: req.params.id // _id is assigned to r.p.id - doing this you have to put the id in the url to get
	};
	db.products.findOne(idObj, function(error, response){
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(response);
		}
	});
});


app.put('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed'); //error handling plus you want to be thourough-need to have a specific id to do endpoint
	}
	var query = {
		_id: mongojs.ObjectId(req.params.id)
	};
	db.products.update(query, req.body, function(error, response){ // second parameter is what you want to replace data with
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});


app.delete('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongojs.ObjectId(req.params.id)
	};
	db.products.remove(query, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});








var port = 8002;
app.listen(port, function () {
  console.log('successfully listening to', port);
})
