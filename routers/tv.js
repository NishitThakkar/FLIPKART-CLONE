var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
const { ObjectId } = require('mongodb');
const upload = require('../multerConfig');
var multer = require("multer");

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


// router.post('/create_product/tv', bodyParser.json(), function (req, res) {

//     var users = connection.db('Flipkart-Database').collection('products');

//     users.insert(req.body, function (err, result) {
//         if (!err) {
//             res.send("created")
//         } else {
//             res.send({ err })
//         }
//     })
// })


router.post('/create_product/tv', bodyParser.json(), function (req, res) {

    console.log("line 37----");
    upload(req, res, (error) => {
        if (error) {
            console.log(error, "error uploading image");
            console.log(error);
            res.send({ status: 'failed12', data: error });
        } else {
            console.log("line 45 in index.js");
            console.log("req.body==", req.body);
            console.log("fileimage==", req.files);
            var studentCollection = connection.db('Flipkart-Database').collection('products');
            studentCollection.insert(
                { ...(JSON.parse(req.body.tv_details)), product_image: req.files.image[0].filename }, (err, result) => {
                    console.log(result, "--result");
                    console.log(err);
                    if (!err) {
                        res.send({ status: "ok", data: "Tv Details update succesfully" });
                    }
                    else {
                        res.send({ status: "failed", data: err });
                    }
                })

        }
    })
})

// router.get('/list_products/tv', function (req, res) {

//     var studentCollection = connection.db('Flipkart-Database').collection('products');

//     studentCollection.find().toArray(function (err, docs) {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.send("sorry")
//         }
//     })
// })
router.get('/list_products/tv', function (req, res) {

    var studentCollection = connection.db('Flipkart-Database').collection('products');


    studentCollection.find().toArray(function (err, docs) {
        if (docs) {

            var result = docs.filter(docs => docs.productName == "Tv");

            res.send(result)
        } else {
            res.send("sorry")
        }

    })
})

router.get('/delete_product/tv', bodyParser.json(), function (req, res) {

    var all_laptop = connection.db('Flipkart-Database').collection('products');

    all_laptop.remove({ _id: objectId(req.query.did) }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

// router.get('/update_tv_byid', function (req, res) {

//     var studentcollection = connection.db('Flipkart-Database').collection('products');

//     studentcollection.find({ _id: ObjectId(req.query.id) }).toArray(function (err, docs) {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.send("sorry")

//         }
//     })
// })

router.post('/update_product/tv', function (req, res) {

    var alll_tv = connection.db('Flipkart-Database').collection('products');

    alll_tv.update({ _id: objectId(req.body._id) }, {
        $set: {
            componyName: req.body.componyName, modelName: req.body.modelName, color: req.body.color,
            displaySize: req.body.displaySize, screenType: req.body.screenType, resolution: req.body.resolution, price: req.body.price
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