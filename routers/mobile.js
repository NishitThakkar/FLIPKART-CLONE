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


// router.post('/create_product/mobiles', bodyParser.json(), function (req, res) {
//     var all_mobiles = connection.db('Flipkart-Database').collection('products');
//     all_mobiles.insert(req.body, function (err, result) {
//         if (!err) {
//             res.send("created")
//         } else {
//             res.send({ err })
//         }
//     })
// })
router.post('/create_product/mobiles', bodyParser.json(), function (req, res) {
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
                { ...(JSON.parse(req.body.mob_details)), product_image: req.files.image[0].filename }, (err, result) => {
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

// router.get('/list_products/mobiles', function (req, res) {

//     var list_mobiles = connection.db('Flipkart-Database').collection('products');

//     list_mobiles.find().toArray(function (err, docs) {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.send("sorry")
//         }
//     })
// })
router.get('/list_products/mobiles', function (req, res) {

    var list_mobiles = connection.db('Flipkart-Database').collection('products');

    list_mobiles.find().toArray(function (err, docs) {
        if (!err) {
            res.send({ stauts: "ok", data: docs })
        } else {
            res.send("sorry")
        }
    })
})

router.get('/delete_product/mobile', bodyParser.json(), function (req, res) {

    var all_mobile = connection.db('Flipkart-Database').collection('products');

    all_mobile.remove({ _id: objectId(req.query.did) }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

router.get('/mob_byid', function (req, res) {

    var studentcollection = connection.db('Flipkart-Database').collection('products');

    studentcollection.find({ _id: ObjectId(req.query.mid) }).toArray(function (err, doc) {
        if (!err) {
            res.send(doc)
        } else {
            res.send("sorry")

        }
    })
})

router.post('/update_product/mobile', function (req, res) {

    var studentCollection = connection.db('Flipkart-Database').collection('products');

    studentCollection.update({ _id: objectId(req.body._id) }, {
        $set: {
            image: req.body.image, componyName: req.body.componyName, modelName: req.body.modelName, color: req.body.color,
            ram: req.body.ram, rom: req.body.rom, display: req.body.display, battery: req.body.battery, rearCamara: req.body.rearCamara,
            frontCamara: req.body.frontCamara, processor: req.body.processor, price: req.body.price
        }
    }, function (err, result) {
        if (!err) {
            res.send("updated")
        } else {
            res.send({ err })
        }
    })
})

router.get('/mob', function (req, res) {

    var studentcollection = connection.db('Flipkart-Database').collection('products');

    studentcollection.find({ componyName: req.query.mid }).toArray(function (err, docs) {
        if (!err) {
            res.send({ status: "ok", data: docs })
        } else {
            res.send("sorry")

        }
    })
})


module.exports = router;