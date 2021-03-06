import React from 'react';
import { renderRichText } from './render';

type Props = {
  data: any;
  content: any;
  type: 'AssetLink' | 'PlainLink';
};

export const Hyperlink = (props: Props) => {
  const href = props.type === 'AssetLink' ? props.data.target.fields.file.url : props.data.uri;
  const linkText = renderRichText({
    content: props.content,
    data: {},
    nodeType: 'document',
  });
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-yellow-600">
      {linkText}
    </a>
  );
};
