'use strict';
const events = require('./modular/events');
require('./moduler/manager');
require('./modular/pilot');





events.on('took-off', (payload)=>{
    let Flight=payload.Flight;
    console.log( "Flight ", Flight);
})



events.on('arrived', (payload)=>{
    let Flight=payload.Flight;
    console.log( "Flight ", Flight);
})




events.on('new-flight', (payload)=>{
    let Flight=payload.Flight;
    console.log( "Flight ", Flight);
})