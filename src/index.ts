import type { Response, Request } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import config from './config';

const app: express.Application = express();
app.set('port', config.app.port);
app.set('ip', config.app.ip);

app.use(
    helmet({ contentSecurityPolicy: process.env.NODE_DEV === 'production' ? undefined : false }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response): void => {
    res.send('API Server!');
});

const server = app.listen(app.get('port'), (): void => {
    console.log(`🚀 Listening on *:${app.get('port') as string | number}`);
});

export default server;
