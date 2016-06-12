import React from 'react';
import ReactDOM from 'react-dom';
import ChatContainer from './components/chat-container.jsx';

function messageOnChange(evt) {
    chatProperties.chatInput.message = evt.target.value;
    render();
}

function sendMessage(evt) {
    chatProperties.items.push(
            chatItem(
                chatProperties.chatInput.name,
                chatProperties.chatInput.message));
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

render();

