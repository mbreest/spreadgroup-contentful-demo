import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeSpgrSingleJobLocalFields {
  jobTitle?: Contentful.EntryFields.Symbol;
  description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  applicationDescription: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeSpgrSingleJobLocal = Contentful.Entry<TypeSpgrSingleJobLocalFields>;
