import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';
import {spy} from 'sinon';
import ChatInput from '../../src/components/chat-input.jsx';

import Name from '../../src/components/name.jsx';
import Message from '../../src/components/message.jsx';
import Button from '../../src/components/button.jsx';

const chance = new Chance();

describe("Chat Input Element", () => {
    let expectedProps,
        wrapper,
        node;

    function renderComponent(props) {
        wrapper = shallow( <ChatInput {...expectedProps}/> );

        node = wrapper.node;
    }

    beforeEach(() => {
        expectedProps = {
            sendMessage: spy(),
            sendText: chance.word(),
            onMessageChange: spy(),
            message: chance.word()
        };
        renderComponent(expectedProps);
    });

    it('should be a div', () => {
        expect(node.type).to.equal('div');
    });

    it('should have the chat-input class', () => {
        expect(wrapper.props().className).to.equal('chat-input');
    });

    it('should render chat message input elements', () => {
        expect(node.props.children).to.eql([
                <Name />,
                <Message onChange={expectedProps.onMessageChange}
                    message={expectedProps.message}
                />,
                <Button onClick={expectedProps.sendMessage} text={expectedProps.sendText}/>
        ]);

    });

});

