const Partner = require('../models/Partner');

const path = require('path');
const fs = require('fs');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const s3 = new aws.S3();

module.exports = {

    async index(request, response) {
        try {
            const partners = await Partner.find({});

            return response.json(partners);
        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },

    async store(request, response) {
        try {

            const {
                location: imageURL = "",
                key,
            } = request.file;

            const {
                name,
                advantages,
                description,
            } = request.body;

            let partner = await Partner.findOne({ name })

            if (!partner) {

                partner = await Partner.create({
                    name,
                    advantages,
                    description,
                    imageURL,
                    key,
                });
            } else { response.send("Parceiro ja Cadastrado"); }

            return response.json(partner);
        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },


    async storeWithoutPhoto(request, response) {
        try {

            const {
                name,
                advantages,
                description,
            } = request.body;

            let partner = await Partner.findOne({ name })

            if (!partner) {

                partner = await Partner.create({
                    name,
                    advantages,
                    description,
                    imageURL: null,
                    key: null,
                });
            } else { response.send("Parceiro ja Cadastrado"); }

            return response.status(400).json(partner);
        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },


    async show(request, response) {
        try {
            const partner = await Partner.findById(request.params._id);

            return response.json(partner);
        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },

    async update(request, response) {
        try {

            const {
                location: imageURL = "",
                key,
            } = request.file;

            const {
                name,
                advantages,
                description,
                key: deleteKey
            } = request.body;

            if (deleteKey != null) {
                s3.deleteObject({
                    Bucket: 'app-assprijuf',
                    Key: deleteKey
                }).promise()
            }

            await Partner.findByIdAndUpdate(request.params._id, {
                name,
                advantages,
                description,
                imageURL,
                key,
            }, { new: true });

            s3.putObject({
                Bucket: 'app-assprijuf',
                Key: key,
                ContentType: multerS3.AUTO_CONTENT_TYPE,
                ACL: 'public-read',
            }).promise()

            return response.status(200).send("Parceiro atualizado!")

            //return response.status(200).send("Parceiro atualizado");
        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },

    async updateWithoutPhoto(request, response) {
        try {

            const {
                name,
                advantages,
                description,
            } = request.body;

            await Partner.findByIdAndUpdate(request.params._id, {
                name,
                advantages,
                description,
            }, { new: true });

            return response.status(200).send("Parceiro atualizado!")

        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },

    async destroy(request, response) {
        try {

            const partner = await Partner.findById(request.params._id);

            await partner.remove();

            return response.send("Parceiro deletado!");

        } catch (err) {
            return response.status(400).send("Falha no servidor!")
        }
    },
}