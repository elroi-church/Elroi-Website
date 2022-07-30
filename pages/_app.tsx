import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { analytics } from "../utils/firebase";
import { useRouter } from "next/router";
import { logEvent, setCurrentScreen } from "firebase/analytics";
import { store } from "../core/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer />
    </SessionProvider>
  );
}

export function reportWebVitals(metric: any) {
  console.log(metric);
}

export default MyApp;
