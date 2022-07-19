'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const ioServer = require('socket.io')(PORT);

const airlineSystem = ioServer.of('/airline');


// events.on('took-off', (payload)=>{
//     let Flight=payload.Flight;
//     console.log( "Flight ", Flight);
// })

airlineSystem.on('connection', (socket) => {


    socket.on('took-off', (payload) => {
        let Flight=payload.Flight;
        console.log( "Flight ", Flight);
        });
});



socket.on ('arrived', (payload) => {
    let Flight=payload.Flight;
    console.log( "Flight ", Flight);
    ioServer.emit('arrived',payload);
});




ioServer.on('connection', (socket) => {
    socket.on('new-flight', (payload) => {
        let Flight=payload.Flight;
        console.log( "Flight ", Flight);
        airline.emit('new-flight',payload);
        ioServer.emit('new-flight',payload);
    });
});
module.exports={airlineSystem:airlineSystem,ioServer:ioServer};