import Head from "next/head";

const customHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default customHead;

customHead.defaultProps = {
  title: "Movies App",
};
