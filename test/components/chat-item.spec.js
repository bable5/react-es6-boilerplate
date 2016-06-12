import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import ChatLine from '../../src/components/chat-item.jsx';
import Chance from 'chance';

const chance = new Chance();

describe('A single line in the chat window.', () => {
    let expectedProperties,
        element;

    function renderComponent(properties) {
        const {name, message} = properties;
        const jsxElement = <ChatLine name={name} message={message} />;
        element = shallow(jsxElement);
    }

    beforeEach(() => {
        expectedProperties = {
            name: chance.string(),
            message: chance.paragraph()
        };

        renderComponent(expectedProperties);
    });

    it('Should be an LI type', () => {
        expect(element.is('li')).to.equal(true);
    });

    it('Should have the user name', () => {
        const children = element.node.props.children;

        expect(children[0].props.children).to.equal(expectedProperties.name);
        expect(children[0].props.className).to.equal('username');

    });

    it('Should have the message', () => {
        const children = element.node.props.children;

        expect(children[1].props.children).to.equal(expectedProperties.message);
        expect(children[1].props.className).to.equal('message');
    });

});

