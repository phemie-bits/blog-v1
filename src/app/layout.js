import NavBar from "@/components/nav-bar/nav-bar";
import "./globals.css";
import Footer from "@/components/footer/footer";




export const metadata = {
  title: "",
  description: "",
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
