import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/UP-LOGO-01.svg"
          alt="UPstore logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.js file.</h1>
          <p>
            This is a simple starter template for your Next.js app.
          </p>
        </div>
        <div className={styles.list}>
          <h2>Products</h2>
          <section className={styles.section}>
            {products.map((post) => (
              <article key={post.id} className={styles.article}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={200}
                  className={styles.productImage}
                />
                <h3>{post.title}</h3>
                <h1>{post.price}</h1>
                <p>{post.description}</p>
              </article>
            ))}
            </section>
        </div>
      </main>
    </div>
  );
}
