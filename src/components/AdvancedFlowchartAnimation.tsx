import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
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
  Palette,
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move
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
  category: 'planning' | 'design' | 'development' | 'deployment' | 'support';
}

interface FlowchartAnimationProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  speed?: number;
}

const AdvancedFlowchartAnimation: React.FC<FlowchartAnimationProps> = ({
  title = "Our Development Process",
  subtitle = "From concept to deployment, see how we bring ideas to life",
  className = "",
  showControls = true,
  autoPlay = false,
  speed = 1
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showGlow, setShowGlow] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-300, 300], [30, -30]);
  const rotateY = useTransform(x, [-300, 300], [-30, 30]);

  const nodes: FlowchartNode[] = [
    {
      id: 'discovery',
      title: 'Discovery & Research',
      description: 'Deep dive into your business goals, target audience, and market landscape',
      icon: <Lightbulb className="w-6 h-6" />,
      position: { x: 100, y: 100 },
      level: 0,
      connections: ['strategy'],
      color: 'from-blue-500 to-cyan-500',
      category: 'planning'
    },
    {
      id: 'strategy',
      title: 'Strategy & Planning',
      description: 'Creating comprehensive project roadmap and technical architecture',
      icon: <Target className="w-6 h-6" />,
      position: { x: 400, y: 100 },
      level: 1,
      connections: ['wireframing'],
      color: 'from-cyan-500 to-teal-500',
      category: 'planning'
    },
    {
      id: 'wireframing',
      title: 'Wireframing',
      description: 'Building low-fidelity prototypes to define user experience flow',
      icon: <Users className="w-6 h-6" />,
      position: { x: 700, y: 100 },
      level: 2,
      connections: ['design'],
      color: 'from-teal-500 to-green-500',
      category: 'design'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces with modern design principles',
      icon: <Palette className="w-6 h-6" />,
      position: { x: 1000, y: 100 },
      level: 3,
      connections: ['prototyping'],
      color: 'from-green-500 to-emerald-500',
      category: 'design'
    },
    {
      id: 'prototyping',
      title: 'Interactive Prototyping',
      description: 'Building high-fidelity prototypes for user testing and validation',
      icon: <Code className="w-6 h-6" />,
      position: { x: 100, y: 300 },
      level: 4,
      connections: ['development'],
      color: 'from-emerald-500 to-lime-500',
      category: 'development'
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Building robust, scalable applications with cutting-edge technologies',
      icon: <Code className="w-6 h-6" />,
      position: { x: 400, y: 300 },
      level: 5,
      connections: ['testing'],
      color: 'from-lime-500 to-yellow-500',
      category: 'development'
    },
    {
      id: 'testing',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices, browsers, and user scenarios',
      icon: <CheckCircle className="w-6 h-6" />,
      position: { x: 700, y: 300 },
      level: 6,
      connections: ['deployment'],
      color: 'from-yellow-500 to-orange-500',
      category: 'deployment'
    },
    {
      id: 'deployment',
      title: 'Deployment',
      description: 'Seamless launch with zero-downtime deployment strategies',
      icon: <Zap className="w-6 h-6" />,
      position: { x: 1000, y: 300 },
      level: 7,
      connections: ['monitoring'],
      color: 'from-orange-500 to-red-500',
      category: 'deployment'
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Analytics',
      description: 'Real-time performance monitoring and user behavior analytics',
      icon: <TrendingUp className="w-6 h-6" />,
      position: { x: 100, y: 500 },
      level: 8,
      connections: ['optimization'],
      color: 'from-red-500 to-pink-500',
      category: 'support'
    },
    {
      id: 'optimization',
      title: 'Optimization',
      description: 'Continuous improvement based on data insights and user feedback',
      icon: <Shield className="w-6 h-6" />,
      position: { x: 400, y: 500 },
      level: 9,
      connections: ['maintenance'],
      color: 'from-pink-500 to-purple-500',
      category: 'support'
    },
    {
      id: 'maintenance',
      title: 'Ongoing Support',
      description: '24/7 maintenance, updates, and feature enhancements',
      icon: <Shield className="w-6 h-6" />,
      position: { x: 700, y: 500 },
      level: 10,
      connections: [],
      color: 'from-purple-500 to-indigo-500',
      category: 'support'
    }
  ];

  const totalSteps = nodes.length;

  useEffect(() => {
    if (isPlaying && currentStep < totalSteps) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1000 / speed);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, totalSteps, speed]);

  const startAnimation = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(true);
  }, []);

  const pauseAnimation = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resetAnimation = useCallback(() => {
    setIsPlaying(false);
    setCurrentStep(0);
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  }, []);

  const handleResetView = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const getConnectionPath = (fromNode: FlowchartNode, toNode: FlowchartNode) => {
    const startX = fromNode.position.x + 120;
    const startY = fromNode.position.y + 40;
    const endX = toNode.position.x + 20;
    const endY = toNode.position.y + 40;
    
    const midX = (startX + endX) / 2;
    const controlY = Math.min(startY, endY) - 50;
    
    return `M ${startX} ${startY} Q ${midX} ${controlY} ${endX} ${endY}`;
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

  const getCategoryColor = (category: string) => {
    const colors = {
      planning: 'from-blue-100 to-cyan-100',
      design: 'from-green-100 to-emerald-100',
      development: 'from-yellow-100 to-orange-100',
      deployment: 'from-orange-100 to-red-100',
      support: 'from-purple-100 to-pink-100'
    };
    return colors[category as keyof typeof colors] || 'from-gray-100 to-gray-200';
  };

  return (
    <div className={`w-full bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 p-8 border-b border-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
          
          {showControls && (
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={isPlaying ? pauseAnimation : startAnimation}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'} Animation
              </button>
              <button
                onClick={resetAnimation}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button
                onClick={handleZoomIn}
                className="px-4 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="px-4 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetView}
                className="px-4 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              >
                <Move className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Flowchart Container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
        style={{ height: '600px' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #06b6d4 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* 3D Container */}
        <motion.div
          className="w-full h-full"
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
            scale: zoomLevel,
            x: panOffset.x,
            y: panOffset.y,
            rotateX,
            rotateY
          }}
        >
          {/* SVG Connections */}
          <svg 
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {visibleConnections.map((connection, index) => {
              if (!connection) return null;
              const path = getConnectionPath(connection.from, connection.to);
              const isGlowing = showGlow && (hoveredNode === connection.from.id || hoveredNode === connection.to.id);
              
              return (
                <g key={`${connection.from.id}-${connection.to.id}`}>
                  {/* Glow Effect */}
                  {isGlowing && (
                    <motion.path
                      d={path}
                      stroke="url(#glowGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 0.6,
                        filter: 'blur(4px)'
                      }}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                  )}
                  
                  {/* Main Connection */}
                  <motion.path
                    d={path}
                    stroke="url(#connectionGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 1,
                      filter: isGlowing ? 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))' : 'none'
                    }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                  
                  {/* Animated Dots */}
                  <motion.circle
                    r="4"
                    fill="url(#dotGradient)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut",
                      delay: index * 0.2 + 0.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      path={path}
                    />
                  </motion.circle>
                </g>
              );
            })}
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#3b82f6" />
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
                  y: 100, 
                  scale: 0.5,
                  rotateX: -45,
                  rotateY: 45
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: hoveredNode === node.id ? 1.1 : 1,
                  rotateX: 0,
                  rotateY: 0
                }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                onHoverStart={() => setHoveredNode(node.id)}
                onHoverEnd={() => setHoveredNode(null)}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              >
                {/* Node Card */}
                <div className="relative group">
                  <motion.div
                    className={`bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 w-80 cursor-pointer overflow-hidden ${
                      selectedNode === node.id ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
                    }`}
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                      y: -5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category Badge */}
                    <motion.div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(node.category)} text-gray-700`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {node.category.toUpperCase()}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${node.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {node.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.5
                      }}
                    >
                      {node.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-sm text-gray-600 leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.7
                      }}
                    >
                      {node.description}
                    </motion.p>

                    {/* Progress Bar */}
                    <motion.div
                      className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 1, 
                        delay: index * 0.2 + 0.9
                      }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${node.color}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.2 + 1.1
                        }}
                      />
                    </motion.div>

                    {/* Level Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2 + 1.3
                      }}
                    />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${node.color} opacity-0 blur-2xl`}
                    animate={{ 
                      opacity: hoveredNode === node.id ? 0.4 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Particles */}
                  {hoveredNode === node.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-blue-400 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 20}%`
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-6 h-6 bg-cyan-400 rounded-full opacity-20"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-400 rounded-full opacity-30"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Progress and Stats */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Animation Progress</span>
            <span className="text-sm text-gray-500">{currentStep + 1} / {totalSteps}</span>
            <span className="text-sm text-gray-500">Speed: {speed}x</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Zoom: {Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setShowGlow(!showGlow)}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              {showGlow ? 'Disable' : 'Enable'} Glow
            </button>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedFlowchartAnimation;
