import Head from 'next/head';
import SideNav from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoppingify</title>
        <meta name="description" content="Shopping Made Easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNav/>
    </>
  );
}
