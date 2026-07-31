'use client';

import { use, useEffect, useState } from 'react';

export default function PaginaProduto({ params }) {
  const { id } = use(params);
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aponta para o endereço do seu servidor Express
    fetch(`http://localhost:3001/produtos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Produto não encontrado');
        return res.json();
      })
      .then((data) => {
        setProduto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando produto...</p>;
  if (!produto) return <p>Produto não encontrado!</p>;

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>
    </div>
  );
}