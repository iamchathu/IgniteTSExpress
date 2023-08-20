import { config } from './config/index.js';
import { getApp } from './server.js';

const initialize = () => {
    console.log('Initializing!');
};

initialize();

const server = getApp().listen(config.app.port, (): void => {
    console.log(`🚀 Listening on *:${config.app.port}`);
});

export default server;
