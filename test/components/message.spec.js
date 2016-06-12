import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import Message from '../../src/components/message.jsx';
import sinon from 'sinon';
import Chance from 'chance';

const chance = new Chance();


describe('A chat message input', () => {
    let element,
        expectedProps;


    function renderComponent(props) {
        element = shallow(<Message {...props}/>);
    }

    beforeEach(() => {
        expectedProps = {
            onClick: sinon.spy(),
            message: chance.sentence()
        }
        renderComponent(expectedProps);
    });

    it('should be an input element', () => {
        expect(element.type()).to.equal('input');
    });

    it('should have the expected classes', () => {
        expect(element.props().className).to.equal('chat-message');
    });

    it('should display the \'message\' property', () => {
        expect(element.props().value).to.equal(expectedProps.message);
    });

    it('should respond to onChange by storing the text', () => {
        element.simulate('onChange');
        expect(expectedProps.onClick.calledOnce).to.equal(true);

    });

});

