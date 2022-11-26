import "../styles/globals.css";
//import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
