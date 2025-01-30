import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import styles from './App.module.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query) => {
    // Тестовий код для демонстрації роботи компонентів
    setIsLoading(true);
    
    // Імітуємо завантаження даних
    setTimeout(() => {
      const testImages = [
        {
          id: 1,
          webformatURL: 'https://pixabay.com/get/g7419c0c0c35fbe4591e5591c929c4e9e4b1c4e0a3b8c1cc6df0a71f1f1d2a4f_640.jpg',
          tags: 'nature, mountains, sky'
        },
        {
          id: 2,
          webformatURL: 'https://pixabay.com/get/g8b6dd3c3a0b8c1cc6df0a71f1f1d2a4f_640.jpg',
          tags: 'sea, ocean, water'
        }
      ];
      
      setImages(testImages);
      setIsLoading(false);
      toast.success(`Found images for: ${query}`);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;