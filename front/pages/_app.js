import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import DataProvider from "../redux/store";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <DataProvider>
      
        <Navbar />
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;
