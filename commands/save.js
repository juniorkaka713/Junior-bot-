import { DigixNew } from '../utils/DigixNew.js';

import { downloadMediaMessage } from 'baileys';

import fs from 'fs';

import path from 'path';

export async function viewonce(client, message) {

    const remoteJid = message.key.remoteJid;
    
    const bot = client.user.id.split(':')[0] + "@s.whatsapp.net";

    // Get the quoted message
    const quotedMessage = message.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    // Check if it's a valid ViewOnce message
    if (!quotedMessage?.imageMessage?.viewOnce && !quotedMessage?.videoMessage?.viewOnce && !quotedMessage?.audioMessage?.viewOnce) {

        await client.sendMessage(remoteJid, { text: '_Reply to a valid ViewOnce message._' });

        return;
    }

    const content = DigixNew(quotedMessage);

    // Function to modify the 'viewOnce' property
    function modifyViewOnce(obj) {

        if (typeof obj !== 'object' || obj === null) return;
            await client.sendMessage(remoteJid, {

                text: '_No valid imageMessage to modify and send._',

            });
        }
    } catch (error) {

        console.error('Error modifying and sending ViewOnce message:', error);

        await client.sendMessage(remoteJid, {

            text: '_An error occurred while processing the ViewOnce message._',
            
        });
    }
}

export default viewonce;