import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>

      <body>
        <header>
          <image
            className={styles.logo}
            src="/UP-LOGO-01.svg"
            alt="UPstore logo"
            width={100}
            height={20}
            priority
          />
          <div className={styles.intro}>
            <nav>
              <ul>
                <li><Link href="/">Novidade</Link></li>
                <li><Link href="/man">Homens</Link></li>
                <li><Link href="/women">Mulheres</Link></li>
                <li><Link href="/kids">Crianças</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div>{children}</div>
        <footer></footer>
      </body>
    </html>
  );
}
