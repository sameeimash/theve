/* # Exclusively from RAVANA
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command\n🗡🗡"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'rlion ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=f03ace0b7aae88a934af0216&text1=RAVANA&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by RAVANA*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'rlion ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=f03ace0b7aae88a934af0216&text1=RAVANA&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by RAVANA*' })

    }));
    
}
