require('dotenv').config();

const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const path = require('path');
const crypto = require('crypto');

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '../../tmp/uploads/user-images'));
        },

        filename: function (req, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            })
        }
    }),

    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'app-assprijuf',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            })
        }

    })
}

module.exports = {
    upload: {
        //dest: path.resolve(__dirname, '../../tmp/uploads/user-images'),

        storage: storageTypes["s3"],

        filefilter: (req, file, cb) => {
            const allowedMimes = [
                'image/jpeg',
                'image/pjpeg',
                'image/jpg',
                'image/png',
                'image/gif',
            ];

            if (allowedMimes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error('Arquivo inválido'));
            }
        },
    }
}