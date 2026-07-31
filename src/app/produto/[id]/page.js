'use client';

import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatCurrency'; // Importe a função de formato
import styles from './page.module.css';

export default function PaginaProduto({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/produtos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Produto não encontrado');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando produto...</p>;
  if (!product) return <p>Produto não encontrado!</p>;

  return (
    <div className={styles.container}>
      {product.image && (
        <div className={styles.productImage}>
          <Image 
            src={product.image} 
            alt={product.name} 
            width={400} 
            height={400} 
          />
        </div>
      )}
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <h2>{formatCurrency(product.price)}</h2>
        <p>{product.description}</p>
      </div>
      <button className={styles.addToCartButton}>Adicionar ao Carrinho</button>
    </div>
  );
}