import React from 'react';
export default function ProdutoPage({ params }) {
  const { slug } = params;
  // Your component logic here
}

export async function generateStaticParams() {
  // Fetch your product data from an API or database
  const products = await fetchProducts(); // Replace with your data fetching logic
  return products.map((product) => ({
    slug: product.slug,
    

  }));
}