import express, { NextFunction, Request, response, Response } from 'express';
import userService from '../service/userService';
import { UserInput } from '../types/index';

const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await userService.getAllUsers();
        res.status(200).json(events);
    } catch (error) {
        next(error);
    }
});




/**
 * @swagger
 * /users/signup:
 *   post:
 *      summary: Create a user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserInput'
 *      responses:
 *         200:
 *            description: The created user object
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/User'
 */
userRouter.post(
    '/signup',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userInput: UserInput = req.body; 
            const user = await userService.createUser(userInput); 
            res.status(201).json(user); 
        } catch (error) {
            console.error(error); 
            res.status(500).json({ message: 'Error creating user, please try again later.' });
        }
    }
);



/**
 * @swagger
 * /users/login:
 *   post:
 *      summary: Login using username/password. Returns an object with JWT token and user name when succesful.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthenticationRequest'
 *      responses:
 *         200:
 *            description: The created user object
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/AuthenticationResponse'
 */
userRouter.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction)=>{
        try{
            const userInput: UserInput = req.body;
            const response = await userService.authenticate(userInput);
            res.status(200).json({message: 'Authentication successful', ...response});
        }catch(error){
            next(error);
        }
    }
)

export default userRouter;
