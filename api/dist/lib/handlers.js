const handlers = {
    getApp: (req, res) => {
        res.sendFile(process.cwd() + "/public/index.html");
    },
    handleError: (err, req, res, next) => {
        console.error("** ОШИБКА СЕРВЕРА: " + err.message);
        res.status(500).send("Произошла ошибка сервера, приносим свои извинения.");
    }
};
export default handlers;
