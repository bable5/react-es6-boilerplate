import React from 'react';
import ReactDOM from 'react-dom';
import ChatContainer from './components/chat-container.jsx';
import io from 'socket.io-client';

const socket = io();


const chatProperties = {
    items: [chatItem('sean', 'message1'), chatItem('marta', 'message2')],
    chatInput: {
        name: 'Sean',
        onMessageChange: messageOnChange,
        message: 'Half of someth',
        sendMessage: sendMessage,
        sendText: 'Send'
    }
}

function messageOnChange(evt) {
    chatProperties.chatInput.message = evt.target.value;
    render();
}

function addMessage(msg) {
    chatProperties.items.push(chatItem(msg.name, msg.message));
    render();
}

function sendMessage(evt) {
    socket.emit('chat message', {
        name: chatProperties.chatInput.name,
        message: chatProperties.chatInput.message
    });

    chatProperties.chatInput.message = '';

    render();
}

function chatItem(name, message) {
    return {
        name: name,
        message: message
    }
}

function render() {
    ReactDOM.render(<ChatContainer {...chatProperties}/>, document.getElementById('chat'));
}

socket.on('chat message', function(msg) {
    addMessage(msg);
    render();
});

render();

