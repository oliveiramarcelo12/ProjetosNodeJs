import React, { useState } from 'react';
import axios from 'axios';

const LivroForm = ({ onLivroAdded }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const livro = { titulo, autor, ano: parseInt(ano), genero };
      await axios.post('http://localhost:3000/livros', livro); // URL do backend
      onLivroAdded(); // Notificar o componente pai sobre a adição de um livro
      setTitulo('');
      setAutor('');
      setAno('');
      setGenero('');
    } catch (error) {
      setError('Erro ao adicionar livro.');
    }
  };

  return (
    <div>
      <h2>Adicionar Livro</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </label>
        <label>
          Autor:
          <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required />
        </label>
        <label>
          Ano:
          <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} required />
        </label>
        <label>
          Gênero:
          <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
        </label>
        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default LivroForm;
