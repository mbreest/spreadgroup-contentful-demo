import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeBobUsPsFields } from './TypeBobUsPs';

export interface TypePagePagetypeLpBobFields {
  name?: Contentful.EntryFields.Symbol;
  businessUnit: 'MP' | 'CYO';
  title: Contentful.EntryFields.Symbol;
  content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  featuredImage?: Contentful.Asset;
  usPs?: Contentful.Entry<TypeBobUsPsFields>[];
}

export type TypePagePagetypeLpBob = Contentful.Entry<TypePagePagetypeLpBobFields>;
