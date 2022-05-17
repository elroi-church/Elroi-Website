import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { analytics } from "../utils/firebase";
import { useRouter } from "next/router";
import { logEvent, setCurrentScreen } from "firebase/analytics";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV === "production") {
      console.log("masuk");
      const handleRouteChange = (url: any) => {
        setCurrentScreen(analytics, url);
        logEvent(analytics, "page_view", { url });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export function reportWebVitals(metric: any) {
  console.log(metric);
}

export default MyApp;
