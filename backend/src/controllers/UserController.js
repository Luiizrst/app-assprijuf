const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const nodemailer = require("nodemailer");

const s3 = new aws.S3();

const authConfig = require("../config/auth");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 604800,
  });
}

module.exports = {
  async index(request, response) {
    try {
      const users = await User.find({});

      return response.json(users);
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },

  async store(request, response) {
    try {
      const { location: imageURL = "", key } = request.file;

      const {
        type,
        name,
        responsible,
        registration_number,
        masp,
        blood_type,
        rg,
        cpf,
        date_of_birth,
        marital_status,
        naturalness,
        profession,
        prison_unit,
        fathers_name,
        mothers_name,
        adress,
        number,
        city,
        neighborhood,
        cep,
        whatsapp_phone,
        cell_phone,
        email,
        password,
      } = request.body;

      console.log(blood_type);
      console.log(marital_status);

      let user = await User.findOne({ cpf });
      let mail = await User.findOne({ email });

      if (!user) {
        if (!mail) {
          user = await User.create({
            type,
            name,
            responsible,
            registration_number,
            masp,
            blood_type,
            rg,
            cpf,
            date_of_birth,
            marital_status,
            naturalness,
            profession,
            prison_unit,
            fathers_name,
            mothers_name,
            adress,
            number,
            city,
            neighborhood,
            cep,
            whatsapp_phone,
            cell_phone,
            email,
            password,
            imageURL,
            key,
            admin: 0,
            accept: false,
          });

          const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "aplicativoassprijuf@gmail.com",
              pass: "associacaodosistemasocioeducativoeprisionaldejuizdefora",
            },
          });

          transport.sendMail({
            from: "Associação do Sistema Socioeducativo e Prisional de Juiz de Fora <aplicativoassprijuf@gmail.com>",
            to: "gabriel.arantesresende@gmail.com",
            replyTo: "assprijuf@hotmail.com",
            subject: "Novo usuário",
            html: `<p> Olá Rodrigo, um novo usuario se cadastrou em seu aplicativo!<p>
                                <br>
                            <p> seu nome é: <strong>${name}</strong>, não esqueça de aceita-lo ou reijeitalo pelo aplicativo!</p>`,
          });
        } else {
          response.status(400).send("Email ja Cadastrado");
        }
      } else {
        response.status(400).send("Usuário ja Cadastrado");
      }

      user.password = undefined;

      return response.status(200).send("Usuário cadastrado!");
    } catch (err) {
      console.log(err);
      return response.status(400).send("Falha no servidor!");
    }
  },

  async storeWithoutPhoto(request, response) {
    try {
      const {
        name,
        registration_number,
        masp,
        blood_type,
        rg,
        cpf,
        date_of_birth,
        marital_status,
        naturalness,
        profession,
        prison_unit,
        fathers_name,
        mothers_name,
        adress,
        number,
        city,
        neighborhood,
        cep,
        whatsapp_phone,
        cell_phone,
        email,
        password,
      } = request.body;

      let user = await User.findOne({ cpf });
      let mail = await User.findOne({ email });

      if (!user) {
        if (!mail) {
          user = await User.create({
            name,
            registration_number,
            masp,
            blood_type,
            rg,
            cpf,
            date_of_birth,
            marital_status,
            naturalness,
            profession,
            prison_unit,
            fathers_name,
            mothers_name,
            adress,
            number,
            city,
            neighborhood,
            cep,
            whatsapp_phone,
            cell_phone,
            email,
            password,
            imageURL: null,
            key: null,
            admin: 0,
            accept: false,
          });

          const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "aplicativoassprijuf@gmail.com",
              pass: "associacaodosistemasocioeducativoeprisionaldejuizdefora",
            },
          });

          transport.sendMail({
            from: "Associação do Sistema Socioeducativo e Prisional de Juiz de Fora <aplicativoassprijuf@gmail.com>",
            to: "assprijuf@hotmail.com",
            replyTo: "assprijuf@hotmail.com",
            subject: "Novo usuário",
            html: `<p> Olá ASSPRIJUF, um novo usuario se cadastrou em seu aplicativo!<p>
                                <br>
                            <p> seu nome é: <strong>${name}</strong>, não esqueça de aceita-lo ou reijeitalo pelo aplicativo!</p>`,
          });
        } else {
          return response.status(400).send("Email ja cadastrado");
        }
      } else {
        return response.status(400).send("Usuário ja cadastrado");
      }

      user.password = undefined;

      return response.status(200).send("Usuário cadastrado!");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },

  async show(request, response) {
    try {
      const user = await User.findById(request.params._id);

      return response.json(user);
    } catch (err) {
      return response.status(400).send({ msg: err.message });
    }
  },

  async update(request, response) {
    try {
      const { location: imageURL = "", key } = request.file;

      const {
        name,
        responsible,
        registration_number,
        masp,
        blood_type,
        rg,
        cpf,
        date_of_birth,
        marital_status,
        naturalness,
        profession,
        prison_unit,
        fathers_name,
        mothers_name,
        adress,
        number,
        city,
        neighborhood,
        cep,
        whatsapp_phone,
        cell_phone,
        email,
        key: deleteKey,
      } = request.body;

      if (deleteKey != null) {
        s3.deleteObject({
          Bucket: "app-assprijuf",
          Key: deleteKey,
        }).promise();
      }

      await User.findByIdAndUpdate(
        request.params._id,
        {
          name,
          responsible,
          registration_number,
          masp,
          blood_type,
          rg,
          cpf,
          date_of_birth,
          marital_status,
          naturalness,
          profession,
          prison_unit,
          fathers_name,
          mothers_name,
          adress,
          number,
          city,
          neighborhood,
          cep,
          whatsapp_phone,
          cell_phone,
          email,
          imageURL,
          key,
        },
        { new: true }
      );

      s3.putObject({
        Bucket: "app-assprijuf",
        Key: key,
        ContentType: multerS3.AUTO_CONTENT_TYPE,
        ACL: "public-read",
      }).promise();

      return response.status(200).send("Usuario atualizado");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },

  async updateWithoutPhoto(request, response) {
    try {
      const {
        name,
        registration_number,
        masp,
        blood_type,
        rg,
        cpf,
        date_of_birth,
        marital_status,
        naturalness,
        profession,
        prison_unit,
        fathers_name,
        mothers_name,
        adress,
        number,
        city,
        neighborhood,
        cep,
        whatsapp_phone,
        cell_phone,
        email,
      } = request.body;

      await User.findByIdAndUpdate(
        request.params._id,
        {
          name,
          registration_number,
          masp,
          blood_type,
          rg,
          cpf,
          date_of_birth,
          marital_status,
          naturalness,
          profession,
          prison_unit,
          fathers_name,
          mothers_name,
          adress,
          number,
          city,
          neighborhood,
          cep,
          whatsapp_phone,
          cell_phone,
          email,
        },
        { new: true }
      );

      return response.status(200).send("Usuario atualizado");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },

  async destroy(request, response) {
    try {
      console.log("entrou");
      const user = await User.findById(request.params._id);

      await user.remove();

      return response.send("Usuário deletado!");
    } catch (err) {
      console.log(err);
      return response.status(400).send("Falha no servidor!");
    }
  },

  async acceptAdmin(request, response) {
    try {
      await User.findByIdAndUpdate(request.params._id, request.body, {
        new: true,
      });

      return response.status(200).send("Usuário aceito");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },

  async updateAdmin(request, response) {
    try {
      await User.findByIdAndUpdate(request.params._id, request.body, {
        new: true,
      });

      return response.status(200).send("Usuário atualizado");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },

  async updatePassword(request, response) {
    try {
      let user = await User.findByIdAndUpdate(
        request.params._id,
        request.body,
        { new: true }
      );

      await User.updateOne({
        password: await bcrypt.hash(user.password, 10),
      });

      return response.status(200).send("Senha atualizada!");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },
};
