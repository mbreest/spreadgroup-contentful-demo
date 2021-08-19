import * as Contentful from 'contentful';

export interface TypeSpgrTypeCategoryFields {
  label?: Contentful.EntryFields.Symbol;
}

export type TypeSpgrTypeCategory = Contentful.Entry<TypeSpgrTypeCategoryFields>;
