import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypePagePagetypeLpBobFields {
  name?: Contentful.EntryFields.Symbol;
  businessUnit: 'MP' | 'CYO';
  title: Contentful.EntryFields.Symbol;
  content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  featuredImage?: Contentful.Asset;
}

export type TypePagePagetypeLpBob = Contentful.Entry<TypePagePagetypeLpBobFields>;
