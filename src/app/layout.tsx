import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen bg-sky-50">
          <Header />
          <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
