import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Target, 
  CheckCircle, 
  Zap,
  TrendingUp,
  Shield,
  Code,
  Palette
} from 'lucide-react';

interface FlowchartNode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  level: number;
  connections: string[];
  color: string;
}

interface FlowchartAnimationProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const FlowchartAnimation: React.FC<FlowchartAnimationProps> = ({
  title = "Our Process",
  subtitle = "How we transform ideas into digital excellence",
  className = ""
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes: FlowchartNode[] = [
    {
      id: 'discovery',
      title: 'Discovery',
      description: 'Understanding your vision and requirements',
      icon: <Lightbulb className="w-6 h-6" />,
      position: { x: 50, y: 20 },
      level: 0,
      connections: ['research'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'research',
      title: 'Research & Analysis',
      description: 'Market research and competitive analysis',
      icon: <Target className="w-6 h-6" />,
      position: { x: 200, y: 20 },
      level: 1,
      connections: ['design'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'design',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes',
      icon: <Palette className="w-6 h-6" />,
      position: { x: 350, y: 20 },
      level: 2,
      connections: ['development'],
      color: 'from-blue-600 to-indigo-500'
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Building your digital solution with modern tech',
      icon: <Code className="w-6 h-6" />,
      position: { x: 500, y: 20 },
      level: 3,
      connections: ['testing'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'testing',
      title: 'Testing & QA',
      description: 'Rigorous testing and quality assurance',
      icon: <CheckCircle className="w-6 h-6" />,
      position: { x: 650, y: 20 },
      level: 4,
      connections: ['deployment'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'deployment',
      title: 'Deployment',
      description: 'Launching your solution to the world',
      icon: <Zap className="w-6 h-6" />,
      position: { x: 800, y: 20 },
      level: 5,
      connections: ['support'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'support',
      title: 'Ongoing Support',
      description: 'Continuous maintenance and improvements',
      icon: <Shield className="w-6 h-6" />,
      position: { x: 950, y: 20 },
      level: 6,
      connections: [],
      color: 'from-rose-500 to-red-500'
    }
  ];

  const totalSteps = nodes.length;

  useEffect(() => {
    if (isPlaying && currentStep < totalSteps) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, totalSteps]);

  const startAnimation = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const getConnectionPath = (fromNode: FlowchartNode, toNode: FlowchartNode) => {
    const startX = fromNode.position.x + 120; // Center of first node
    const startY = fromNode.position.y + 40;
    const endX = toNode.position.x + 20; // Left edge of second node
    const endY = toNode.position.y + 40;
    
    const midX = (startX + endX) / 2;
    
    return `M ${startX} ${startY} Q ${midX} ${startY - 20} ${endX} ${endY}`;
  };

  const visibleNodes = nodes.slice(0, currentStep + 1);
  const visibleConnections = nodes
    .slice(0, currentStep)
    .filter(node => node.connections.length > 0)
    .map(node => {
      const connectedNode = nodes.find(n => n.id === node.connections[0]);
      return connectedNode ? { from: node, to: connectedNode } : null;
    })
    .filter(Boolean);

  return (
    <div className={`w-full bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border-b border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-6">{subtitle}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={startAnimation}
              disabled={isPlaying}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlaying ? 'Animating...' : 'Start Animation'}
            </button>
            <button
              onClick={resetAnimation}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Flowchart Container */}
      <div 
        ref={containerRef}
        className="relative p-8 min-h-[400px] bg-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)' }}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {visibleConnections.map((connection, index) => {
            if (!connection) return null;
            const path = getConnectionPath(connection.from, connection.to);
            return (
              <motion.path
                key={`${connection.from.id}-${connection.to.id}`}
                d={path}
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  filter: hoveredNode === connection.from.id || hoveredNode === connection.to.id 
                    ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' 
                    : 'none'
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                style={{
                  filter: hoveredNode === connection.from.id || hoveredNode === connection.to.id 
                    ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' 
                    : 'none'
                }}
              />
            );
          })}
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        <div className="relative z-10">
          {visibleNodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.position.x}px`,
                top: `${node.position.y}px`,
              }}
              initial={{ 
                opacity: 0, 
                y: 50, 
                scale: 0.8,
                rotateX: -15
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: hoveredNode === node.id ? 1.05 : 1,
                rotateX: 0
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Node Card */}
              <div className="relative group">
                <motion.div
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-64 cursor-pointer"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    y: -2
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${node.color} flex items-center justify-center text-white mb-4`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.3 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {node.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.3 + 0.4
                    }}
                  >
                    {node.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.3 + 0.6
                    }}
                  >
                    {node.description}
                  </motion.p>

                  {/* Progress Indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-xl overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.3 + 0.8
                    }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${node.color}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: index * 0.3 + 1.0
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${node.color} opacity-0 blur-xl`}
                  animate={{ 
                    opacity: hoveredNode === node.id ? 0.3 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-6 h-6 bg-cyan-400 rounded-full opacity-20"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Animation Progress</span>
          <span className="text-sm text-gray-500">{currentStep + 1} / {totalSteps}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowchartAnimation;
