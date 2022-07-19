'use strict';

require('dotenv').config();
const io = require('socket.io-client');

const { faker } =require('@faker-js/faker');
// const events = require("../../modular/events");

let host = `http://localhost:${process.env.PORT}/`;
const systemConnection = io.connect(host);

systemConnection .on('arrived', (payload)=>{
    setTimeout(() => {
        console.log(` flight  arrived , ${payload.Details.pilot}`);            
    }, 10);
});

setInterval(()=>{
    let Flight={
        event:'new-flight',
        time:faker.date.future(),
        Details:{
            airLine:'Royal Jordanian Airlines',
            flightID:faker.datatype.uuid(),
            pilot:`${faker.name.firstName()} ${faker.name.lastName()}`,
            destination:`${faker.address.city()}, ${faker.address.country()}`    
        }
    };
   
    console.log(`Manager: ther is a new flight with Number'${Flight.Details.flightID}'  scheduled`);
    let payload = {Flight:Flight,Details:Flight.Details};
    systemConnection.emit('new-flight',payload);

},7000) 