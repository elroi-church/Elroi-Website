import Document, { Html, Head, Main, NextScript } from "next/document";
import { RootState } from "../core/store";
import { useAppSelector } from "../core/store/hooks";

const MyDocument: React.FC<Document> = () => {
  return (
    <Html data-theme="myTheme">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
