import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Settings,
  Code2,
  Factory,
  Server,
  HeadphonesIcon,
  CheckCircle2
} from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Settings,
      title: 'ERP Consulting & Implementation',
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Full ERPNext setup and configuration',
        'Module implementation (Accounts, Inventory, HR & Payroll, Sales, Purchase, Manufacturing, CRM and Others)',
        'Workflow automation',
        'User training & onboarding',
      ],
    },
    {
      icon: Code2,
      title: 'Custom Development (Frappe/ERPNext Apps)',
      color: 'from-indigo-500 to-purple-500',
      items: [
        'Server-side scripts',
        'Client scripts',
        'Custom DocTypes',
        'API integrations',
        'Notification systems (Email, SMS, WhatsApp)',
      ],
    },
    {
      icon: Factory,
      title: 'Manufacturing Automation',
      color: 'from-purple-500 to-pink-500',
      items: [
        'BOM setup',
        'Work Order optimization',
        'Stock Entry automation',
        'Capacity planning',
        'Reduced posting errors',
        'Optimized material consumption',
      ],
    },
    {
      icon: Server,
      title: 'IT Infrastructure Consulting',
      color: 'from-cyan-500 to-blue-500',
      items: [
        'Network design & optimization',
        'Internet traffic management',
        'Server deployment (Linux/Windows)',
        'CCTV, NVR, VLANs & local traffic routing',
      ],
    },
    {
      icon: HeadphonesIcon,
      title: 'Support & Maintenance',
      color: 'from-emerald-500 to-teal-500',
      items: [
        'Monthly retainer',
        '24/7 remote technical support',
        'Performance tuning',
        'System audits & maintenance',
      ],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
            <Settings className="w-4 h-4 mr-2" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-slate-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Enterprise-grade ERP solutions, custom development, healthcare EMR, POS systems, and IT infrastructure services — built for real operational efficiency across businesses in Nigeria and Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Title */}
                <h3 className="text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/2348069468072"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Discuss Your Project</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
