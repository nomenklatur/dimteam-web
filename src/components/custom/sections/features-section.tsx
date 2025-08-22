"use client";
import { motion } from "framer-motion";
import { 
  Database, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "All-in-one workspace",
      description: "Write, plan, share, and organize everything you need in one tool."
    },
    {
      icon: Users,
      title: "Team collaboration",
      description: "Work together seamlessly with real-time collaboration features."
    },
    {
      icon: Zap,
      title: "Lightning fast",
      description: "Built for speed with instant loading and smooth interactions."
    },
    {
      icon: Shield,
      title: "Secure by design",
      description: "Your data is protected with enterprise-grade security."
    },
    {
      icon: Globe,
      title: "Access anywhere",
      description: "Available on web, desktop, and mobile platforms."
    },
    {
      icon: Smartphone,
      title: "Mobile ready",
      description: "Full functionality on any device, anywhere you go."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-text-hero mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Everything you need to <span className="text-yellow-300">get work done</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Powerful features designed to help you and your team work better together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-lg bg-surface-elevated border border-gray-800 hover:shadow-[0_4px_0_0_#000000] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <feature.icon className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-text-hero mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;