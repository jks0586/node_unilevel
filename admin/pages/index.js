import Head from "next/head";
import Adminlayout from "../components/Adminlayout";


import Layout from "./layout";
import Profile from "./profile";
export default function Home() {
  return (
   
        <Adminlayout>
          <Layout />
        </Adminlayout>
     
  );
}
