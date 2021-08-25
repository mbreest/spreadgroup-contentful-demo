/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getZendeskPages, getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePagePagetypeLpBob, TypePagePagetypeSpreadGroupPage } from 'lib/types';
import { PageHead } from '../../components/page-head';
import { BlockRenderer } from '../../components/block-renderer';

type LandingProps = {
  page: TypePage;
};

export default function ZendeskSinglePage({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const content = page.fields.content as TypePagePagetypeSpreadGroupPage;
  const { sections } = content.fields;

  return (
    <div className="w-full pb-16">
      <PageHead page={page} />
      <BlockRenderer block={sections} />
    </div>
  );
}

export async function getStaticPaths() {
  const pages = await getZendeskPages();

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
    pageContentType: PageContentTypes.Zendesk,
  });

  return {
    props: { page },
    revalidate: 1,
  };
}
