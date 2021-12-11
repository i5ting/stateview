// import { mount, ReactWrapper, shallow } from 'enzyme';
// import React from 'react';
// import { act } from 'react-dom/test-utils';
// import { Else, Fallback, If, Then } from '../src';
// import type { ExtendablePromise } from '../src/types';

// const waitForComponentToPaint = async (wrapped: ReactWrapper) => {
//   await act(async () => {
//     await new Promise((resolve) => setTimeout(resolve, 0));
//     wrapped.update();
//   });
// };

// describe('<If /> component', () => {
//   describe('Truthy cases', () => {
//     describe('With NODE_ENV === test', () => {
//       test('GIVEN <Then /> THEN renders children', () => {
//         const wrapped = shallow(
//           <If condition={true}>
//             <Then>
//               <span>Then</span>
//             </Then>
//           </If>
//         );

//         expect(wrapped).toMatchSnapshot();
//         expect(wrapped.containsMatchingElement(<span>Then</span>)).toBe(true);
//       });

//       test('GIVEN <Then /> & <Else /> THEN renders children of <Then />', () => {
//         const wrapped = shallow(
//           <If condition={true}>
//             <Then>
//               <span>Then</span>
//             </Then>
//             <Else>
//               <span>Else</span>
//             </Else>
//           </If>
//         );

//         expect(wrapped).toMatchSnapshot();
//         expect(wrapped.containsMatchingElement(<span>Then</span>)).toBe(true);
//         expect(wrapped.containsMatchingElement(<span>Else</span>)).toBe(false);
//       });

//       test('GIVEN multiple <Then /> blocks THEN renders only first <Then /> block', () => {
//         const wrapped = shallow(
//           <If condition={true}>
//             <Then>
//               <span>Then1</span>
//             </Then>
//             <Then>
//               <span>Then2</span>
//             </Then>
//           </If>
//         );

//         expect(wrapped).toMatchSnapshot();
//         expect(wrapped.containsMatchingElement(<span>Then1</span>)).toBe(true);
//         expect(wrapped.containsMatchingElement(<span>Then2</span>)).toBe(false);
//       });

//       test('GIVEN <Else /> before <Then /> THEN renders <Then /> block', () => {
//         const wrapped = shallow(
//           <If condition={true}>
//             <Else>
//               <span>Else</span>
//             </Else>
//             <Then>
//               <span>Then</span>
//             </Then>
//           </If>
//         );

//         expect(wrapped).toMatchSnapshot();
//         expect(wrapped.containsMatchingElement(<span>Then</span>)).toBe(true);
//         expect(wrapped.containsMatchingElement(<span>Else</span>)).toBe(false);
//       });

//       test('GIVEN w/o children THEN renders null', () => {
//         const wrapped = shallow(<If condition={true} />);

//         expect(wrapped).toMatchSnapshot();
//         expect(wrapped.html()).toBeNull();
//       });
//     });

//   });
// });
