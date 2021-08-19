import * as Contentful from 'contentful';

export interface TypeSpgrDepartmentCategoryFields {
  label: Contentful.EntryFields.Symbol;
}

export type TypeSpgrDepartmentCategory = Contentful.Entry<TypeSpgrDepartmentCategoryFields>;
