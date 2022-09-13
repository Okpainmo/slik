import { Head, Html, Main, NextScript } from 'next/document';

/* The NextJS docs recommends to avoid adding web fonts across pages in the individual 
Head components but to do so in a single custom document instead. */

function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:wght@400;700&family=Nunito+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
