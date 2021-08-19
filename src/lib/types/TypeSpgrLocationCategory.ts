import * as Contentful from 'contentful';

export interface TypeSpgrLocationCategoryFields {
  label: Contentful.EntryFields.Symbol;
}

export type TypeSpgrLocationCategory = Contentful.Entry<TypeSpgrLocationCategoryFields>;
