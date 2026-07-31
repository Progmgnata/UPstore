/**
 * Formata um número para o padrão de moeda brasileiro.
 * @param {number} value - O valor em centavos ou reais.
 * @returns {string} Valor formatado (ex: R$ 900,00)
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}