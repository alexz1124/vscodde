var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var router = express.Router();

var customers = [];
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/')));

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});
MongoClient.connect('mongodb://test:test123@ds245532.mlab.com:45532/tests',function(err, db) {
  console.log("connect")
  var dbo = db.db("tests")
  console.log(dbo)
})
app.post("/api/customers/login", function (req, res) {
  console.log('Post a Customer: ' + req.body.user);
  var customer = {};
  customer.username = req.body.user;
  customer.password = req.body.pass;

  customers.push(customer);


MongoClient.connect('mongodb://test:test123@ds245532.mlab.com:45532/tests', function (err, database) {
    if (err)
      throw err
    console.log('Connected to MongoDB')
    var dbo = database.db("tests");

    dbo.collection("User").find(customer).count(function (err, result) {

      if (result === 0) {

        return res.send('false');

      } else {
        console.log(result);
        return res.send('true');
      }
    });
  });




});

app.post("/api/customers/register", function (req, res) {
  console.log('Post a Customer: ' + req.body.user + " " + req.body.pass);
  var customer = {};
  customer.username = req.body.user;
  customer.password = req.body.pass;
  customer.email = req.body.email;
  customer.status = "user"

  customers.push(customer);


  MongoClient.connect('mongodb://test:test123@ds245532.mlab.com:45532/tests', function (err, database) {
    if (err)
      throw err
    console.log('Connected to MongoDB')
    var dbo = database.db("tests");
    dbo.collection("User").find(customer).count(function (err, result) {
      if (result === 0) {

        dbo.collection("User").insert(customer, function (err, result) {
          if (err) {
            return res.send("false")
            
          }

          else
            console.log("ok");
          return res.send("true")
         
        });

      } else {
        console.log(result);
        return res.send('false');
      }
    });
  });




});


app.post("/api/customers/contact", function (req, res) {
  console.log('Post a Customer: ' + req.body.user + " " + req.body.email);
  var customer = {};
  customer.user = req.body.user;
  customer.message = req.body.message;
  customer.email = req.body.email;

  customers.push(customer);


  MongoClient.connect('mongodb://test:test123@ds245532.mlab.com:45532/tests', function (err, database) {
    if (err)
      throw err
    console.log('Connected to MongoDB')
    var dbo = database.db("tests");
    dbo.collection("Message").insert(customer, function (err, result) {
      if (err) {
        return res.send("false")
       
      }

      else
        console.log("ok");
       return res.send("true")
      
    });
  });
});


app.post("/api/customers/auction", (req, res) => {
 console.log(req.body.user +" "+ req.body.product)

  MongoClient.connect('mongodb://test:test123@ds245532.mlab.com:45532/tests', function (err, database) {
    if (err)
      throw err
    console.log('Connected to MongoDB')

    var dbo = database.db("tests");

    var customer = {
      user: req.body.user,
      num: req.body.num,
      product : req.body.product
    }

    dbo.collection("auction").insert(customer, function (err, result) {
      if (err) {
        return res.send("false")
      }

      else
        console.log("ok");
        res.send('true')
        database.close();
    });
   
  });
})
app.post('/api/customers/changeStream',(req,res)=>{
  console.log(req.body.product)
  var query ={
    product : req.body.product
  }
  MongoClient.connect('mongodb://test:test123@ds245532.mlab.com:45532/tests', function (err, database) {
    if (err)
      throw err
    console.log('Connected to MongoDB')

    var dbo = database.db("tests");
    dbo.collection('auction').find(query).limit(1).sort({$natural:-1}).toArray((err,result)=>{
         if(err) {
             throw err
          }else {
                  console.log(result[0])
                  return res.send(result[0])
                  
         }
        
    })
});


})


app.listen(8000, () => {
  console.log("Successs")

});







