import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { getNavigationItems, getSiteMeta } from "@/lib/content";

const meta = getSiteMeta();
const navigationItems = getNavigationItems();

export const metadata = {
  title: `${meta.name} | Présentation institutionnelle`,
  description: meta.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-afs-text antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <div className="relative min-h-screen overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-afs-radial" />
          <TopBar />
          <Navbar items={navigationItems} />
          <main id="main-content" tabIndex="-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
