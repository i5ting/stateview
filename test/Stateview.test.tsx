import { shallow, mount } from 'enzyme';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import { Stateview, Layer } from '../src';
// import type { ExtendablePromise } from '../src/types';

const Example1 = () => {

    function unlogin() {
        window.stateview.show('unlogin')
    }

    function logined() {
        window.stateview.show('logined')
    }

    return (
        <Stateview default='unlogin'>
            <Layer state='logined'>
                <h1>Logined, <button id="go_to_unlogin_button" onClick={unlogin}>go to UnLogin</button></h1>
            </Layer>
            <Layer state='unlogin'>
                <h1 >UnLogin, <button id="go_to_logined_button" onClick={logined}>go to Logined</button></h1>;
            </Layer>
        </Stateview>
    );
}

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
