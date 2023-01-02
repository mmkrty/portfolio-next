import "../styles/globals.css";
import Navbar from "../components/navbar/navbbar";
import Footer from "../components/footer/footer";
import SocialMediaLinks from "../components/socialMediaLinks/socialMediaLinks";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <SocialMediaLinks />
      <Footer />
    </div>
  );
}
