"use client"
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  Coffee, 
  Laptop, 
  Lightbulb, 
  Target, 
  Zap, 
  Heart 
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-1/2 bg-black"></div>
        <div className="absolute inset-0 left-1/2 w-1/2 bg-white"></div>
      </div>

      {/* Floating Characters */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side (black) characters */}
        <motion.div 
          className="absolute top-16 left-12"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.8, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Laptop className="w-16 h-16 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 left-20 transform rotate-12"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.7, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Users className="w-14 h-14 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-8"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.75, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Coffee className="w-18 h-18 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-32 transform -rotate-6"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.6, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <BookOpen className="w-12 h-12 text-white" />
        </motion.div>
        
        {/* Right side (white) characters */}
        <motion.div 
          className="absolute top-20 right-12"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.7, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Heart className="w-14 h-14 text-black" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 right-18 transform rotate-6"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.8, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Lightbulb className="w-16 h-16 text-black" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 right-8"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.8, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Target className="w-16 h-16 text-black" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/3 transform -rotate-12"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.5, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Zap className="w-14 h-14 text-yellow-400" />
        </motion.div>

        {/* Center area characters */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 rotate-45"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.4, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Users className="w-12 h-12 text-gray-500" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/5 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 0.3, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <Coffee className="w-10 h-10 text-gray-500" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side Content */}
        <div className="w-1/2 flex items-center justify-center px-8">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight mb-6">
              Your workspace, design & development.
            </h1>
            <p className="text-lg md:text-xl text-gray-50 leading-relaxed">
              Dimteam is the connected workspace where better, faster work happens.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-1/2 flex items-center justify-center px-8">
          <div className="text-center max-w-lg">
            <Image 
              src="/text-logo.webp" 
              alt="Dimteam Logo" 
              width={200} 
              height={200} 
              className="mx-auto"
            />
            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              <span>Together.</span>
            </h2> */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              Write, plan, share, and organize everything you need in one tool.
            </p>
            
            <div className="flex flex-col gap-4 items-center">
              <Button 
                size="lg" 
                className="bg-gray-800 text-gray-50 px-8 py-4 text-lg font-medium rounded-lg cursor-pointer shadow-[0_4px_0_0_#000]"
              >
                Get Started
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="text-text-muted hover:text-foreground px-8 py-4 text-lg border border-border"
              >
                Request a demo
              </Button>
              
              <p className="text-sm text-text-muted pt-2">
                Free for personal use. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;