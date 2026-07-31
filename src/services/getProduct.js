
/**
 * Busca a lista de produtos no backend.
 * @returns {Promise<Array>}
 */
export async function getProductsBySlug() {
  try {
    // Aqui vai a URL do seu backend verdadeiro
    const response = await fetch(`http://localhost:3001/produtos`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar produtos');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na comunicação com o backend:", error);
    return [];
  }
}
