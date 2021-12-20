import React from 'react';
import styles from './index.less';
import routers from '../../.umirc';

export default () => {
  return (
    <div className={styles.normal}>
      <h2>Examples</h2>
      <ul >
        <li><a href='/1'>example 1</a></li>
        <li><a href='/2'>example 2</a></li>
        <li><a href='/3'>example 3</a></li>
        <li><a href='/4'>example 4</a></li>
        <li><a href='/5'>example 5</a></li>
        <li><a href='/6'>example 6</a></li>
        <li><a href='/7'>example 7: datashow</a></li>
        <li><a href='/8'>example 8: datashow</a></li>
      </ul>
    </div>
  );
}
