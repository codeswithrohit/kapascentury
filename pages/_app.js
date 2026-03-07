import "@/styles/globals.css";
import { CartProvider } from "./component/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
