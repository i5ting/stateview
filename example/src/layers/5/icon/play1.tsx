import React from 'react';
import styles from './player.less';
import { setViewState } from '~/index';

export function Play1(props: any) {

  function sayHello() {
    setViewState('play0')
    // stateview.show('play1')
  }

  return <span onClick={sayHello}><svg t="1639442543473" className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1200" width="200" height="200"><path d="M511.4 511.9m-426.3 0a426.3 426.3 0 1 0 852.6 0 426.3 426.3 0 1 0-852.6 0Z" fill="#FF7A4E" p-id="1201"></path><path d="M511.4 958.2c-60.2 0-118.7-11.8-173.7-35.1-53.1-22.5-100.9-54.7-141.9-95.6-41-41-73.2-88.7-95.6-141.9-23.3-55-35.1-113.5-35.1-173.7s11.8-118.7 35.1-173.7c22.5-53.1 54.7-100.9 95.6-141.9 41-41 88.7-73.2 141.9-95.6 55-23.3 113.5-35.1 173.7-35.1 60.2 0 118.7 11.8 173.7 35.1 53.1 22.5 100.9 54.7 141.9 95.6 41 41 73.2 88.7 95.6 141.9 23.3 55 35.1 113.5 35.1 173.7s-11.7 118.7-35 173.7C900.2 738.8 868 786.5 827 827.5s-88.7 73.2-141.9 95.6c-55 23.3-113.4 35.1-173.7 35.1z m0-852.6c-224 0-406.3 182.3-406.3 406.3s182.3 406.3 406.3 406.3 406.3-182.3 406.3-406.3c0.1-224-182.2-406.3-406.3-406.3z" fill="#FF7A4E" p-id="1202"></path><path d="M762 535.8L365.2 764.9c-18.5 10.7-41.7-2.7-41.7-24.1V282.6c0-21.4 23.1-34.7 41.7-24.1L762 487.7c18.5 10.7 18.5 37.5 0 48.1z" fill="#FFFFFF" p-id="1203"></path><path d="M351.3 778.7c-6.5 0-13-1.7-18.9-5.1-11.8-6.8-18.9-19.1-18.9-32.7V282.7c0-13.7 7.1-25.9 18.9-32.7 11.8-6.8 25.9-6.8 37.8 0L767 479.1c11.8 6.8 18.9 19.1 18.9 32.7 0 13.7-7.1 25.9-18.9 32.7L370.2 773.6c-5.9 3.4-12.4 5.1-18.9 5.1z m0-513.8c-3.1 0-6.1 0.8-8.9 2.4-5.6 3.2-8.9 9-8.9 15.4v458.2c0 6.4 3.3 12.2 8.9 15.4 5.6 3.2 12.2 3.2 17.8 0L757 527.2c5.6-3.2 8.9-9 8.9-15.4s-3.3-12.2-8.9-15.4L360.2 267.3c-2.8-1.6-5.8-2.4-8.9-2.4z" fill="#FFFFFF" p-id="1204"></path></svg></span>;
}
