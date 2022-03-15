import config from './config.js';
import server from "./server.js";
import { logger } from "./util.js";

// console.log(config); // { dir: { publicDirectory: 'public' }, pages: { homeHTML: 'home/index.html', controllerHTML: 'controller/index.html' }, ...  } } }

server.listen(config.port)
.on('listening', () => logger.info(`Server is running on port ${config.port}!`))


// import config from './config.js'
// import server from './server.js'
// import { logger } from './util.js'
// 
// server
    // .listen(config.port)
    // .on('listening', () => log 