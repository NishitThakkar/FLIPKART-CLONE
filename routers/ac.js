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
// router.post('/create_product/ac', bodyParser.json(), function (req, res) {

//     var all_products = connection.db('Flipkart-Database').collection('products');

//     all_products.insert(req.body, function (err, result) {
//         if (!err) {
//             res.send("created")
//         } else {
//             res.send({ err })
//         }
//     })
// })
router.post('/create_product/ac', bodyParser.json(), function (req, res) {
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
                { ...(JSON.parse(req.body.ac_details)), product_image: req.files.image[0].filename }, (err, result) => {
                    console.log(result, "--result");
                    console.log(err);
                    if (!err) {
                        res.send({ status: "ok", data: "AC Details update succesfully" });
                    }
                    else {
                        res.send({ status: "failed", data: err });
                    }
                })

        }
    })
})
router.get('/list_products/ac', function (req, res) {

    var list_ac = connection.db('Flipkart-Database').collection('products');

    list_ac.find().toArray(function (err, docs) {

        if (docs) {
            var all_tv = docs.filter(check)

            function check(products) {
                return products.productName == "AC"
            }
            res.send({ status: "ok", data: all_tv })
        } else {
            res.send("sorry")
        }

        // if (!err) {
        //     res.send({ stauts: "ok", data: docs })
        // } else {
        //     res.send("sorry")
        // }
    })
})

router.get('/ac_by_id', function (req, res) {

    var studentcollection = connection.db('Flipkart-Database').collection('products');

    studentcollection.find({ _id: ObjectId(req.query.aid) }).toArray(function (err, doc) {
        if (!err) {
            res.send(doc)
        } else {
            res.send("sorry")

        }
    })
})

router.post('/update_product/ac', function (req, res) {

    var productsCollection = connection.db('Flipkart-Database').collection('products');

    productsCollection.update({ _id: objectId(req.body._id) }, {
        $set: {
            componyName: req.body.componyName, modelName: req.body.modelName, acColor: req.body.acColor,
            coolingCapacity: req.body.coolingCapacity, powerConsumption: req.body.powerConsumption, type: req.body.type, capacity: req.body.capacity, energyRating: req.body.energyRating,
            technology: req.body.technology, turboMode: req.body.turboMode, price: req.body.price, turboMode: req.body.turboMode
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