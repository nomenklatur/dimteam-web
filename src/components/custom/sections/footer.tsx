"use client";
import { motion } from "framer-motion";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Youtube, 
  Mail,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Features",
        "Templates", 
        "Pricing",
        "What's New",
        "Mobile"
      ]
    },
    {
      title: "Resources",
      links: [
        "Help & Support",
        "Documentation", 
        "Community",
        "Blog",
        "Guides"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Privacy",
        "Terms"
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Mail, href: "#" }
  ];

  return (
    <footer className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Newsletter Section */}
        <motion.div 
          className="text-center mb-16 pb-16 border-b border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the loop
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest updates, tips, and insights delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 place-self-center">
              Subscribe <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">DimTeam</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The all-in-one workspace for your web development team. Collaborate, plan, tasks, wikis, and databases.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dimaseka.dev All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;