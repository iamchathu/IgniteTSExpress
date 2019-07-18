import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';

import config from './config';

const app: express.Application = express();
app.set('port', config.app.port);
app.set('ip', config.app.ip);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response): void => {
    res.send('API Server!');
});

const server = app.listen(app.get('port'), (): void => {
    console.log(`listening on *:${app.get('port')}`);
});

export default server;
