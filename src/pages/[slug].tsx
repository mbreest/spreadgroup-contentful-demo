/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePagePagetypeSpreadGroupPage } from 'lib/types';
import { BlockRenderer } from 'components/block-renderer';
import { PageHead } from '../components/page-head';
import Link from 'next/link';

type LandingProps = {
  page: TypePage;
};

export default function Landing({ page }: LandingProps) {
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

export async function getServerSideProps({ params, query, locale }) {
  const slug = String((params && params.slug) ?? 'job-openings');
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.SpreadGroup,
  });

  return {
    props: { page },
  };
}
