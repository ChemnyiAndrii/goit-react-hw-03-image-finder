import React from 'react';
import Loader from 'react-loader-spinner';
import styles from '../../Allstyles.module.css';

export function Spinner() {
  return (
    <div className={styles.BtnWrap}>
      <Loader type="ThreeDots" color="#303f9f" height={50} width={50} />
    </div>
  );
}