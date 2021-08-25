import React from 'react';
import { BlockRenderer } from '../block-renderer';

const ZendeskSection = ({ fields }) => {
  const { content } = fields;

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <BlockRenderer block={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZendeskSection;
