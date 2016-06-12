import Button from '../../src/components/button.jsx';

import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {spy} from 'sinon';
import Chance from 'chance';

const chance = new Chance();

describe('A Button', () => {
    let wrapper,
        expectedProps;

    function renderComponent(props) {
        wrapper = shallow(<Button {...props} />);
    }

    beforeEach(() => {
        expectedProps = {
            onClick: spy(),
            text: chance.word()
        };
        renderComponent(expectedProps);
    });

    it('should be a button-type input', () => {
        expect(wrapper.type()).to.equal('button');
        expect(wrapper.props().type).to.equal('button');
    });

    it('should show the text', () => {
        expect(wrapper.text()).to.equal(expectedProps.text);
    });


    it('should respond to click events', () => {
        wrapper.simulate('click');
        expect(expectedProps.onClick.calledOnce).to.equal(true);
    });
});

