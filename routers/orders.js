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


router.post('/orders', bodyParser.json(), function (req, res) {

    var orders = connection.db('Flipkart-Database').collection('orders')

    orders.insert(req.body, function (err, result) {

        if (!err) {
            res.send("created")
        } else {
            res.send({ err })
        }
    })
})
router.get('/orders/list_orders', function (req, res) {

    var list_orders = connection.db('Flipkart-Database').collection('orders');

    list_orders.find().toArray(function (err, docs) {
        if (docs) {
            res.send({ status: "ok", data: docs })
        }

        else {
            res.send("sorry")
        }
    })
})

router.get('/delete_orders', bodyParser.json(), function (req, res) {

    var all_orders = connection.db('Flipkart-Database').collection('orders');

    // all_orders.remove({ _id: objectId(req.query.oid) }, function (err, result) {
    all_orders.remove({ _id: req.query.oid }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

router.post('/update_status', bodyParser.json(), function (req, res) {

    var up = connection.db('Flipkart-Database').collection('orders');
    console.log(req.body);
    // up.update({ _id: objectId(req.body.bid) }, {
    up.update({ _id: req.body.bid }, {
        $set: { status: "delivered" }
    }, function (err, result) {
        console.log("result", result);
        if (!err) {
            res.send({ status: "ok", data: "updated" })
        } else {
            res.send({ status: "failed", data: err })
        }
    })
})

module.exports = router;