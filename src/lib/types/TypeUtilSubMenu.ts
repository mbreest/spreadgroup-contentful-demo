import * as Contentful from 'contentful';
import { TypeExternalPageFields } from './TypeExternalPage';
import { TypePageFields } from './TypePage';

export interface TypeUtilSubMenuFields {
  title?: Contentful.EntryFields.Symbol;
  description?: Contentful.EntryFields.Symbol;
  image?: Contentful.Asset;
  new?: Contentful.EntryFields.Boolean;
  highlight?: Contentful.EntryFields.Boolean;
  icon?: 'gift' | 'tag';
  link?: Contentful.Entry<TypePageFields | TypeExternalPageFields>;
  subMenus?: Contentful.Entry<TypeUtilSubMenuFields>[];
}

export type TypeUtilSubMenu = Contentful.Entry<TypeUtilSubMenuFields>;
