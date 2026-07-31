import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getProductsBySlug } from "../services/getProduct";
import { formatCurrency } from "../lib/formatCurrency";


export default async function Home() {
  const products = await getProductsBySlug();
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Tudo que você precisa</h1>
          <h1 style={{ color: 'var(--color-primary, #e52421)' }}>em um só lugar</h1>
          <p>
            Descubra nossa coleção especial de produtos, Faça seu closet dar um UP! 
          </p>
        </div>

        <div className={styles.logoContainer}>
          <Image
          className={styles.logo}
          src="/"
          alt="Produto"
          width= {500}
          height= {100}
          priority
          />
        </div>
        
        <div className={styles.list}>
          <h2>Produtos</h2>
          
          <section className={styles.section}>
            {products.map((product) => (
              <Link key={product.id} href={`/produto/${product.slug}`}>
                <div className={styles.product}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                  <h3>{product.name}</h3>
                  <p>{formatCurrency(product.price)}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
