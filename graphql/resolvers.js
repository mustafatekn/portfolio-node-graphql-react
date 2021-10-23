const bcrypt = require("bcrypt");
const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const { User, Post, Message } = require("../models");
const { JWT_SECRET } = require("../config/env.json");
const {
  GraphQLUpload, // A Koa implementation is also exported.
} = require("graphql-upload");

function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  Upload: GraphQLUpload,
  Query: {
    getUsers: async (_, __, { user }) => {
      try {
        if (!user) throw new AuthenticationError("Yetkisiz istek");

        const users = await User.findAll();
        return users;
      } catch (err) {
        throw err;
      }
    },

    getMessages: async (_, __, { user }) => {
      try {
        if (!user) throw new AuthenticationError("Yetkisiz istek");
        const messages = await Message.findAll({
          order: [['createdAt', 'DESC']]
        });
        return messages;
      } catch (err) {
        throw err;
      }
    },

    login: async (_, args) => {
      const { username, password } = args;
      let errors = {};
      let user;
      try {
        if (username.trim() === "")
          errors.username = "Kullanıcı adı boş olamaz.";
        if (password === "") errors.password = "Şifre boş olamaz.";
        if (Object.keys(errors).length > 0)
          throw new UserInputError("Hatalı giriş", { errors });

        user = await User.findOne({
          where: { username },
        });

        if (!user) {
          errors.username = "Kullanıcı bulunamadı";
          throw new UserInputError("Kullanıcı bulunamadı", { errors });
        }

        user = await User.findOne({
          where: {
            username,
            password,
          },
        });

        if (!user) {
          errors.password = "Hatalı şifre";
          throw new UserInputError("Hatalı şifre", { errors });
        }

        const token = jwt.sign({ username }, JWT_SECRET, {
          expiresIn: 60 * 60,
        });
        user.token = token;

        return {
          ...user.toJSON(),
          token,
        };
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createUser: async (_, args, { user }) => {
      let { username, email, password, confirmPassword } = args;
      let errors = {};
      try {
        if (!user) throw new AuthenticationError("Yetkisiz istek");

        if (username.trim() === "")
          errors.username = "kullanıcı adı boş bırakılamaz";
        if (email.trim() === "") errors.email = "email boş bırakılamaz";
        if (password.trim() === "") errors.password = "şifre boş olamaz";
        if (confirmPassword.trim() === "")
          errors.confirmPassword = "şifre tekrarı boş olamaz";

        if (password !== confirmPassword)
          errors.confirmPassword = "şifreler eşleşmedi";

        if (Object.keys(errors).length > 0) {
          throw errors;
        }

        password = await bcrypt.hash(password, 6);

        const newUser = await User.create({
          username,
          email,
          password,
        });
        return newUser;
      } catch (err) {
        console.log(err);
        if (err.name === "SequelizeUniqueConstraintError") {
          err.errors.forEach(
            (e) =>
              (errors[e.path.split(".")[1]] = `${
                e.path.split(".")[1]
              } is already taken`)
          );
        } else if (err.name === "SequelizeValidationError") {
          err.errors.forEach((e) => (errors[e.path] = e.message));
        }
        throw new UserInputError("Bad input", { errors });
      }
    },

    sendMessage: async (_, args) => {
      const { subject, email, content } = args;
      let errors = {};

      try {
        if (subject.trim() === "") errors.subject = "Konu boş bırakılamaz.";
        if (email.trim() === "") errors.email = "Email boş bırakılamaz.";
        if (content.trim() === "") errors.content = "Mesaj boş bırakılamaz.";

        if (Object.keys(errors).length > 0)
          throw new UserInputError("Bad input", { errors });

        const message = await Message.create({
          subject,
          email,
          content,
        });
        return message;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    uploadFile: async (parent, { file }, { user }) => {
      if (!user) throw new AuthenticationError("Yetkisiz istek");
      const { createReadStream, filename, mimetype, encoding } = await file;

      // Invoking the `createReadStream` will return a Readable Stream.
      // See https://nodejs.org/api/stream.html#stream_readable_streams
      const stream = createReadStream();

      // This is purely for demonstration purposes and will overwrite the
      // local-file-output.txt in the current working directory on EACH upload.
      const out = require('fs').createWriteStream('local-file-output.txt');
      stream.pipe(out);
      await finished(out);

      return { filename, mimetype, encoding };
    },

    sharePost: async (_, args, { user }) => {
      try {
        if (!user) throw new AuthenticationError("Yetkisiz istek");

        let { description, imageUrl } = args;
        let errors = {};

        if (imageUrl.trim() === "") errors.imageUrl = "ImageUrl boş olamaz";
        if (Object.keys(errors).length > 0) throw errors;

        const post = await Post.create({
          description,
          imageUrl,
        });

        return post;
      } catch (err) {
        throw { errors };
      }
    },
  },
};
