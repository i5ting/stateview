import React from 'react';
import { Stateview, Layer } from '~/index';
import { Tab } from '../layers/6';

/**
 * Tab：2个tab切换 
 */
export default () => {
  return (
    <span>
      <Stateview default='default'>
        <Layer state='default' component={<Tab />} />
      </Stateview>
    </span>
  );
}
