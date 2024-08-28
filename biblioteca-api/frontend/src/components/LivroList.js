import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LivroList = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get('http://localhost:3000/livros'); // URL do backend
        setLivros(response.data);
      } catch (error) {
        setError('Erro ao carregar livros.');
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map(livro => (
          <li key={livro._id}>
            {livro.titulo} - {livro.autor} ({livro.ano}) - Gênero: {livro.genero || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivroList;
