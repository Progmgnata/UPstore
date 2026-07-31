import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UPstore",
  description: "A project by Progmata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className={styles.header}>
          {/* Logo */}
          <Image
            className={styles.logo}
            src="/UP-LOGO-01.svg"
            alt="UPstore logo"
            width={80}
            height={25}
            priority
          />
          <div className={styles.searchContainer}>
            {/* Links de Navegação */}
            <nav className={styles.nav}>
              <ul>
                <li><Link href="/">Lançamento</Link></li>
                <li><Link href="/man">Homens</Link></li>
                <li><Link href="/women">Mulheres</Link></li>
                <li><Link href="/kids">Crianças</Link></li>
                <li><Link href="/collections">Coleções</Link></li>
                <li><Link href="/promo">Promoções</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.searchContainer}>
            {/* Campo de Busca + Botão/Ícone */}
            <input
              type="text"
              placeholder="Pesquisar..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton} aria-label="Buscar">🔍</button>
          </div>
          <div className={styles.cartIcon}>
              <Link href="/cart" aria-label="Carrinho de Compras">
                🛒
              </Link>
            </div>
        </header>
        <div>{children}</div>
        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <Link href="/about">Sobre Nós</Link>
            <Link href="/contact"> | Contato</Link>
            <Link href="/privacy"> | Política de Privacidade</Link>
            <Link href="/terms"> | Termos de Serviço</Link>
          </div>
          <div className={styles.footerSocial}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <p>&copy; {new Date().getFullYear()} UP! store. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
