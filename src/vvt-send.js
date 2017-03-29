'use strict';

var VvtSend = function () {};

// /*
//  * Send audio using the Send API.
//  *
//  */
// VvtSend.prototype.sendAudioMessage = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "audio",
//                 payload: {
//                     url: SERVER_URL + "/assets/sample.mp3"
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a video using the Send API.
//  *
//  */
// VvtSend.prototype.sendVideoMessage = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "video",
//                 payload: {
//                     url: SERVER_URL + "/assets/allofus480.mov"
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a file using the Send API.
//  *
//  */
// VvtSend.prototype.sendFileMessage = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "file",
//                 payload: {
//                     url: SERVER_URL + "/assets/test.txt"
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
//

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

    callSendAPI(messageData);
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
        // case 'image':
        //     VvtSend.sendImageMessage(senderID);
        //     break;
        //
        // case 'gif':
        //     VvtSend.sendGifMessage(senderID);
        //     break;
        //
        // case 'audio':
        //     VvtSend.sendAudioMessage(senderID);
        //     break;
        //
        // case 'video':
        //     VvtSend.sendVideoMessage(senderID);
        //     break;
        //
        // case 'file':
        //     VvtSend.sendFileMessage(senderID);
        //     break;
        //
        // case 'button':
        //     VvtSend.sendButtonMessage(senderID);
        //     break;
        //
        // case 'generic':
        //     VvtSend.sendGenericMessage(senderID);
        //     break;
        //
        // case 'receipt':
        //     VvtSend.sendReceiptMessage(senderID);
        //     break;
        //
        // case 'quick reply':
        //     VvtSend.sendQuickReply(senderID);
        //     break;
        //
        // case 'read receipt':
        //     VvtSend.sendReadReceipt(senderID);
        //     break;
        //
        // case 'typing on':
        //     VvtSend.sendTypingOn(senderID);
        //     break;
        //
        // case 'typing off':
        //     VvtSend.sendTypingOff(senderID);
        //     break;
        //
        // case 'account linking':
        //     VvtSend.sendAccountLinking(senderID);
        //     break;

        default:
            this.sendOptionsMessage(senderId, messageText);
    }
};

//
// /*
//  * Send a button message using the Send API.
//  *
//  */
// VvtSend.prototype.sendButtonMessage = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "template",
//                 payload: {
//                     template_type: "button",
//                     text: "This is test text",
//                     buttons:[{
//                         type: "web_url",
//                         url: "https://www.oculus.com/en-us/rift/",
//                         title: "Open Web URL"
//                     }, {
//                         type: "postback",
//                         title: "Trigger Postback",
//                         payload: "DEVELOPER_DEFINED_PAYLOAD"
//                     }, {
//                         type: "phone_number",
//                         title: "Call Phone Number",
//                         payload: "+16505551234"
//                     }]
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a Structured Message (Generic Message type) using the Send API.
//  *
//  */
// VvtSend.prototype.sendGenericMessage = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "template",
//                 payload: {
//                     template_type: "generic",
//                     elements: [{
//                         title: "rift",
//                         subtitle: "Next-generation virtual reality",
//                         item_url: "https://www.oculus.com/en-us/rift/",
//                         image_url: SERVER_URL + "/assets/rift.png",
//                         buttons: [{
//                             type: "web_url",
//                             url: "https://www.oculus.com/en-us/rift/",
//                             title: "Open Web URL"
//                         }, {
//                             type: "postback",
//                             title: "Call Postback",
//                             payload: "Payload for first bubble",
//                         }],
//                     }, {
//                         title: "touch",
//                         subtitle: "Your Hands, Now in VR",
//                         item_url: "https://www.oculus.com/en-us/touch/",
//                         image_url: SERVER_URL + "/assets/touch.png",
//                         buttons: [{
//                             type: "web_url",
//                             url: "https://www.oculus.com/en-us/touch/",
//                             title: "Open Web URL"
//                         }, {
//                             type: "postback",
//                             title: "Call Postback",
//                             payload: "Payload for second bubble",
//                         }]
//                     }]
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a receipt message using the Send API.
//  *
//  */
// VvtSend.prototype.sendReceiptMessage = function (recipientId) {
//     // Generate a random receipt ID as the API requires a unique ID
//     var receiptId = "order" + Math.floor(Math.random()*1000);
//
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message:{
//             attachment: {
//                 type: "template",
//                 payload: {
//                     template_type: "receipt",
//                     recipient_name: "Peter Chang",
//                     order_number: receiptId,
//                     currency: "USD",
//                     payment_method: "Visa 1234",
//                     timestamp: "1428444852",
//                     elements: [{
//                         title: "Oculus Rift",
//                         subtitle: "Includes: headset, sensor, remote",
//                         quantity: 1,
//                         price: 599.00,
//                         currency: "USD",
//                         image_url: SERVER_URL + "/assets/riftsq.png"
//                     }, {
//                         title: "Samsung Gear VR",
//                         subtitle: "Frost White",
//                         quantity: 1,
//                         price: 99.99,
//                         currency: "USD",
//                         image_url: SERVER_URL + "/assets/gearvrsq.png"
//                     }],
//                     address: {
//                         street_1: "1 Hacker Way",
//                         street_2: "",
//                         city: "Menlo Park",
//                         postal_code: "94025",
//                         state: "CA",
//                         country: "US"
//                     },
//                     summary: {
//                         subtotal: 698.99,
//                         shipping_cost: 20.00,
//                         total_tax: 57.67,
//                         total_cost: 626.66
//                     },
//                     adjustments: [{
//                         name: "New Customer Discount",
//                         amount: -50
//                     }, {
//                         name: "$100 Off Coupon",
//                         amount: -100
//                     }]
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a message with Quick Reply buttons.
//  *
//  */
// VvtSend.prototype.sendQuickReply = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             text: "What's your favorite movie genre?",
//             quick_replies: [
//                 {
//                     "content_type":"text",
//                     "title":"Action",
//                     "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
//                 },
//                 {
//                     "content_type":"text",
//                     "title":"Comedy",
//                     "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY"
//                 },
//                 {
//                     "content_type":"text",
//                     "title":"Drama",
//                     "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA"
//                 }
//             ]
//         }
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a read receipt to indicate the message has been read
//  *
//  */
// VvtSend.prototype.sendReadReceipt = function (recipientId) {
//     console.log("Sending a read receipt to mark message as seen");
//
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         sender_action: "mark_seen"
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Turn typing indicator on
//  *
//  */
// VvtSend.prototype.sendTypingOn = function (recipientId) {
//     console.log("Turning typing indicator on");
//
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         sender_action: "typing_on"
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Turn typing indicator off
//  *
//  */
// VvtSend.prototype.sendTypingOff = function (recipientId) {
//     console.log("Turning typing indicator off");
//
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         sender_action: "typing_off"
//     };
//
//     callSendAPI(messageData);
// }
//
// /*
//  * Send a message with the account linking call-to-action
//  *
//  */
// VvtSend.prototype.sendAccountLinking = function (recipientId) {
//     var messageData = {
//         recipient: {
//             id: recipientId
//         },
//         message: {
//             attachment: {
//                 type: "template",
//                 payload: {
//                     template_type: "button",
//                     text: "Welcome. Link your account.",
//                     buttons:[{
//                         type: "account_link",
//                         url: SERVER_URL + "/authorize"
//                     }]
//                 }
//             }
//         }
//     };
//
//     callSendAPI(messageData);
// }
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