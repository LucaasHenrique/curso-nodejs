import User from '../models/User.js'
import jwt from 'jsonwebtoken';

class SessionsController {
    async create(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(401).json({error: "User not found"}); 
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({error: "Password does not match"}); 
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name, 
                email,
            },
            token: jwt.sign({ id }, process.env.HASH_KEY, {
                expiresIn: process.env.TOKEN_EXPIRATION,
            }),
        }); 
    }

}

export default new SessionsController();