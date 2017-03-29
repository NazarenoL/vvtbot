'use strict';

var VvtSend = function () {};

/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */
VvtSend.prototype.callSendAPI = function (messageData) {
    global.request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: global.PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: messageData
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id;
            var messageId = body.message_id;

            if (messageId) {
                console.log("Successfully sent message with id %s to recipient %s", messageId, recipientId);
            } else {
                console.log("Successfully called Send API for recipient %s", recipientId);
            }
        } else {
            console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
        }
    });
}

/*
 * Send a text message using the Send API.
 */
VvtSend.prototype.sendTextMessage = function (recipientId, messageText) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: messageText,
            metadata: "DEVELOPER_DEFINED_METADATA"
        }
    };

    this.callSendAPI(messageData);
}

/*
 * Send a message with Quick Reply buttons.
 *
 */
VvtSend.prototype.sendQuickReply = function (recipientId) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: "What's your favorite movie genre?",
            quick_replies: [
                {
                    "content_type":"text",
                    "title":"Action",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
                },
                {
                    "content_type":"text",
                    "title":"Comedy",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY"
                },
                {
                    "content_type":"text",
                    "title":"Drama",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA"
                }
            ]
        }
    };

    this.callSendAPI(messageData);
}

/*
 * Sends a message with all the available options.
 */

VvtSend.prototype.sendOptionsMessage = function (recipientId) {
    this.sendTextMessage(recipientId, 'Che! Esta es una versión de prueba y no pude entender lo que me dijiste.' +
        'Por ahora nada mas soporto que me preguntes informacion de visas. Si queres preguntame sobre eso.');
}

VvtSend.prototype.replyTextMessage = function (messageText, senderId) {
    switch (messageText) {
        default:
            this.sendOptionsMessage(senderId, messageText);
    }
};

// /*
//  * Send a Gif using the Send API.
//  *
//  */
// VvtSend.prototype.sendGifMessage = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "image",
//                 payload: {
//                     url: SERVER_URL + "/assets/instagram_logo.gif"
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }

module.exports = new VvtSend();