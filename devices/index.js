'use strict';

const neeoapi = require('neeo-sdk');
const controller = new (require('../lib/AVRController'))();

//const controller = ExampleController.build();

const driver = neeoapi.buildDevice('AVR-3310')
  .setManufacturer('DENON')
  .setType('AVRECEIVER')
  .addAdditionalSearchToken('SDK')

  // Then we add the capabilities of the device
  .addButton({ name: 'POWER ON', label: 'POWER ON' })
  .addButton({ name: 'POWER OFF', label: 'POWER OFF' })
  .addButton({ name: 'INPUT HDMI', label: 'INPUT HDMI' })

  // Then we wire the controller handler for these capabilities
  .addButtonHandler(controller.onButtonPressed);





/*
neeoapi.discoverOneBrain(true).then((brain) => {
  neeoapi.startServer({
    brain,
    port: 6337,
    name: 'denon-avr-adapter',
//    devices: [device1, device2]
  })
}).catch(error => {
    console.error('CANNOT BRAIN', error);
    process.exit(1);
});
*/






module.exports = {
  devices: [
    driver,
  ],
};
