import React from 'react';
import Head from 'next/head';

import { PreviewBanner } from 'components/preview-banner';
import { LocaleContext } from 'lib/translations';

function SpreadshopApp({ Component, pageProps }) {
  const { locale, ...otherPageProps } = pageProps;
  console.log(locale);

  return (
    <LocaleContext.Provider value={locale}>
      <div className="flex flex-col bg-white">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/ico" />
          <meta
            name="description"
            content={`Spreadshop Contentful Website Demo`}
            key="description"
          />
          <link
            href="https://www.spreadgroup.com/wp-content/themes/spreadgroup_theme/style.css?cb=776024"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <PreviewBanner />
        <div className="w-full flex flex-col relative">
          <Component {...otherPageProps} />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default SpreadshopApp;
