import Head from 'next/head';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to slik</title>
      </Head>

      <main className='bg--default'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
