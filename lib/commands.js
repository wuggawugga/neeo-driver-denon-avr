

const Denon = require('denon-client');

var commands = {


	'CURSOR UP': { name: 'Cursor up', method: 'Input.up' },
	'CURSOR DOWN': { name: 'Cursor down', method: 'Input.down' },
	'CURSOR LEFT': { name: 'Cursor left', method: 'Input.left' },
	'CURSOR RIGHT': { name: 'Cursor right', method: 'Input.right' },
	'CURSOR ENTER': { name: 'Select', method: 'Input.select' },



'POWER ON': { name: 'Power on', method: 'setPower', params: Denon.Options.PowerOptions.On },
'POWER OFF': { name: 'Power off', method: 'setPower', params: Denon.Options.PowerOptions.Standby },

'INPUT CD': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.CD },
'INPUT TUNER': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Tuner },
'INPUT DVD': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.DVD },
'INPUT BD': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.BD },
'INPUT TV': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.TV },
'INPUT SAT': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Sattalite },
'INPUT CBL': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Cable },
'INPUT MPL': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.MediaPlayer },
'INPUT GAME': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Game },
'INPUT GAME2': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Game2 },
'INPUT DOCK': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Dock },
'INPUT VAUX': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.VAux },
'INPUT NETUSB': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.NetUsb },
'INPUT AUX1': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Aux1 },
'INPUT AUX2': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Aux2 },
'INPUT MPLAY': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.MPlay },
'INPUT MXPORT': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.MXPort },
'INPUT IPOD': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.IPod },
'INPUT USB': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.USB },
'INPUT VDP': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.VDP },
'INPUT STATUS': { name: 'Input CD', method: 'setInput', params: Denon.Options.InputOptions.Status },

'MUTE_ON': { name: 'Mute On', method: 'setMute', params:Denon.Options.MuteOptions.On },
'MUTE_OFF': { name: 'Mute Off', method: 'setMute', params:Denon.Options.MuteOptions.Off },

'SRND_MOVIE': { name: 'Surround Movie', method: 'setSurround', params: Denon.Options.SurroundOptions.Movie },
'SRND_MUSIC': { name: 'Surround Music', method: 'setSurround', params: Denon.Options.SurroundOptions.Music },
'SRND_GAME': { name: 'Surround Game', method: 'setSurround', params: Denon.Options.SurroundOptions.Game },
'SRND_ROCK_ARENA': { name: 'Surround Rock Arena', method: 'setSurround', params: Denon.Options.SurroundOptions.RockArena },
'SRND_JAZZ_CLUB': { name: 'Surround Jazz Club', method: 'setSurround', params: Denon.Options.SurroundOptions.JazzClub },
'SRND_MONO_MOVIE': { name: 'Surround Mono Movie', method: 'setSurround', params: Denon.Options.SurroundOptions.MonoMovie },
'SRND_VIDEO_GAME': { name: 'Surround Video Game', method: 'setSurround', params: Denon.Options.SurroundOptions.VideoGame },

'SRND_STANDARD': { name: 'Surround Standard', method: 'setSurround', params: Denon.Options.SurroundOptions.Standard },

'SRND_DD': { name: 'Surround Dolby Digital', method: 'setSurround', params: Denon.Options.SurroundOptions.DolbyDigital },
'SRND_DTS': { name: 'Surround DTS', method: 'setSurround', params: Denon.Options.SurroundOptions.DtsSurround },

'SRND_MULTI_CHANNEL_STEREO': { name: 'Surround Multi Channel Stereo', method: 'setSurround', params: Denon.Options.SurroundOptions.MchStereo },
'SRND_STEREO': { name: 'Surround Stereo', method: 'setSurround', params: Denon.Options.SurroundOptions.Stereo },
'SRND_DIRECT': { name: 'Surround Direct', method: 'setSurround', params: Denon.Options.SurroundOptions.Direct },
'SRND_PURE_DIRECT': { name: 'SurroundPure Direct', method: 'setSurround', params: Denon.Options.SurroundOptions.PureDirect },
'SRND_MATRIX': { name: 'Surround Matrix', method: 'setSurround', params: Denon.Options.SurroundOptions.Matrix },
'SRND_VIRTUAL': { name: 'Surround Virtual', method: 'setSurround', params: Denon.Options.SurroundOptions.Virtual },

'VOLUME UP': { name: '', method: '', params: Denon.Options.VolumeOptions.Up },
'VOLUME DOWN': { name: '', method: '', params: Denon.Options.VolumeOptions.Down },

'DIMMER LOW': { name: '', method: '', params: Denon.Options.DisplayDimOptions.Low },
'DIMMER MID': { name: '', method: '', params: Denon.Options.DisplayDimOptions.Mid },
'DIMMER HIGH': { name: '', method: '', params: Denon.Options.DisplayDimOptions.High },
'DIMMER OFF': { name: '', method: '', params: Denon.Options.DisplayDimOptions.Off },



};
