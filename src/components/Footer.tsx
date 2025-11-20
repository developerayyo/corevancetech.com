import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'ERP Consulting',
    'Custom Development',
    'Manufacturing Automation',
    'IT Infrastructure',
    'Support & Maintenance',
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-indigo-400">CorevanceTech</span>
            </div>
            <p className="text-slate-400 mb-6">
              ERPNext Implementation & IT Automation for Growing Businesses
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/2348069468072"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-indigo-600 text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:ayodelebabalola1004@gmail.com"
                className="p-3 rounded-lg bg-slate-800 hover:bg-indigo-600 text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+2348069468072"
                className="p-3 rounded-lg bg-slate-800 hover:bg-indigo-600 text-white transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+2348069468072" className="text-slate-400 hover:text-indigo-400 transition-colors duration-200">
                  +234 806 946 8072
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:ayodelebabalola1004@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 break-all">
                  ayodelebabalola1004@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MessageCircle className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/2348069468072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400">
              © {currentYear} CorevanceTech. All rights reserved.
            </p>
            <p className="text-slate-400">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
