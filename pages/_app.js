import "../styles/globals.css";
import Navbar from "../components/navbar/navbbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
