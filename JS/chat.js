function createChatRoom(roomName, roomCapacity) {
    const chatRoom = {
        name: roomName,
        capacity: roomCapacity,
        messages: []
    };
    return chatRoom;
}
function sendMessage(chatRoom, sender, message) {
    const newMessage = {
        sender: sender,
        time: new Date(),
        message: message
    };
    chatRoom.messages.push(newMessage);
    return chatRoom;
}
function receiveMessage(chatRoom) {
    const lastMessage = chatRoom.messages[chatRoom.messages.length - 1];
    console.log(`${lastMessage.sender}: ${lastMessage.message}`);
}
function joinChatRoom(chatRoom, user) {
    chatRoom.users = chatRoom.users || []; // create the 'users' array if it doesn't exist
    if (chatRoom.users.length < chatRoom.capacity) {
        chatRoom.users.push(user);
        console.log(`${user} has joined the chat room.`);
        return true;
    } else {
        console.log(`The chat room is full. ${user} cannot join.`);
        return false;
    }
}
function leaveChatRoom(chatRoom, user) {
    const index = chatRoom.users.indexOf(user);
    if (index !== -1) {
        chatRoom.users.splice(index, 1);
        console.log(`${user} has left the chat room.`);
        return true;
    } else {
        console.log(`${user} is not in the chat room.`);
        return false;
    }
}
