var path = require('path');
var multer = require('multer');


var storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, './uploads');
        },
        filename: function (req, file, cb) {
            var ext = path.extname(file.originalname);
            console.log("in config 12---trying to upload --" + file.fieldname.slice(0, 3) + '-' + Date.now() + "." + ext)
            cb(null, file.fieldname.slice(0, 3) + '-' + Date.now() + "." + ext);
        }
    }

    //   resume-234763458969876.jpg

)


var multerOptions = {
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        var fieldName = file.fieldname;

        // if (fieldName == "Logo") {
        //     if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.JPG' && ext !== '.PNG') {
        //         return callback(new Error('Only images are allowed'));
        //     }
        //     callback(null, true);
        // }

        if (fieldName == "b_Logo") {
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.JPG' && ext !== '.PNG') {
                return callback(new Error('Only images are allowed'));
            }
            callback(null, true);
        } else if (fieldName == "Logo") {
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.JPG' && ext !== '.PNG') {
                return callback(new Error('Only images are allowed'));
            }
            callback(null, true);
        }
        else if (fieldName == "image") {
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.JPG' && ext !== '.PNG') {
                return callback(new Error('Only images are allowed'));
            }
            callback(null, true);
        }
        else if (fieldName == "resume") {
            if (ext !== '.pdf') {
                return callback(new Error('Only pdf are allowed'));
            }
            callback(null, true);
        }

    }
}

// var upload = multer(multerOptions).fields([{ name: "Logo", maxCount: 1 }]);
var upload = multer(multerOptions).fields([{ name: "b_Logo", maxCount: 1 }, { name: "Logo", maxCount: 1 }, { name: "image", maxCount: 1 }]);


module.exports = upload;