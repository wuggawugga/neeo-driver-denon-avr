'use strict';

const debug = require('debug')('neeo-driver-denon-avr:AVRController');
const Denon = require('denon-client');
const config = require('./Config.js');

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports = class AVRController {

  constructor() {
    debug('CONSTRUCTOR');
    this.ip_address = config.get('ip_address');
    debug('\t', this.ip_address);
    this.client = new Denon.DenonClient(this.ip_address);
    this.client.connect().catch((error) => {
      console.log('Connection error', error.message);
      debug(error);
    }).then(() => {
      console.log('Connected to', this.ip_address);
      this.initialise();
    });

    this.volume = null;
    this.max_volume = null;


  }

  initialise() {
    this.client.getMaxVolume().then((v) => {
      debug('vol', v);
    });



    this.client.on('masterVolumeChanged', (volume) => {
      // This event will fire every time when the volume changes.
      // Including non requested volume changes (Using a remote, using the volume wheel on the device).

      debug('Volume changed to:', volume);
    });
  }


  onButtonPressed(name, deviceId) {
    // TODO implement the actions for your device here
    console.log(`[CONTROLLER] ${name} button pressed for device ${deviceId}`);
  }
};
