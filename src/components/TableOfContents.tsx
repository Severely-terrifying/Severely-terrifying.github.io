import React from 'react';
import { sections } from '../data/sections';

const TableOfContents: React.FC = () => {
  return (
    <nav className="fixed inset-y-16 left-0 w-64 bg-[#f8f9fa] border-r border-gray-200">
      <div className="bg-white rounded-lg border border-gray-300 m-4 p-4">
        <h2 className="text-lg font-normal text-gray-700 mb-4">Contents</h2>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-[#0645ad] hover:text-[#0b0080] hover:underline text-sm block"
              >
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};