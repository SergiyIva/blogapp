import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { createWriteStream } from "fs";
import uid from "uid-safe";
import { __dirname } from "../varCJS.js";
import { AuthorizationError, ForbiddenError } from "../lib/errors.js";
const isValidSign = (username, pass) => {
    return !((!/\w/.test(username) && !/\p{Script=Cyrillic}+/u.test(username)) ||
        pass.length < 4 ||
        username.length > 200 ||
        pass.length > 200);
};
const isValidPost = (title, content) => {
    return !(title.length > 200 || content.length > 100000);
};
const mutation = {
    signUp: async (parent, args, { models }) => {
        if (!isValidSign(args.username, args.password)) {
            throw new Error("Ошибка данных.");
        }
        const username = args.username.trim();
        const hashed = await bcrypt.hash(args.password, 10);
        try {
            const user = await models.User.create({
                username,
                password: hashed
            });
            return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        }
        catch (err) {
            if (err.code === 11000 && err.keyValue.username)
                throw new Error("Такой логин уже зарегистрирован!");
            console.error(err);
            throw new Error("Ошибка при создании аккаунта");
        }
    },
    signIn: async (parent, { username, password }, { models }) => {
        if (!isValidSign(username, password)) {
            throw new Error("Ошибка данных");
        }
        const user = await models.User.findOne({
            username
        });
        if (!user) {
            throw new Error("Ошибка входа, проверьте правильность введеных данных");
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error("Ошибка входа, проверьте правильность введеных данных");
        }
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    },
    newPost: async (parent, { title, content, file }, { models, user }) => {
        if (!user) {
            throw AuthorizationError;
        }
        if (!isValidPost(title, content))
            throw new Error("Ошибка данных");
        const media = file ? await uploadFileFS(file) : undefined;
        return (await models.Post.create({
            title,
            content,
            media,
            author: user.id
        }));
    },
    deletePost: async (parent, { id }, { models, user }) => {
        if (!user) {
            throw AuthorizationError;
        }
        const post = await models.Post.findById(id);
        if (post && String(post.author) !== user.id) {
            throw ForbiddenError;
        }
        try {
            await post.deleteOne();
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    },
    updatePost: async (parent, { title, content, file, id }, { models, user }) => {
        if (!user) {
            throw AuthorizationError;
        }
        if (!isValidPost(title, content))
            throw new Error("Ошибка данных");
        const post = await models.Post.findById(id);
        if (!post) {
            throw new Error("Ошибка запроса!");
        }
        if (String(post.author) !== user.id) {
            throw ForbiddenError;
        }
        const media = file ? await uploadFileFS(file) : undefined;
        return models.Post.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                title: title || post.title,
                media: media || post.media,
                content: content || post.content
            }
        }, {
            new: true
        });
    }
};
export default mutation;
const FILE_EXT_RE = /(\.[_\-a-zA-Z0-9]{0,16})[\S\s]*/;
const uploadFileFS = async (file) => {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const stream = createReadStream();
    const imageId = uid.sync(18);
    const imageName = imageId + path.extname(filename).replace(FILE_EXT_RE, "$1");
    // путь к файлу на сервере с актуальным именем
    const toPath = path.join(__dirname, "..", "public", "img", "upload", `${imageName}`);
    // работа с потоком чтения
    await new Promise((res, rej) => {
        stream
            .on("error", (error) => {
            console.log(error);
            rej(error);
        })
            .pipe(createWriteStream(toPath).on("pipe", (readable) => {
            readable.on("readable", () => {
                let chunk;
                while (null !== (chunk = readable.read())) {
                    console.log(`Read ${chunk.length} bytes of data...`);
                }
            });
        }))
            .on("finish", res);
    });
    // по завершении выводит в консоль мета-данные
    console.log("---------------file written!", imageName, mimetype, encoding);
    return `/img/upload/${imageName}`;
};
