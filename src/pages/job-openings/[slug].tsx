/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getJobEntries, getPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageContentTypes } from 'lib/constants';
import { TypePage, TypePageFields, TypePagePagetypeSpreadGroupSingleJob } from 'lib/types';
import SpgrSingleJob from '../../components/spreadgroup/singleJob/SpgrSingleJob';
import { PageHead } from '../../components/page-head';

type LandingProps = {
  page: TypePage;
};

export default function JobSinglePage({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <PageHead page={page} />
      <SpgrSingleJob page={page} />
    </div>
  );
}

export async function getStaticPaths() {
  const jobs = await getJobEntries();

  return {
    fallback: 'blocking',
    //eslint-disable-next-line
    //@ts-ignore
    paths: jobs.map((job) => ({ params: { slug: job.fields.slug } })),
  };
}

export async function getStaticProps({ params, query, locale }) {
  const slug = params.slug;
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.SpreadGroupSingleJobs,
  });

  return {
    props: { page },
    revalidate: 3600,
  };
}
