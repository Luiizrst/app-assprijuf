const User = require("../models/User");

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

module.exports = {
  async forgotPassword(request, response) {
    try {
      const { email } = request.body;

      let user = await User.findOne({ email });

      if (!user) {
        return response.status(404).send("Usuário não cadastrado");
      }

      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "aplicativoassprijuf@gmail.com",
          pass: "associacaodosistemasocioeducativoeprisionaldejuizdefora",
        },
      });

      const newPassword = crypto.randomBytes(4).toString("hex");

      transport.sendMail({
        from: "Associação do Sistema Socioeducativo e Prisional de Juiz de Fora <aplicativoassprijuf@gmail.com>",
        to: email,
        replyTo: "assprijuf@hotmail.com",
        subject: "Senha alterada",
        html: `<p> Olá ${user.name}, sua nova senha para acessar o aplicativo é: <strong>${newPassword}</strong></p>
                <br>
                <p> Esta não precisa ser sua senha definitiva, você podera alterá-la dentro do nosso aplicativo. </p>
                <br>
                <p> Favor não responder esse email! </p>`,
      });

      const password = await bcrypt.hash(newPassword, 10);

      user = await User.updateOne({
        password,
      });

      return response.send("Senha alterada!");
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },
};
