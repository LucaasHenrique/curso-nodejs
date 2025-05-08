import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const decode = jwt.verify(token, process.env.HASH_KEY, {
            algorithms: ["HS256"],
            expiresIn: process.env.TOKEN_EXPIRATION,
        });
        
        req.userId = decode.id;

        return next();
    } catch (err) {
        return res.status(401).json({error: "Token invalid"});
    }
   
    return next();
};