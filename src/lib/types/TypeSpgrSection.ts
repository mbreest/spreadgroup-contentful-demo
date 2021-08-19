import * as Contentful from 'contentful';
import { TypeSpgrJobArchiveFields } from './TypeSpgrJobArchive';
import { TypeSpgrTeaserFields } from './TypeSpgrTeaser';

export interface TypeSpgrSectionFields {
  name: Contentful.EntryFields.Symbol;
  content?: Contentful.Entry<TypeSpgrJobArchiveFields | TypeSpgrTeaserFields>;
  background?: 'Color' | 'Image' | 'SVG' | 'Triangles';
  backgroundColor?:
    | 'white'
    | 'grey'
    | 'reef'
    | 'gold'
    | 'raven'
    | 'lightGrey'
    | 'reefLight'
    | 'reefDark';
  backgroundSvg?: 'jobOpenings' | 'workingAtSpreadGroup' | 'sustainability' | 'whoWeAre';
  paddingTop?: Contentful.EntryFields.Boolean;
  paddingBottom?: Contentful.EntryFields.Boolean;
}

export type TypeSpgrSection = Contentful.Entry<TypeSpgrSectionFields>;
