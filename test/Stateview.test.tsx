import { shallow } from 'enzyme';
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
            <Layer router='logined'>
                <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
            </Layer>
            <Layer router='unlogin'>
                <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>;
            </Layer>
        </Stateview>
    );
}
// const waitForComponentToPaint = async (wrapped: ReactWrapper) => {
//   await act(async () => {
//     await new Promise((resolve) => setTimeout(resolve, 0));
//     wrapped.update();
//   });
// };

describe('<Stateview /> component', () => {
    describe('Truthy cases', () => {
        describe('With NODE_ENV === test', () => {
            test('GIVEN <Then /> THEN renders children', () => {
                const wrapped = shallow(
                    <Example1 />
                );

                expect(wrapped).toMatchSnapshot();
                expect(wrapped.containsMatchingElement(<h1>UnLogin, <button>go to Logined</button></h1>)).toBe(true);
            });
        });
    });
});
