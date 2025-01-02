import React from 'react';
import { sections } from '../data/sections';

const ContentTableOfContents: React.FC = () => {
  return (
    <div className="content-toc">
      <h2>Contents</h2>
      <ol>
        {sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ContentTableOfContents;