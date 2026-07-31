import Image from "next/image";
import styles from "./page.module.css";
//import { getPedidos } from "../services/getPedido";
import { formatCurrency } from "../lib/formatCurrency";
export default async function CartPage() {

    const pedidos = await getPedidos();  
    
    return(
        <div>
            <h1>Meu Carrinho</h1>
            <p>em desenvolvimento</p>
            {/*pedidos.map((pedido) => (
                <div key={pedido.id} className={styles.pedido}>
                    <h2>Pedido ID: {pedido.id}</h2>
                    <p>Data: {new Date(pedido.data).toLocaleDateString()}</p>
                    <p>Total: {formatCurrency(pedido.total)}</p>
                    <h3>Produtos:</h3>
                    <ul>
                        {pedido.produtos.map((produto) => (
                            <li key={produto.id}>
                                <p>{produto.nome}</p>
                                <p>Quantidade: {produto.quantidade}</p>
                                <p>Preço: {formatCurrency(produto.preco)}</p>
                            </li>
                        ))}
                    </ul>

                </div>
            ))*/}
            <button className={styles.checkoutButton}>Finalizar Compra</button>
        </div>
    );
}