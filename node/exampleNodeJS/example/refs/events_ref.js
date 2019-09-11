const EventEmitter = require('events');

class Logger extends EventEmitter {

    //методы on, emit
    log(message){
        this.emit('message', `${message} ${Date.now()}`) //первый параметр - название события
    }
};

const logger = new Logger(); //экземпляр класса

logger.on('message', data => {
    console.log(data)
});

logger.log('Hello');
logger.log('Hello');
logger.log('Hello');