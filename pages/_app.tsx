import React from 'react';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

// Modules
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

//state
import { IsMenuOpenProvider } from '../state/isMenuOpen';
import { IsSearchMenuOpenProvider } from '../state/isSearchMenuOpen';

import * as gtag from '../lib/gtag';
const isProduction = process.env.NODE_ENV === 'production';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: any) => {
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.

    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };

    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={`#250352`} />
        {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> */}

        <title>ScienceGeek</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/ico/sciencegeekLogo.ico" />

        <meta
          name="description"
          content="ScienceGeek brengt internationaal en binnenlands wetenschappelijk nieuws. Over onder andere fossielen,ruimtevaart, de zoektocht naar aliens, sex, psychologie, milieu en geschiedenis.
"
        />

        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8861487414672205"
          crossOrigin="anonymous"
        ></Script>

        {/* 
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8861487414672205"
          crossOrigin="anonymous"
        ></script> */}

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <MantineProvider theme={theme}>
        <IsMenuOpenProvider>
          <IsSearchMenuOpenProvider>
            <Component {...pageProps} />
          </IsSearchMenuOpenProvider>
        </IsMenuOpenProvider>
      </MantineProvider>
    </>
  );
};

export default MyApp;
