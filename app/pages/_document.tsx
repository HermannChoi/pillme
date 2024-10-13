import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    console.log("document");
    return (
      <Html lang="en">
        <Head>
          <Script
            id="console-log"
            strategy="afterInteractive"
          >{`console.log("pages")`}</Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
