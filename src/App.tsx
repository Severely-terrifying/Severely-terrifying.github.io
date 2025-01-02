import React from 'react';
import Header from './components/Header';
import TableOfContents from './components/TableOfContents';
import ContentTableOfContents from './components/ContentTableOfContents';
import Section from './components/Section';
import { sections } from './data/sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex w-full">
        <TableOfContents />
        <main className="flex-1 px-8 py-6 mt-16 ml-64">
          <div className="max-w-[1200px]">
            <h1 className="text-4xl font-serif mb-4">Artificial Neural Networks</h1>
            <p className="text-gray-600 mb-6">From Wikipedia, the free encyclopedia</p>

            <ContentTableOfContents />

            {sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                chart={section.chart}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}