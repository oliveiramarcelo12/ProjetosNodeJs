import React, { useState } from 'react';
import LivroList from './components/LivroList';
import LivroForm from './components/LivroForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleLivroAdded = () => {
    setRefresh(!refresh); // Força a atualização da lista de livros
  };

  return (
    <div>
      <LivroForm onLivroAdded={handleLivroAdded} />
      <LivroList key={refresh} />
    </div>
  );
};

export default App;
