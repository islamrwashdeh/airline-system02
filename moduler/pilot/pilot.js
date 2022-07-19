'use strict';
// const events = require("../../modular/events");


require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/airlineSystem`;
const systemConnection = io.connect(host);

systemConnection.on('new-flight',handlTookOffFlight);



function handlTookOffFlight(payload){

    setTimeout(() => {
        payload.Flight.event='took-off';
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' took-off`);
        systemConnection  .emit('took-off',payload);          
    }, 3000);

}

let host2 = `http://localhost:${process.env.PORT}/`;
const systemConnection2 = io.connect(host2);

systemConnection2.on('new-flight',handlArrivedFlight);


function handlArrivedFlight(payload){
    setTimeout(() => {
        payload.Flight.event='arrived';
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`);
        events.emit('arrived',payload);      
    }, 5000);

}

module.exports={systemConnection:systemConnection};