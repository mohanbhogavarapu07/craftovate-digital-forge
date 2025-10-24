import React from 'react';
import FlowchartAnimation from './FlowchartAnimation';
import AdvancedFlowchartAnimation from './AdvancedFlowchartAnimation';

const ProcessShowcase: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Basic Flowchart */}
          <div className="mb-16">
            <FlowchartAnimation
              title="Our Development Process"
              subtitle="From concept to deployment, see how we bring ideas to life"
              className="mb-8"
            />
          </div>

          {/* Advanced Flowchart */}
          <div>
            <AdvancedFlowchartAnimation
              title="Advanced Project Workflow"
              subtitle="Interactive flowchart with zoom, pan, and advanced animations"
              showControls={true}
              autoPlay={false}
              speed={1.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessShowcase;
