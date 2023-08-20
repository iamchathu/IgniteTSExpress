import type { Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';

export const getApp = () => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(helmet());

    app.get('/', (req: Request, res: Response): void => {
        res.send('API Server!');
    });

    return app;
};
