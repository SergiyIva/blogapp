import jwt from "jsonwebtoken";
export const getUser = (token) => {
    if (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        }
        catch (err) {
            new Error("Ошибка сессии");
        }
    }
};
