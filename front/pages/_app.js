import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import DataProvider from "../redux/store";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DataProvider>
       <Header />
        <Navbar />
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;
