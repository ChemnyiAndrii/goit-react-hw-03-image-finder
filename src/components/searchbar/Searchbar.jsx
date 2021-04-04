import React from 'react';
import styles from '../../Allstyles.module.css';

export function Searchbar({ getSearch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((value, name) => {
      getSearch(value);
    });
  };
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}></span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
        ></input>
      </form>
    </header>
  );
}