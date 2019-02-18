import express, { Response, Request } from 'express';

import bodyParser from 'body-parser';

const app: express.Application = express();
// app.set('port', config.app.port);
// app.set('ip', config.app.ip);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API Server!');
});

const server = app.listen(app.get('port'), () => {
    console.log(`listening on *:${app.get('port')}`);
});

export default server;
