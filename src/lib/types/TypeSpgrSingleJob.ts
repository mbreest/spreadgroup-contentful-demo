import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';
import { TypeSpgrDepartmentCategoryFields } from './TypeSpgrDepartmentCategory';
import { TypeSpgrLocationCategoryFields } from './TypeSpgrLocationCategory';
import { TypeSpgrTypeCategoryFields } from './TypeSpgrTypeCategory';

export interface TypeSpgrSingleJobFields {
  jobTitle?: Contentful.EntryFields.Symbol;
  jobId: Contentful.EntryFields.Symbol;
  jiraComponentName: Contentful.EntryFields.Symbol;
  description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  applicationDescription?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  department: Contentful.Entry<TypeSpgrDepartmentCategoryFields>[];
  type: Contentful.Entry<TypeSpgrTypeCategoryFields>[];
  location: Contentful.Entry<TypeSpgrLocationCategoryFields>[];
}

export type TypeSpgrSingleJob = Contentful.Entry<TypeSpgrSingleJobFields>;
