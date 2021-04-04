import React from 'react';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';
import styles from '../../Allstyles.module.css';

export function ImageGallery({ fetchImages, gallery, toggleModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {gallery.map(imageObj => (
        <ImageGalleryItem
          fetchImages={fetchImages}
          toggleModal={toggleModal}
          imageObj={imageObj}
          key={imageObj.id}
        />
      ))}
    </ul>
  );
}