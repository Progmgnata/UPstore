  
/**
 * Busca a lista de produtos no backend.
 * @returns {Promise<Array>}
 */
export async function getProducts() {
  try {
    const res = await fetch('http://localhost:3001/produtos', {
      cache: 'no-store' // Garante dados sempre atualizados do Express
    });
    if (!res.ok) throw new Error('Erro ao buscar produtos');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
