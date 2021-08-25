import * as Contentful from 'contentful';
import { TypeAssortmentPageFields } from './TypeAssortmentPage';
import { TypePageBlogCategoryFields } from './TypePageBlogCategory';
import { TypePageBlogPostFields } from './TypePageBlogPost';
import { TypePageHelpdeskArticleFields } from './TypePageHelpdeskArticle';
import { TypePageLandingpageFields } from './TypePageLandingpage';
import { TypePagePagetypeLpBobFields } from './TypePagePagetypeLpBob';
import { TypePagePagetypeSpreadGroupPageFields } from './TypePagePagetypeSpreadGroupPage';
import { TypePagePagetypeSpreadGroupSingleJobFields } from './TypePagePagetypeSpreadGroupSingleJob';
import { TypePagePagetypeZendeskFields } from './TypePagePagetypeZendesk';
import { TypePageProductFields } from './TypePageProduct';
import { TypeSeoFields } from './TypeSeo';

export interface TypePageFields {
  name: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  seo?: Contentful.Entry<TypeSeoFields>;
  content: Contentful.Entry<
    | TypeAssortmentPageFields
    | TypePageBlogCategoryFields
    | TypePageBlogPostFields
    | TypePageHelpdeskArticleFields
    | TypePageLandingpageFields
    | TypePageProductFields
    | TypePagePagetypeSpreadGroupPageFields
    | TypePagePagetypeSpreadGroupSingleJobFields
    | TypePagePagetypeSpreadGroupSingleJobFields
    | TypePagePagetypeSpreadGroupSingleJobFields
    | TypePagePagetypeLpBobFields
    | TypePagePagetypeZendeskFields
  >;
}

export type TypePage = Contentful.Entry<TypePageFields>;
