import React from 'react';
import styles from '../../Allstyles.module.css';

export function Modal({ hiddenModal, largeImageURL }) {
  const handleClick = e => {
    if (e.currentTarget === e.target) {
      hiddenModal();
    }
  };
  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}