// install the backend folder - npm init 
// install the backend folder - npm i express cors body-parser monogodb --save 

var express = require('express');
var cors = require('cors'); // response come from origin 
var bodyParser = require('body-parser'); // post request ke kaam aayega 
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var upload = require('./multerConfig');
var path = require("path");


var app = express();

app.use(cors());


app.use(express.static(path.join(__dirname, "uploads")));


var client = new MongoClient("mongodb+srv://serviceproject:serviceproject@cluster0.gww62.mongodb.net/services?retryWrites=true&w=majority", { useNewUrlParser: true, UseUnifiedTopology: true });
// username,password : serviceproject
// mongodb+srv://serviceproject:serviceproject@cluster0.gww62.mongodb.net/services?retryWrites=true&w=majority"
var connection;
// connection establish
client.connect((err, db) => {
    if (!err) {
        connection = db;
        console.log("database connected Successfully");
    }
    else {
        console.log("database could not connect");
    }
})


app.get('/list-users', (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.find().toArray((err, docs) => {
        if (!err) {
            res.send({ status: "ok", data: docs });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});
app.get('/users-by-id', (req, res) => {
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

app.get('/delete-users', (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.remove({ _id: ObjectId(req.query.id) }, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "user deleted succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});

app.post('/create-users', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.insert(req.body, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "user Created succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});

app.post('/update-users', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    //    req send to createstudent  
    studentCollection.update({ _id: ObjectId(req.body._id) }, { $set: { name: req.body.name, phone: req.body.phone, address: req.body.address, email: req.body.email, password: req.body.password } }, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "users update succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});

app.post('/login-users', bodyParser.json(), (req, res) => {
    var userlogin = connection.db('services').collection('users');
    console.log(req.body);
    userlogin.findOne({ email: req.body.email, password: req.body.password }, function (err, result) {
        if (!err && result) {
            console.log("153");
            console.log(result);
            res.send({ status: "ok", data: result });
        }
        else {
            res.send({ status: "ok", data: err })
        }
    })
})








app.post('/add-business-details', bodyParser.json(), (req, res) => {


    console.log("line 123----");
    upload(req, res, (error) => {
        if (error) {
            console.log("error uploading image");
            console.log(error);
            res.send({ status: 'failed', data: error });
        } else {

            console.log("line 131 in index.js");

            console.log(req.body);
            console.log("fileimage", req.files);
            var studentCollection = connection.db('services').collection('users');
            //    req send to createstudent  
            studentCollection.update({ _id: ObjectId(JSON.parse(req.body.user)._id) },
                {
                    $set: {
                        ...(JSON.parse(req.body.business_details)),
                        business_logo: req.files.business_logo[0].filename
                    }
                },
                (err, result) => {

                    console.log(result);
                    console.log(err);
                    if (!err) {
                        res.send({ status: "ok", data: "Business Details update succesfully" });
                    }
                    else {
                        res.send({ status: "failed", data: err });
                    }
                })

        }
    })
});



app.post('/add-vendor-service', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    //    req send to createstudent  
    studentCollection.update({ _id: ObjectId(req.body.user._id) }, { $push: { vendor_services: req.body.service_details } }, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "Service  Details added succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});

app.post('/get-services-by-category', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.find().toArray((err, docs) => {
        if (!err) {
            var allServices = [];

            docs.forEach((u) => {
                u.vendor_services && u.vendor_services.forEach((sr) => {
                    allServices.push({ ...sr, vendor_id: u._id, business_logo: u.business_logo });
                })
            });
            console.log("---------153-------------")
            console.log(allServices);
            console.log("checking for " + req.body.service_category);
            var catServices = allServices.filter(srvs => {
                return srvs.service_category == req.body.service_category;
            })

            var service
            console.log("---------157-------------")
            console.log(catServices);
            res.send({ status: "ok", data: catServices });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})

app.post('/get-service-requests', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.find({ _id: ObjectId(req.body.vendor_id) }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs[0].customer_requests });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})
app.post('/history', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.find({ role: "Vendor" }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            var customer_requests = [];
            docs.forEach((v) => {
                v.customer_requests.forEach((cr) => {
                    if (cr.customer_id == req.body.customer_id) {
                        customer_requests.push({ ...cr, vendor_name: v.name, vendor_phone: v.phone, vendor_email: v.email });
                    }
                })


            })

            console.log("---line 239");
            console.log(customer_requests);


            res.send({ status: "ok", data: customer_requests });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})

app.post('/get-service-by-vendor', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    studentCollection.find({ _id: ObjectId(req.body.vendor_id) }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs[0].vendor_services });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
})



app.post('/customer-service-request', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    console.log("------176--------")
    console.log(req.body)

    //    req send to createstudent  
    studentCollection.update({ _id: ObjectId(req.body.vendor_id) }, { $push: { customer_requests: req.body.customer_request } }, (err, result) => {
        if (!err) {
            console.log("updated");
            res.send({ status: "ok", data: "Service request sent succesfully" });
        }
        else {
            console.log(err);
            res.send({ status: "failed", data: err });
        }
    })
})


app.post('/update-customer-service-request', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('users');
    console.log("------226--------")
    console.log(req.body)

    //    req send to createstudent  
    studentCollection.updateMany({ _id: ObjectId(req.body.vendor_id) },
        { $set: { "customer_requests.$[crequests].status": req.body.status_to } },

        {
            arrayFilters: [{
                "crequests.customer_email": req.body.customer_email,
                "crequests.service_title": req.body.service_title,
                "crequests.status": req.body.status_from,
            }]
        },


        (err, result) => {
            if (!err) {
                console.log("updated");
                res.send({ status: "ok", data: "Service request sent succesfully" });
            }
            else {
                console.log(err);
                res.send({ status: "failed", data: err });
            }
        })
});


app.get('/list-contact', (req, res) => {
    var studentCollection = connection.db('services').collection('AddDetails');
    studentCollection.find().toArray((err, docs) => {
        if (!err) {
            res.send({ status: "ok", data: docs });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});


app.get('/contact-by-id', (req, res) => {
    var studentCollection = connection.db('services').collection('AddDetails');
    studentCollection.find({ _id: ObjectId(req.query.id) }).toArray((err, docs) => {
        if (!err) {
            res.send({ status: "ok", data: docs });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});

app.post('/contact-users', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('AddDetails');
    studentCollection.insert(req.body, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "contact Details send succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});


app.get('/delete-contact', (req, res) => {
    var studentCollection = connection.db('services').collection('AddDetails');
    studentCollection.remove({ _id: ObjectId(req.query.id) }, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "contact deleted succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});


app.post('/update-contact', bodyParser.json(), (req, res) => {
    var studentCollection = connection.db('services').collection('AddDetails');

    studentCollection.update({ _id: ObjectId(req.body._id) }, { $set: { name: req.body.name, email: req.body.email, message: req.body.message } }, (err, result) => {
        if (!err) {
            res.send({ status: "ok", data: "Contact Query update succesfully" });
        }
        else {
            res.send({ status: "failed", data: err });
        }
    })
});


app.listen(3001, () => {
    console.log("Server is started on port 3001");
})

