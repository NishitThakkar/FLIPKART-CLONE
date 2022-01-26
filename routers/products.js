var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
const { ObjectId } = require('mongodb');

var client = new MongoClient('mongodb+srv://flipkart_users:flipkart_users@cluster0.2gi8t.mongodb.net/Flipkart-Database?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })
var connection;
client.connect(function (err, db) {
    if (!err) {
        connection = db
        console.log("db connected");
    } else {
        console.log(err);
    }
})

//------------------------------------------------------------------------------

router.get('/list_products', function (req, res) {

    var list_products = connection.db('Flipkart-Database').collection('products');

    list_products.find().toArray(function (err, docs) {
        if (!err) {
            res.send({ stauts: "ok", data: docs })
        } else {
            res.send("sorry")
        }
    })
})

router.get('/delete_product', bodyParser.json(), function (req, res) {

    var all_product = connection.db('Flipkart-Database').collection('products');

    all_product.remove({ _id: objectId(req.query.pid) }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

module.exports = router;

