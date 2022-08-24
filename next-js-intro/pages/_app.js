import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </>
  );
}
