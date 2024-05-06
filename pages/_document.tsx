import React, { useEffect } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';

export default class MyDocument extends Document {
  render() {
    useEffect(() => {
      var ads = document.getElementsByClassName('adsbygoogle').length;
      for (var i = 0; i < ads; i++) {
        try {
          ((window as any).adsbygoogle =
            (window as any).adsbygoogle || []).push({});
        } catch (e) {}
      }
    }, []);

    return (
      <Html lang="nl" className="text-xs">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap"
            rel="stylesheet"
          />
          {/* enable analytics script only for production */}
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
