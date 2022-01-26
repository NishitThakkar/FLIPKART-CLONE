var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
const { ObjectId } = require('mongodb');
const upload = require('../multerConfig');

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

// router.post('/create_product/laptop', bodyParser.json(), function (req, res) {

//     var users = connection.db('Flipkart-Database').collection('products');

//     users.insert(req.body, function (err, result) {
//         if (!err) {
//             res.send("created")
//         } else {
//             res.send({ err })
//         }
//     })
// })
router.post('/create_product/laptop', bodyParser.json(), function (req, res) {
    console.log("line 34----");
    upload(req, res, (error) => {
        if (error) {
            console.log(error, "error uploading image");
            console.log(error);
            res.send({ status: 'failed12', data: error });
        } else {
            console.log("line 41 in mobile.js");
            console.log("req.body==", req.body);
            console.log("fileimage==", req.files);
            var studentCollection = connection.db('Flipkart-Database').collection('products');
            studentCollection.insert(
                { ...(JSON.parse(req.body.laptop_details)), product_image: req.files.image[0].filename }, (err, result) => {
                    console.log(result, "--result");
                    console.log(err);
                    if (!err) {
                        res.send({ status: "ok", data: "LAPTOP Details update succesfully" });
                    }
                    else {
                        res.send({ status: "failed", data: err });
                    }
                })

        }
    })
})
// router.get('/list_products/laptop', function (req, res) {

//     var studentCollection = connection.db('Flipkart-Database').collection('products');

//     studentCollection.find().toArray(function (err, docs) {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.send("sorry")
//         }
//     })
// })
router.get('/list_products/laptop', function (req, res) {

    var studentCollection = connection.db('Flipkart-Database').collection('products');

    studentCollection.find().toArray(function (err, docs) {
        if (docs) {
            var r = docs.filter(check)

            function check(d) {
                return d.productName == "Laptop"
            }
            res.send({ status: "ok", data: r })
        } else {
            res.send("sorry")
        }
    })
})

router.get('/delete_product/laptop', bodyParser.json(), function (req, res) {

    var all_laptop = connection.db('Flipkart-Database').collection('products');

    all_laptop.remove({ _id: objectId(req.query.did) }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

router.get('/update_laptop_byid', function (req, res) {

    var studentcollection = connection.db('Flipkart-Database').collection('products');

    studentcollection.find({ _id: ObjectId(req.query.iid) }).toArray(function (err, docs) {
        if (!err) {
            res.send(docs)
        } else {
            res.send("sorry")

        }
    })
})

router.post('/update_product/laptop', function (req, res) {

    var alll_laptop = connection.db('Flipkart-Database').collection('products');

    alll_laptop.update({ _id: objectId(req.body._id) }, {
        $set: {
            componyName: req.body.componyName, modelName: req.body.modelName, color: req.body.color,
            battery: req.body.battery, processor: req.body.processor, screenSize: req.body.screenSize,
            graphicProcessor: req.body.graphicProcessor, price: req.body.price
        }
    }, function (err, result) {
        if (!err) {
            res.send("updated")
        } else {
            res.send({ err })
        }
    })
})
module.exports = router;