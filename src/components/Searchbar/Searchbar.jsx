import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import { BiSearch } from 'react-icons/bi';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = useCallback((evt) => {
    const { value } = evt.currentTarget;
    setSearch(value);
  }, []);

  const resetForm = useCallback(() => {
    setSearch('');
  }, []);

  const onSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (!search) {
      return toast.error('Enter text for search.');
    }
    handleSubmit(search);
    resetForm();
  }, [search, handleSubmit, resetForm]);

  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <BiSearch size="20" />
        </button>

        <input
          value={search}
          onChange={onChangeInput}
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};