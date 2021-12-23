import React from 'react';
import { shallow, mount } from 'enzyme';
import { Example1 } from './__fixtures__/1'

describe('<Stateview /> component', () => {
    describe('Truthy cases', () => {
        describe('Stateview', () => {
            test('GIVEN <Stateview /> render default Layer', () => {
                const wrapped = shallow(
                    <Example1 />
                );

                expect(wrapped).toMatchSnapshot();
                expect(wrapped.containsMatchingElement(<h1>UnLogin, <button>go to Logined</button></h1>)).toBe(true);
            });

            test('GIVEN <Stateview /> click button to switch Layer', () => {
                const wrapped = mount(
                    <Example1 />
                );

                wrapped.find('button').simulate('click');
                expect(wrapped.containsMatchingElement(<h1>Logined, <button>go to UnLogin</button></h1>)).toBe(true);
                wrapped.find('button').simulate('click');
                expect(wrapped.containsMatchingElement(<h1>UnLogin, <button>go to Logined</button></h1>)).toBe(true);
            });
        });

    });
});
