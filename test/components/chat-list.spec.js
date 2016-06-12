import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import ChatList from '../../src/components/chat-list.jsx';
import Chance from 'chance';

const chance = new Chance();

describe('A list of chat items', () => {
    let expectedProperties,
        element,
        node;

    function renderComponent(properties) {
        const jsxElement = <ChatList items={properties} />;
        element = shallow(jsxElement);
        node = element.node;
    }

    beforeEach(() => {
        //TODO: Random number of elements
        expectedProperties = [{
            name: chance.string(),
            message: chance.paragraph(),
        }, {
            name: chance.string(),
            message: chance.paragraph(),
        }];

        renderComponent(expectedProperties);
    });

    it('should be a UL type', () => {
        expect(element.is('ul')).to.equal(true);
    });

    it('should have the \'messages\' class', () => {
        expect(element.props().className).to.equal('messages');
    });

    it('should render a list of items', () => {
        const children = node.props.children;
        expect(children.length).to.equal(expectedProperties.length);
        expect(children.length).to.equal(2);
    });

    it('should use the list index as the key', () => {
        const children = node.props.children;

        expect(children[0].key).to.equal('0');
        expect(children[1].key).to.equal('1');
    });

    it('should render each item from the properties', () => {
        const children = node.props.children;

        function assertListItem(item, expectedItemProps) {
            expect(item.props.name).to.equal(expectedItemProps.name);
            expect(item.props.message).to.equal(expectedItemProps.message);

        }

        assertListItem(children[0], expectedProperties[0]);
        assertListItem(children[1], expectedProperties[1]);

    });
});

