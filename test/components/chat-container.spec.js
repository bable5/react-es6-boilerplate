import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import ChatContainer from '../../src/components/chat-container.jsx';
import ChatList from '../../src/components/chat-list.jsx';
import ChatInput from '../../src/components/chat-input.jsx';

import Chance from 'chance';

const chance = new Chance();

describe('The chat input and message list container', () => {
    let expectedProperties,
        wrapper;

    function renderComponent(props) {
        wrapper = shallow(
                <ChatContainer {...props}/>
                );
    }

    beforeEach(() => {
        expectedProperties = {
            items : chance.word(),
            chatInput: { 
                message: chance.word(),
                onMessageChange: chance.word(),
                sendMessage: chance.word(),
                sendText: chance.word()
            }
        };
        renderComponent(expectedProperties);
    });

    it('should have the required components', () => {
        expect(wrapper.find(ChatList)).to.have.length(1);

        const inputLine = wrapper.find(ChatInput);
        expect(inputLine.find(ChatInput)).to.have.length(1);
    });

    it('should pass the messages to display to the ChatList', () => {
        const chatList = wrapper.find(ChatList);
        expect(chatList.props().items)
            .to.equal(expectedProperties.items);
    });

    it('should pass an onChange handler to the message element', () => {
        const message = wrapper.find(ChatInput);
        expect(message.props().onMessageChange).to.equal(expectedProperties.chatInput.onMessageChange);
    });

    it('should pass the message to the message element', () => {
        const message = wrapper.find(ChatInput);
        expect(message.props().message).to.equal(expectedProperties.chatInput.message);
    });

    it('should pass the sendMessage handler to the chat input', () => {
        const message = wrapper.find(ChatInput);
        expect(message.props().sendMessage).to.equal(expectedProperties.chatInput.sendMessage);
    });
    it('should pass the sendText property chat input', () => {
        const message = wrapper.find(ChatInput);
        expect(message.props().sendText).to.equal(expectedProperties.chatInput.sendText);
    });
});

