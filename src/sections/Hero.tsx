import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

function SystemVisual({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const nodes = [
    { id: "idea", label: "Idea", desc: "Hypothesis", yOffset: 20 },
    { id: "build", label: "Build", desc: "Prototype", yOffset: -20 },
    { id: "test", label: "Test", desc: "Validation", yOffset: 10 },
    { id: "launch", label: "Launch", desc: "Market", yOffset: -10 },
    { id: "business", label: "Business", desc: "Scale", yOffset: 15 },
  ];

  // Parallax effects for decorative elements based on mouse
  const x1 = useTransform(mouseX, [0, window.innerWidth], [15, -15]);
  const y1 = useTransform(mouseY, [0, window.innerHeight], [15, -15]);
  
  const x2 = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const y2 = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  return (
    <div aria-hidden="true" className="relative mx-auto mt-20 w-full max-w-5xl h-[250px] sm:h-[350px]">
      {/* Background connection line */}
      <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] -translate-y-1/2 bg-[var(--border-secondary)]" />
      
      {/* Animated active connection line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/2 left-[5%] right-[5%] h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent origin-left opacity-60" 
      />

      <div className="relative h-full flex justify-between items-center px-2 sm:px-8">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: node.yOffset + 20 }}
            animate={{ opacity: 1, y: node.yOffset }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center group"
          >
            {/* Connection node point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-hover)] z-0 transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:scale-125" />
            
            {/* Card UI Fragment */}
            <div className={`surface-card w-20 sm:w-32 rounded-lg p-2 sm:p-4 text-center transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-md ${i % 2 === 0 ? 'mb-16 sm:mb-24' : 'mt-16 sm:mt-24'}`}>
              <h4 className="text-[9px] sm:text-[11px] font-bold tracking-widest uppercase text-[var(--text-primary)] mb-0.5 sm:mb-1">
                {node.label}
              </h4>
              <p className="text-[8px] sm:text-[10px] text-[var(--text-tertiary)] leading-tight hidden sm:block">
                {node.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Floating abstract decorative elements reacting to mouse */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="absolute top-0 left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-card)] opacity-20 -z-10 blur-sm"
      />
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="absolute bottom-0 right-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-card)] opacity-10 -z-10 blur-md"
      />
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tracking for system visual
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-20"
    >
      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto flex flex-col items-center w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-[var(--text-tertiary)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Santosh Shrestha
            </span>
            <div className="h-[1px] w-8 bg-[var(--text-tertiary)]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[1.05]"
          >
            I build ideas<br />
            <span className="text-[var(--text-secondary)]">into businesses.</span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl font-medium"
          >
            I turn ambitious ideas into products, experiences, and ventures — combining technology, design, and execution to build things that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#focus" variant="primary" size="lg" showArrow>
              Explore my work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Let's connect
            </Button>
          </motion.div>
        </motion.div>

        {/* System Visual representation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="w-full"
        >
          <SystemVisual mouseX={smoothMouseX} mouseY={smoothMouseY} />
        </motion.div>
      </Container>
    </section>
  );
}
