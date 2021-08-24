/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getBobPages, getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage } from 'lib/types';
import { PageHead } from '../../components/page-head';
import Teaser from '../../components/bob/teaser/Teaser';

type LandingProps = {
  page: TypePage;
};

export default function BobSinglePage({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <PageHead page={page} />
      <main className="bob sprd-responsive-cnt">
        {/*eslint-disable-next-line*/}
        {/*@ts-ignore*/}
        <Teaser title={page.fields.content.fields.title} />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const pages = await getBobPages();

  return {
    fallback: 'blocking',
    //eslint-disable-next-line
    //@ts-ignore
    paths: pages.map((pages) => ({ params: { slug: pages.fields.slug } })),
  };
}

export async function getStaticProps({ params, query, locale }) {
  const slug = params.slug;
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.Bob,
  });

  return {
    props: { page },
    revalidate: 3600,
  };
}
