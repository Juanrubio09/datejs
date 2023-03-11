const event = require('events');
const eventEmitter = new event.EventEmitter();

// create an event handler manejador de eventos:
const myEventHandler = function ()
{
    console.log('I hear a scream!! gonorrea ');
}

// assign the event handler asignar el manejador a un evento:
eventEmitter.on('scream', myEventHandler);

// fire the 'sream' event:
eventEmitter.emit('scream');



