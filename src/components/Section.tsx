import React from 'react';
import { NeuronTypeChart, ApplicationsPieChart, ResearchGrowthChart } from './Charts';

interface SectionProps {
  id: string;
  title: string;
  content: string;
  chart?: 'neuron-type' | 'applications' | 'research-growth';
}

const Section: React.FC<SectionProps> = ({ id, title, content, chart }) => {
  const renderChart = () => {
    switch (chart) {
      case 'neuron-type':
        return (
          <div className="chart-wrapper">
            <NeuronTypeChart />
          </div>
        );
      case 'applications':
        return (
          <div className="chart-wrapper">
            <ApplicationsPieChart />
          </div>
        );
      case 'research-growth':
        return (
          <div className="chart-wrapper">
            <ResearchGrowthChart />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id={id} className="mb-8">
      <h2 className="text-3xl font-serif mb-4 pb-1 border-b border-gray-300">{title}</h2>
      <p className="text-gray-800 leading-relaxed mb-4">{content}</p>
      {renderChart()}
    </section>
  );
};