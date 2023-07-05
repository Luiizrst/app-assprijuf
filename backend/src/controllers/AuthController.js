const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 604800,
  });
}

module.exports = {
  async login(request, response) {
    try {
      const { cpf, password } = request.body;

      const user = await User.findOne({ cpf }).select("+password");

      if (!user) {
        return response.status(404).send({ error: "Usuário não cadastrado" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return response.status(404).send({ error: "Senha invalida" });
      }

      if (user.accept != true) {
        return response
          .status(404)
          .send({
            error:
              "Seu usuário não tem autorização para acessar este aplicativo!",
          });
      }

      user.password = undefined;

      return response.send({
        user,
        token: generateToken({ id: user._id }),
      });
    } catch (err) {
      return response.status(400).send("Falha no servidor!");
    }
  },
};
