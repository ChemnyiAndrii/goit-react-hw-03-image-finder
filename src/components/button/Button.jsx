import React from 'react';
import styles from '../../Allstyles.module.css';

export function Button({ getImages }) {
  return (
    <div className={styles.BtnWrap}>
      <button className={styles.Button} onClick={getImages}>
        Load more
      </button>
    </div>
  );
}