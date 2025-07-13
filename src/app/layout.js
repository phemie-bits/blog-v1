import NavBar from "@/components/nav-bar/nav-bar";
import "./globals.css";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Kara",
  description: "Creative blogging",
  icons: {
    icon: "/favicon.png",
  }, // path to your favicon in public/
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
