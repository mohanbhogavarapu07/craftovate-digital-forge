import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right' | null>(null);
  const leftPageControls = useAnimation();
  const rightPageControls = useAnimation();
  const bookRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    // Page 1 - UI/UX Design Projects
    {
      left: {
        id: 1,
        title: "AGRO-MARKETING Platform",
        description: "Comprehensive agricultural marketing platform with modern UI/UX design, analytics dashboard, and digital marketing tools.",
        thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
        category: "UI/UX Design",
        skills: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
        rating: 4.9
      },
      right: {
        id: 2,
        title: "FoodieHub Delivery App",
        description: "Modern food delivery app with intuitive user interface, real-time tracking, and seamless ordering experience.",
        thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        category: "Mobile Apps",
        skills: ["React Native", "Figma", "Adobe XD", "Sketch", "Marvel"],
        rating: 4.7
      }
    },
    // Page 2 - Web Development Projects
    {
      left: {
        id: 3,
        title: "HealthCare Portal System",
        description: "Comprehensive patient portal with intuitive user experience, appointment scheduling, and medical records management.",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        category: "Web Development",
        skills: ["React", "TypeScript", "Express", "PostgreSQL", "JWT"],
        rating: 4.8
      },
      right: {
        id: 4,
        title: "FinTech Dashboard",
        description: "Advanced financial dashboard with real-time analytics, transaction monitoring, and comprehensive reporting tools.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        category: "Web Development",
        skills: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
        rating: 4.8
      }
    },
    // Page 3 - E-commerce & E-Learning Projects
    {
      left: {
        id: 5,
        title: "EcoStore E-commerce Platform",
        description: "Modern e-commerce platform for sustainable products with AI-powered recommendations and seamless checkout experience.",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        category: "E-commerce",
        skills: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
        rating: 4.9
      },
      right: {
        id: 6,
        title: "E-Learning Platform",
        description: "Comprehensive e-learning platform with video streaming, progress tracking, and interactive course management.",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        category: "Web Development",
        skills: ["React", "Node.js", "MongoDB", "AWS", "WebRTC"],
        rating: 4.6
      }
    }
  ];

  const totalPages = projects.length;

  const nextPage = async () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setFlipDirection('right');
    
    // Step 1: Hide content smoothly
    await rightPageControls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    });
    
    // Step 2: Update content
    setCurrentPage((prev) => (prev + 1) % totalPages);
    
    // Step 3: Turn page (right page flips from right to left)
    await rightPageControls.start({
      rotateY: 180,
      transformOrigin: "left center",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      }
    });
    
    // Step 4: Reset page position and show new content
    await rightPageControls.start({
      rotateY: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    });
    
    setIsFlipping(false);
    setFlipDirection(null);
  };

  const prevPage = async () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setFlipDirection('left');
    
    // Step 1: Hide content smoothly
    await leftPageControls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    });
    
    // Step 2: Update content
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    
    // Step 3: Turn page (left page flips from left to right)
    await leftPageControls.start({
      rotateY: -180,
      transformOrigin: "right center",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      }
    });
    
    // Step 4: Reset page position and show new content
    await leftPageControls.start({
      rotateY: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    });
    
    setIsFlipping(false);
    setFlipDirection(null);
  };

  const currentProjects = projects[currentPage];

  return (
    <section id="portfolio" className="py-16 relative overflow-hidden" ref={sectionRef}>
      {/* Portfolio Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/portfoliobg.png')`,
        }}
      ></div>
      
        {/* Section Header */}
       <motion.div 
         className="container mx-auto px-6 mb-8 relative z-10"
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
       >
         <div className="text-center">
           <motion.h2 
             className="text-6xl font-bold text-black mb-4 tracking-tight"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
           >
             Portfolio
           </motion.h2>
           <motion.p 
             className="text-xl text-black max-w-2xl mx-auto font-medium"
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
             transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
           >
             A curated collection of our finest work
           </motion.p>
         </div>
       </motion.div>

      {/* Physical Book Container */}
      <motion.div 
        className="flex justify-center items-center relative"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        {/* AR-Style Floating Navigation */}
         <motion.button
           onClick={prevPage}
           className="absolute left-12 z-30 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30"
           whileHover={{ scale: 1.1, y: -3 }}
           whileTap={{ scale: 0.95 }}
         >
           <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" />
         </motion.button>

         <motion.button
           onClick={nextPage}
           className="absolute right-12 z-30 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30"
           whileHover={{ scale: 1.1, y: -3 }}
           whileTap={{ scale: 0.95 }}
         >
           <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" />
         </motion.button>

         {/* Hyper-Realistic Physical Book */}
         <motion.div
           ref={bookRef}
           className="relative w-[800px] h-[500px]"
           initial={{ opacity: 0, y: 60, rotateX: 8, rotateY: -2 }}
           animate={{ opacity: 1, y: 0, rotateX: 2, rotateY: -1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           style={{ 
             transformStyle: "preserve-3d",
             perspective: "1200px"
           }}
         >
          {/* Realistic Book Drop Shadow */}
          <div className="absolute inset-0 bg-black/12 rounded-2xl blur-2xl transform translate-y-16 scale-110"></div>
          <div className="absolute inset-0 bg-black/6 rounded-2xl blur-xl transform translate-y-8 scale-105"></div>
          <div className="absolute inset-0 bg-black/3 rounded-2xl blur-lg transform translate-y-4 scale-102"></div>
          
           {/* Realistic Spiral Notebook Container */}
           <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
            
            {/* Subtle Paper Texture */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.015'%3E%3Ccircle cx='50' cy='50' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            
             {/* Realistic Metal Spiral Binding - Exact Match to Reference */}
             <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-30">
               {/* Main spiral structure - dark metallic */}
               <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-lg"></div>
               
               {/* Individual spiral rings - exactly like reference */}
               {Array.from({ length: 18 }).map((_, i) => (
                 <div
                   key={i}
                   className="absolute w-1 h-1 bg-gray-800 rounded-full border border-gray-900"
                   style={{
                     left: '50%',
                     top: `${5 + i * 5}%`,
                     transform: 'translateX(-50%)',
                     boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5)'
                   }}
                 />
               ))}
               
               {/* Spiral shadow on pages - subtle like reference */}
               <div className="absolute left-0.5 top-0 bottom-0 w-0.5 bg-black/20 transform translate-x-0.5"></div>
               <div className="absolute -left-0.5 top-0 bottom-0 w-0.5 bg-black/20 transform -translate-x-0.5"></div>
        </div>


             {/* Left Page - Pure White Paper */}
             <motion.div 
               className="absolute left-0 top-0 w-1/2 h-full bg-white p-6"
               style={{ 
                 transform: "perspective(1000px) rotateY(1deg)",
                 transformStyle: "preserve-3d",
                 backfaceVisibility: "visible"
               }}
               animate={leftPageControls}
               initial={{ rotateY: 0 }}
             >
               {/* Realistic Paper Shading - like reference */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/20 to-transparent"></div>
               <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gray-100/30"></div>
               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/10 to-gray-100/15"></div>
               
              
                 {/* Left Page Content - Editorial Style */}
                 <div className="relative z-10">
                   <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">{currentProjects.left.category}</h3>
                   <p className="text-gray-700 mb-6 leading-relaxed text-sm font-normal">
                     {currentProjects.left.category === "UI/UX Design" 
                       ? "Creating intuitive and beautiful user experiences that engage and delight users."
                       : currentProjects.left.category === "Web Development"
                       ? "Building robust, scalable web applications with modern technologies and best practices."
                       : currentProjects.left.category === "E-commerce"
                       ? "Developing comprehensive e-commerce solutions with seamless user experiences and secure payment processing."
                       : "Discover our innovative solutions that drive business growth and digital transformation."
                     }
                   </p>
                 

                {/* Project 1 - Printed Layout */}
                <motion.div
                  key={`left-${currentPage}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8 }}
                   className="bg-yellow-50 rounded-lg p-4 mb-4 shadow-lg border border-yellow-200"
                >
                   <div className="flex gap-4">
                     <div className="w-20 h-16 bg-stone-200 rounded-md overflow-hidden flex-shrink-0 shadow-sm">
                      <img 
                        src={currentProjects.left.thumbnail} 
                        alt={currentProjects.left.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center justify-between mb-1">
                         <h4 className="font-semibold text-gray-900 text-sm">{currentProjects.left.title}</h4>
                         <div className="flex items-center gap-1">
                           <span className="text-xs text-yellow-500">★</span>
                           <span className="text-xs text-gray-600">{currentProjects.left.rating}</span>
                         </div>
                       </div>
                       <p className="text-xs text-gray-800 leading-relaxed font-normal mb-2">{currentProjects.left.description}</p>
                       <div className="flex flex-wrap gap-1">
                         {currentProjects.left.skills.slice(0, 3).map((skill, index) => (
                           <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                             {skill}
                           </span>
                         ))}
                         {currentProjects.left.skills.length > 3 && (
                           <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                             +{currentProjects.left.skills.length - 3}
                           </span>
                         )}
                       </div>
                  </div>
                </div>
                </motion.div>

          </div>
            </motion.div>

             {/* Right Page - Pure White Paper */}
             <motion.div 
               className="absolute right-0 top-0 w-1/2 h-full bg-white p-6"
               style={{ 
                 transform: "perspective(1000px) rotateY(-1deg)",
                 transformStyle: "preserve-3d",
                 backfaceVisibility: "visible"
               }}
               animate={rightPageControls}
               initial={{ rotateY: 0 }}
             >
               {/* Realistic Paper Shading - like reference */}
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-50/20 to-transparent"></div>
               <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100/30"></div>
               <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-50/10 to-gray-100/15"></div>
               
              
                 {/* Right Page Content - Editorial Style */}
                 <div className="relative z-10">
                   <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">{currentProjects.right.category}</h3>
                   <p className="text-gray-700 mb-6 leading-relaxed text-sm font-normal">
                     {currentProjects.right.category === "Mobile Apps"
                       ? "Crafting mobile applications that provide seamless experiences across all devices and platforms."
                       : currentProjects.right.category === "Web Development"
                       ? "Delivering high-performance web solutions with cutting-edge technologies and user-centric design."
                       : currentProjects.right.category === "E-commerce"
                       ? "Building comprehensive e-commerce platforms with advanced features and exceptional user experiences."
                       : "Our journey of innovation and growth in the digital landscape."
                     }
                   </p>
                 

                {/* Project 1 - Printed Layout */}
                <motion.div
                  key={`right-${currentPage}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.8 }}
                   className="bg-yellow-50 rounded-lg p-4 mb-4 shadow-lg border border-yellow-200"
                >
                   <div className="flex gap-4">
                     <div className="w-20 h-16 bg-stone-200 rounded-md overflow-hidden flex-shrink-0 shadow-sm">
                      <img 
                        src={currentProjects.right.thumbnail} 
                        alt={currentProjects.right.title}
                        className="w-full h-full object-cover"
                      />
                  </div>
                    <div className="flex-1">
                       <div className="flex items-center justify-between mb-1">
                         <h4 className="font-semibold text-gray-900 text-sm">{currentProjects.right.title}</h4>
                         <div className="flex items-center gap-1">
                           <span className="text-xs text-yellow-500">★</span>
                           <span className="text-xs text-gray-600">{currentProjects.right.rating}</span>
                         </div>
                       </div>
                       <p className="text-xs text-gray-800 leading-relaxed font-normal mb-2">{currentProjects.right.description}</p>
                       <div className="flex flex-wrap gap-1">
                         {currentProjects.right.skills.slice(0, 3).map((skill, index) => (
                           <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                             {skill}
                           </span>
                         ))}
                         {currentProjects.right.skills.length > 3 && (
                           <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                             +{currentProjects.right.skills.length - 3}
                           </span>
                         )}
                       </div>
                </div>
              </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Page Indicators */}
      <div className="flex justify-center mt-12 space-x-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentPage 
                ? 'bg-stone-600 scale-150' 
                : 'bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
