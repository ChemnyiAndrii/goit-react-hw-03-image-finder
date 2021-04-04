import React from 'react';
import styles from '../../Allstyles.module.css';

export function ImageGalleryItem({ fetchImages, toggleModal, imageObj }) {
  console.log(imageObj);
  const handleClick = () => {
    toggleModal();
    fetchImages(imageObj.webformatURL);
  };
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={handleClick}
        src={imageObj.webformatURL}
        alt="GalleryImage"
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}