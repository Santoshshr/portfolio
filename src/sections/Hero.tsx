import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

function SystemVisual() {
  const nodes = [
    { id: "ideas", label: "Ideas", desc: "Hypothesis & validation", yOffset: 20 },
    { id: "experiments", label: "Experiments", desc: "Prototypes & data", yOffset: -20 },
    { id: "products", label: "Products", desc: "Core value delivery", yOffset: 10 },
    { id: "ventures", label: "Ventures", desc: "Independent businesses", yOffset: -10 },
  ];

  return (
    <div className="relative mx-auto mt-20 w-full max-w-5xl h-[300px] sm:h-[400px]">
      {/* Background connection line */}
      <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] -translate-y-1/2 bg-[var(--border-primary)]" />
      
      {/* Animated active connection line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/2 left-[10%] right-[10%] h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent origin-left opacity-50" 
      />

      <div className="relative h-full flex justify-between items-center px-4 sm:px-12">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: node.yOffset + 20 }}
            animate={{ opacity: 1, y: node.yOffset }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center group"
          >
            {/* Connection node point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-hover)] z-0 transition-colors duration-300 group-hover:border-[var(--color-accent)]" />
            
            {/* Card UI Fragment */}
            <div className={`surface-card w-28 sm:w-40 rounded-lg p-3 sm:p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 ${i % 2 === 0 ? 'mb-16' : 'mt-16'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] opacity-80" />
                <div className="h-1 w-6 rounded bg-[var(--bg-tertiary)]" />
              </div>
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[var(--text-primary)] mb-1">
                {node.label}
              </h4>
              <p className="text-[9px] sm:text-[10px] text-[var(--text-secondary)] leading-tight hidden sm:block">
                {node.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Floating abstract decorative elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-16 h-16 rounded-xl border border-[var(--border-secondary)] bg-[var(--bg-card)] opacity-40 backdrop-blur-sm -z-10"
      />
      <motion.div 
        animate={{ y: [10, -15, 10], rotate: [0, -5, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-24 h-24 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-card)] opacity-30 backdrop-blur-sm -z-10"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Extremely subtle radial gradient background (Replit/Vercel style) */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[600px] w-[800px] max-w-full -translate-y-1/2 rounded-[100%] bg-[var(--text-primary)] opacity-[0.02] blur-[100px]" />
      </div>

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-primary)] to-[var(--text-secondary)] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1]"
          >
            I build ideas into businesses.
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl"
          >
            Entrepreneur, founder, and builder focused on turning ambitious ideas into products, ventures, and businesses that create real value.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#ventures" variant="primary" size="lg">
              Explore What I'm Building
              <ArrowRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Let's Connect
            </Button>
          </motion.div>
        </div>

        {/* System Visual representation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full"
        >
          <SystemVisual />
        </motion.div>
      </Container>
    </section>
  );
}
