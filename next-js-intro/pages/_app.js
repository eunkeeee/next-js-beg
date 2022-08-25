import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <span>공통적으로 추가되는 부분</span>
    </Layout>
  );
}
