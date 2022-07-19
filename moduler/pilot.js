'use strict';
const events = require("../../modular/events");

events.on('new-flight',handlArrivedFlight);
events.on('took-off',handlTookOffFlight);



function handlTookOffFlight(payload){

    setTimeout(() => {
        payload.Flight.event='took-off';
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' took-off`);
        events.emit('took-off',payload);          
    }, 3000);

}



function handlArrivedFlight(payload){
    setTimeout(() => {
        payload.Flight.event='arrived';
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`);
        events.emit('arrived',payload);      
    }, 5000);

}
