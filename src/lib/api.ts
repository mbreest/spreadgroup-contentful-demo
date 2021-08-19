import { createClient } from 'contentful';

import { parsePage } from './pageParsers';
import { PageContentType, PageContentTypes } from './constants';
import { Locale } from './translations';

export const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

const getClient = (preview: boolean) => (preview ? previewClient : client);

type GetPageParams = {
  slug: string;
  locale: Locale;
  pageContentType: string;
  preview?: boolean;
};

const getPageQuery = (params: GetPageParams) => ({
  limit: 1,
  include: 10,
  locale: params.locale,
  'fields.slug': params.slug,
  content_type: PageContentType,
  'fields.content.sys.contentType.sys.id': params.pageContentType,
});

export async function getPage(params: GetPageParams) {
  const query = getPageQuery(params);
  const {
    items: [page],
  } = await getClient(params.preview).getEntries(query);

  return page ? parsePage(page) : null;
}

export async function getJobEntries() {
  const client = getClient(false);

  const { items: jobs } = await client.getEntries({
    content_type: 'page',
    'fields.content.sys.contentType.sys.id': PageContentTypes.SpreadGroupSingleJobs,
    order: 'sys.createdAt',
  });

  return jobs;
}
