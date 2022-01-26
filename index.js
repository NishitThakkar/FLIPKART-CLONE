require('dotenv').config();;
var express = require('express');
var app = express();

var nodemailer = require('nodemailer');
var path = require('path');
var router = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
const { ObjectId } = require('mongodb');
var upload = require('./multerConfig');
const fileUpload = require('express-fileupload');

var PORT = process.env.PORT

app.use(cors());
app.use(bodyParser());

app.use(express.static(path.join(__dirname, "uploads")))

app.use('/', require('./routers/ac'));
app.use('/', require('./routers/laptop'));
app.use('/', require('./routers/mobile'));
app.use('/', require('./routers/orders'));
app.use('/', require('./routers/products'));
app.use('/', require('./routers/tv'));
app.use('/', require('./routers/users'));
app.use('/', require('./routers/washing_machine'));


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
//-------------------------------------------------------------------------------------

if (process.env.NODE_ENV == "production") {

    app.use(express.static("flipkart-project-frontend/build"));

    // const path = require("path");

    // app.get("*", (req, res) => {

    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    // })


}


app.post('/user-by-email', bodyParser.json(), (req, res) => {

    console.log("email check");

    console.log(req.body.email)

    var VendorCollection = connection.db('Flipkart-Database').collection('users');

    console.log("var email check three " + req.body.email)

    VendorCollection.find({ email: (req.body.email) }).toArray((err, result) => {

        console.log("updated student two")

        if (!err && result.length > 0) {

            console.log(result);

            res.send({ status: "ok", data: result })

            console.log("email is match")
            console.warn("result==============", result)


            // var n = result.map((e) => { return e.name })
            var n = result.map((e) => { return e.userName })

            var i = result.map((e) => { return e.password })

            sendMail("flipkart77777@gmail.com", "vmbqznmpnhebsybu", req.body.email, "Welcome to Flipkart", ` your Flipkart account  password is  ` + i)

        }

        else {

            res.send({ status: "failed", data: err })

        }

    })

})



function sendMail(from, appPassword, to, subject, htmlmsg) {

    let transporter = nodemailer.createTransport(

        {

            host: "smtp.gmail.com",

            port: 587,

            secure: false,

            auth:

            {

                //  user:"weforwomen01@gmail.com",

                //  pass:""

                user: from,

                pass: appPassword

            }

        }

    );

    let mailOptions =

    {

        from: from,

        to: to,

        subject: subject,

        html: htmlmsg

    };

    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {

            console.log(error);

        }

        else {
            console.log('Email sent:' + info.response);
        }

    });

}




app.post('/create_rate_review', bodyParser.json(), function (req, res) {

    var all_rr = connection.db('Flipkart-Database').collection('rate_review');

    all_rr.insert(req.body, function (err, result) {
        if (!err) {
            res.send({ status: "ok", data: "created" })
        } else {
            res.send({ err })
        }
    })
})


app.get('/list_rate_review', function (req, res) {

    var list_rr = connection.db('Flipkart-Database').collection('rate_review');

    list_rr.find().toArray(function (err, docs) {
        if (!err) {
            res.send({ stauts: "ok", data: docs })
        } else {
            res.send("sorry")
        }
    })
})

//     up.update({ b_email: req.body.e }, {

//         $set: req.body.detailes
//     }, function (err, result) {
//         console.log(result);
//         if (!err) {
//             res.send({ status: "ok", data: "updated" })
//         } else {
//             res.send({ status: "failed", data: err })
//         }
//     })
// })
//     up.update({
//         b_email: req.body.e && { _id: objectId(req.body.bid) }
//     }, {

//         $set: req.body.detailes
//     }, function (err, result) {
//         console.log(result);
//         if (!err) {
//             res.send({ status: "ok", data: "updated" })
//         } else {
//             res.send({ status: "failed", data: err })
//         }
//     })


