
import NextProgress from "next-progress";
import "bootstrap/dist/css/bootstrap.css";
import DataProvider from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      {/* <NextProgress /> */}
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
