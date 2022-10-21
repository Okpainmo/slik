import Head from 'next/head';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reactify: You ReactJs companion from zero to hero.</title>
      </Head>

      <main className='bg--default nunito-sans'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
