import React from 'react';
import styles from './index.less';

export default () => {

  return (
    <div className={styles.normal}>
      <h2>Examples</h2>
      <ul >
        <li><a href='/1'>example 1</a></li>
        <li><a href='/2'>example 2</a></li>
      </ul>
    </div>
  );
}
