import * as Contentful from 'contentful';
import { TypeUtilSubMenuFields } from './TypeUtilSubMenu';

export interface TypeMegaMenuFields {
  internalName?: Contentful.EntryFields.Symbol;
  subMenus?: Contentful.Entry<TypeUtilSubMenuFields>[];
}

export type TypeMegaMenu = Contentful.Entry<TypeMegaMenuFields>;
