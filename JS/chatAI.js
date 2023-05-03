const aiChatbot = require('#.js');

function receiveMessage(chatRoom) {
    const lastMessage = chatRoom.messages[chatRoom.messages.length - 1];
    console.log(`${lastMessage.sender}: ${lastMessage.message}`);

    if (lastMessage.sender !== 'AI') {
        const aiResponse = aiChatbot.generateResponse(lastMessage.message);
        sendMessage(chatRoom, 'AI', aiResponse);
    }
}