app.post('/update_seller', bodyParser.json(), function (req, res) {

    console.log("line 521----");
    upload(req, res, (error) => {
        if (error) {
            console.log("error uploading image");
            console.log(error);
            res.send({ status: 'failed1', data: error });
        } else {

            console.log("line 529 in index.js");

            console.log("req.body==", req.body);

            console.log("fileimage", JSON.stringify(req.files));

            var studentCollection = connection.db('Flipkart-Database').collection('users');
            //    req send to createstudent  
            studentCollection.update({ _id: ObjectId(JSON.parse(req.body.user)._id) },
                { $set: { ...(JSON.parse(req.body.b_detailes)), bLogo: req.files.b_Logo[0].filename } }, (err, result) => {
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
    app.post('/add-business-details', bodyParser.json(), (req, res) => {
        upload(req, res, (error) => {
            if (error) {
                console.log("error uploading image");
                console.log(error);
                res.send({ status: 'failed', data: error });
            } else {
                console.log(req.body);
                console.log("fileimage", req.files);
                var studentCollection = connection.db('services').collection('users');
                //    req send to createstudent  
                studentCollection.update({ _id: ObjectId(JSON.parse(req.body.user)._id) }, { $set: { ...(JSON.parse(req.body.business_details)), business_logo: req.files.business_logo[0].filename } }, (err, result) => {

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

    // var alll_seller = connection.db('Flipkart-Database').collection('users');
    // console.log(req.body);
    // alll_seller.update({ _id: objectId(req.body.user) }, {
    //     $set: req.body.b_detailes
    // }, function (err, result) {
    //     console.log(result);
    //     if (!err) {
    //         res.send({ status: "ok", data: "updated" })
    //     } else {
    //         res.send({ status: "failed", data: err })
    //     }
    // })
})
// app.post('/update_seller', bodyParser.json(), function (req, res) {

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




app.post('/fileupload', function (req, res, next) {
    // console.log(req.files.file123, "req.files.file123")

    // var fileobject = req.files.file123;
    // var filename = req.files.file123.name;

    // fileobject.mv("public/upload/" + filename, function (err) {
    //     if (err)
    //         return res.status(500).send(err);

    //     res.send('File uploaded!');
    // });
    res.send("hello")
});




// app.post('/add-business-details', bodyParser.json(), (req, res) => {
//     var studentCollection = connection.db('services').collection('users');
//         req send to createstudent  
//     studentCollection.update({ _id: ObjectId(req.body.user._id) }, { $set: req.body.business_details }, (err, result) => {\
//         if (!err) {
//             res.send({ status: "ok", data: "Business Details update succesfully" });
//         }
//         else {
//             res.send({ status: "failed", data: err });
//         }
//     })
// });

// app.post ('/add-vendor-service', bodyParser.json(),(req,res)=>{
//     var studentCollection =connection.db('services').collection('users');     
//         req send to createstudent  
//             studentCollection.update({_id:ObjectId(req.body.user._id)},{$push:{vendor_services:req.body.service_details}},(err,result)=>{
//             if(!err)
//             {
//             res.send({status:"ok",data:"Service  Details added succesfully"});
//             }
//             else{
//             res.send({status:"failed",data:err});
//             }
//             })
// });



// app.post('/get-services-by-category', bodyParser.json(),(req,res)=>{
//     var studentCollection =connection.db('services').collection('users');
//     studentCollection.find().toArray((err,docs)=>{
//         if(!err)
//         {
//             var allServices = [];
//             docs.forEach((u)=>{
//               u.vendor_services &&  u.vendor_services.forEach((sr)=>{
//                     allServices.push(sr);
//                 })
//             });

//             var catServices = allServices.filter(srvs=>{
//                 return srvs.service_category==req.body.service_category;
//             })
//             console.log("---------157-------------")
//             console.log(catServices);
//             res.send({status:"ok", data:catServices});
//         }
//         else{
//             res.send({status:"failed", data:err});
//         }
//     })
// })

// app.post('/update-users',bodyParser.json(),(req,res)=>{
//     var studentCollection =connection.db('services').collection('users');     
//                                                                     //    req send to createstudent  
//     studentCollection.update({_id:ObjectId(req.body._id)},{$set:{name:req.body.name ,phone:req.body.phone ,address:req.body.address, email:req.body.email , password:req.body.password  }},(err,result)=>{
//         if(!err)
//         {
//             res.send({status:"ok",data:"users update succesfully"});
//         }
//         else{
//             res.send({status:"failed",data:err});
//         }
//     })
// });

// cd flipkart-project-backtend
// cd flipkart-project-frontend

app.listen(PORT, function () {
    console.warn("server started at " + PORT);
})
