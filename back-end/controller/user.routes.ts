import UserAuthentication from '../service/userService';
import express, { NextFunction, Request, Response } from 'express';

const authService = new UserAuthentication();
const userRouter = express.Router();

userRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {

    const { username, password } = req.body;


    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }


    const { user, error } = authService.authenticate(username, password);


    if (error) {
        return res.status(401).json({ error });
    }

    return res.status(200).json(user);
});

export default userRouter;
