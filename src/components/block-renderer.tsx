import _ from 'lodash';
import React from 'react';
import type { Entry } from 'contentful';

import { ComponentContentTypes, PageContentType } from '../lib/constants';
import SpgrSection from './spreadgroup/SpgrSection';
import SpgrTeaser from './spreadgroup/SpgrTeaser';
import SpgrJobArchive from './spreadgroup/jobArchive/SpgrJobArchive';
import SpgrRecruitingSpecialist from './spreadgroup/SpgrRecruitingSpecialist';
import SpgrSingleJob from './spreadgroup/singleJob/SpgrSingleJob';
import USPs from './bob/usp/USPs';
import VolumeDiscountCalculator from './zendesk/volumeDiscountCalculator/VolumeDiscountCalculator';
import ZendeskSection from './zendesk/ZendeskSection';

type BlockRendererProps = {
  block: any;
  segment?: string;
};

const BlockRenderer = ({ block, segment }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} segment={segment} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, 'sys.contentType.sys.id');

  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  //eslint-disable-next-line
  //@ts-ignore
  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const fromPage = (fieldName: string) => (parent: Entry<unknown>) =>
  <BlockRenderer block={{ ...parent?.fields[fieldName], parent }} segment={''} />;

const ContentTypeMap = {
  [ComponentContentTypes.SpgrSection]: SpgrSection,
  [ComponentContentTypes.SpgrTeaser]: SpgrTeaser,
  [ComponentContentTypes.SpgrJobArchive]: SpgrJobArchive,
  [ComponentContentTypes.SpgrRecruitingSpecialist]: SpgrRecruitingSpecialist,
  [ComponentContentTypes.SpgrSingleJobLocal]: SpgrSingleJob,
  [ComponentContentTypes.BobUSPs]: USPs,
  [ComponentContentTypes.ZendeskSection]: ZendeskSection,
  [ComponentContentTypes.ZendeskVolumeDiscountCalculator]: VolumeDiscountCalculator,
  [PageContentType]: fromPage('content'),
};

export { BlockRenderer };
