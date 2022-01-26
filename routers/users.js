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

router.post('/create_user', bodyParser.json(), function (req, res) {

    var users = connection.db('Flipkart-Database').collection('users');

    users.findOne({ email: req.body.email }).then(function (same) {
        if (same) {
            res.send("Email Id is available")
        } else {

            users.insert(req.body, function (err, result) {
                if (!err) {
                    res.send("Thanks For Using Flipkart")
                } else {
                    res.send({ err })
                }
            })
        }
    })

})
router.get('/list_users', function (req, res) {

    var usersCollection = connection.db('Flipkart-Database').collection('users');

    usersCollection.find().toArray(function (err, docs) {
        if (!err) {
            res.send({ status: "ok", data: docs })
        } else {
            res.send("sorry")
        }
    })
})

router.get('/delete_user', bodyParser.json(), function (req, res) {

    var users = connection.db('Flipkart-Database').collection('users');

    users.remove({ _id: objectId(req.query.did) }, function (err, result) {
        if (!err) {
            res.send("deleted")
        } else {
            res.send(err)
        }
    })
})

router.post('/login_user', bodyParser.json(), function (req, res) {

    var users = connection.db('Flipkart-Database').collection('users');

    users.findOne({ email: req.body.email, password: req.body.password }, function (err, doc) {
        if (doc) {
            res.send({ status: "ok", data: doc })
        } else {
            res.send({ status: "failed", err })
        }
    })
})


router.post('/create_seller', bodyParser.json(), function (req, res) {

    var users = connection.db('Flipkart-Database').collection('users');

    users.insert(req.body, function (err, result) {
        if (!err) {
            res.send("Congratulation !! you are now a vendor..")
        } else {
            res.send({ err })
        }
    })
})

router.get('/users-by-id', (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.find({ _id: ObjectId(req.query.id) }).toArray((err, docs) => {
        if (!err) {
            res.send({ status: "ok", data: docs });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});
// router.post('/update_seller', bodyParser.json(), function (req, res) {
//     var alll_seller = connection.db('Flipkart-Database').collection('users');
//     console.log(req.body);
//     alll_seller.update({ _id: objectId(req.body.user) }, {
//         $set: req.body.b_detailes
//     }, function (err, result) {
//         console.log(result);
//         if (!err) {
//             res.send({ status: "ok", data: "updated" })
//         } else {
//             res.send({ status: "failed", data: err })
//         }
//     })
// })


module.exports = router;