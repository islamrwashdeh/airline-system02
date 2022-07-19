'use strict';
const { faker } =require('@faker-js/faker');
const events = require("../../modular/events");


events.on('arrived', (payload)=>{
    setTimeout(() => {
        console.log(` flight  arrived , ${payload.Details.pilot}`);            
    }, 10);
})

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
    events.emit('new-flight',payload);

},7000) 