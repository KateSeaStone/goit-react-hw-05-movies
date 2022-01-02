import { useState } from 'react';
import styles from './Searchbar.module.css';
import { useHistory, useLocation } from 'react-router';

const Searchbar = props => {
  const history = useHistory();
  //const location = useLocation();

  const { onSubmit } = props;
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Введите корректный запрос!');
      return;
    }
    onSubmit(query);

    history.push({
      search: `query=${query}`,
    });

    setQuery('');
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
