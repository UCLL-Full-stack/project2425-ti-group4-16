/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           format: int64
 *         name:
 *           type: string
 *           description: Event name.
 *         categories:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Category'
 *         images:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Image'
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           format: int64
 *         name:
 *           type: string
 *           description: The name of the category.
 *     Image:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: The URL of the image.
 *         altText:
 *           type: string
 *           description: A short description of the image.
 *         caption:
 *           type: string
 *           description: The caption of the image.
 */



import express, { NextFunction, Request, Response } from 'express';
import eventService from '../service/eventService';

const eventRouter = express.Router();

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     description: Retrieve a list of all events.
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of events.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       500:
 *         description: Internal server error.
 */

eventRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        next(error);
    }
});

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get an event by ID
 *     description: Retrieve a single event by its unique ID.
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: The unique identifier of the event.
 *     responses:
 *       200:
 *         description: Successfully retrieved the event.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event not found.
 *       500:
 *         description: Internal server error.
 */
eventRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const event = await eventService.getEventsById(Number(req.params.id));
        res.status(200).json(event);
    } catch (error) {
        next(error);
    }
});

export { eventRouter };