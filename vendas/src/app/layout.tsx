
import "./globals.css";
import {Layout} from "../components/layout"
import {Menu} from "../components/layout/menu"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <title>Vendas APP</title>

        <Layout />
        

   



      
        {children}
      </body>
    </html>
  );
}
