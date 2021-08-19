import * as Contentful from 'contentful';
import { TypeSpgrRecruitingSpecialistFields } from './TypeSpgrRecruitingSpecialist';
import { TypeSpgrSingleJobFields } from './TypeSpgrSingleJob';

export interface TypePagePagetypeSpreadGroupSingleJobFields {
  name?: Contentful.EntryFields.Symbol;
  recruitingSpecialist: Contentful.Entry<TypeSpgrRecruitingSpecialistFields>;
  job: Contentful.Entry<TypeSpgrSingleJobFields>;
}

export type TypePagePagetypeSpreadGroupSingleJob =
  Contentful.Entry<TypePagePagetypeSpreadGroupSingleJobFields>;
