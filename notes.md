app.post('/api/products', function(req, res){
  db.products.save(req.body, function (err, response) {
    if (err) {
      res.status(500).json(response); // why a return because if
    }
    else {
      res.status(500).json(response);
    }
  })
});





did a get request in postman to this url
localhost:8002/api/products?name=I+KNOW+For+sure
[
  {
    "_id": "isUnique",
    "name": "I KNOW For sure"
  }
]
//__

QU: ASSISTANCE WITH GET:ID endpoint



on put: the id needs to be the legit _id   __



app.get('/api/products', function(req, res){
  db.products.find(req.query, function (error, response) {
    you do req.query which is an empty object but you use it so when you try to do a certain query like name = bob, it assigns that
    name and value to the object
    if (error) {
      return res.status(500).json(error);
    }
    else {
			// console.log(req.query, 'in get 1');
      return res.json(response);
    }
  })
});
