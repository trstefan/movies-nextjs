import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "../components/Head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head title={`Movies App | ${pageProps.title}`}></Head>
      <Component {...pageProps} />
    </Layout>
  );
}
