import * as Contentful from 'contentful';

export interface TypeBobUsPsFields {
  usPs?: Contentful.EntryFields.Symbol;
}

export type TypeBobUsPs = Contentful.Entry<TypeBobUsPsFields>;
