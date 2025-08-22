"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp 
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Star, number: "4.8", label: "Rating" },
    { icon: TrendingUp, number: "10M+", label: "Users" },
    { icon: CheckCircle, number: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-1/2 bg-white"></div>
        <div className="absolute inset-0 left-1/2 w-1/2 bg-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex min-h-[600px]">
          {/* Left Side - White Background */}
          <div className="w-1/2 flex items-center justify-center pr-12">
            <div className="max-w-lg">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why you need <span className="text-yellow-300">DimTeam</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                From dreams to reality, millions of people rely on DimTeam to organize their work, collaborate effectively, and achieve their goals.
              </motion.p>

              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  "Replaces multiple tools with one workspace",
                  "Scales with your team as you grow",
                  "Trusted by leading companies worldwide"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-800 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="bg-gray-800 cursor-pointer text-gray-50 shadow-[0_4px_0_0_#000000]">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Black Background */}
          <div className="w-1/2 flex items-center justify-center pl-12">
            <div className="max-w-lg text-center">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-12"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Trusted by millions
              </motion.h3>

              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-3 flex justify-center">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 text-lg">
                  Join the community of people building the future with DimTeam.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;