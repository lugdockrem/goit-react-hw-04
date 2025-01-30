import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import styles from './App.module.css';

function App() {
  const handleSearch = (query) => {
    // Тестове сповіщення про успішний пошук
    toast.success(`Searching for: ${query}`);
    console.log('Search query:', query);
    // Реальний пошук буде реалізовано пізніше
  };

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;