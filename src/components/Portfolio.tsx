import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Zap,
  Package,
  MessageSquare,
  HeartPulse,
  ShoppingCart,
  Activity
} from 'lucide-react';

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Package,
      title: 'Implemented 5+ major modules',
      description: 'Complete ERP deployment across core business functions',
    },
    {
      icon: Zap,
      title: 'Automated manufacturing stock entries',
      description: 'Streamlined inventory management workflows',
    },
    {
      icon: TrendingUp,
      title: 'Reduced manual posting errors by over 60%',
      description: 'Significant improvement in data accuracy',
    },
    {
      icon: CheckCircle2,
      title: 'Custom scripts for Sales Orders, Delivery Notes, Manufacturing workflows',
      description: 'Tailored automation for business processes',
    },
    {
      icon: Zap,
      title: 'Optimized stock reposting handling thousands of daily entries',
      description: 'Enhanced system performance and reliability',
    },
    {
      icon: MessageSquare,
      title: 'Built WhatsApp & SMS notification systems',
      description: 'Real-time communication and alerts',
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-slate-900 dark:text-white mb-4">
            Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Delivering transformative digital solutions across healthcare, manufacturing, retail, and enterprise operations.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 1: LORD’S MINT TECH (MANUFACTURING ERP) */}
        {/* ------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-1">
            <div className="bg-white dark:bg-slate-900 rounded-[22px] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                    Client Success Story
                  </div>
                  <h3 className="text-slate-900 dark:text-white mb-4">
                    Lord's Mint Tech Nig Ltd – Full ERPNext Deployment
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Comprehensive ERP implementation for a large-scale manufacturing company,
                    delivering measurable operational efficiency improvements through custom workflow automation,
                    optimized stock handling, and performance enhancements for high-volume operations.
                  </p>

                  {/* METRICS */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                      <div className="text-indigo-600 dark:text-indigo-400 mb-1">60%+</div>
                      <div className="text-slate-600 dark:text-slate-400">Reduction in Manual Errors</div>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                      <div className="text-purple-600 dark:text-purple-400 mb-1">5000+</div>
                      <div className="text-slate-600 dark:text-slate-400">Daily Stock Entries Optimized</div>
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {['ERPNext', 'Python', 'Manufacturing', 'Automation', 'Integration'].map((tag, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDE: Achievements */}
                <div>
                  <h4 className="text-slate-900 dark:text-white mb-6">Key Achievements</h4>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-300"
                      >
                        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0">
                          <achievement.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-slate-900 dark:text-white mb-1">{achievement.title}</div>
                          <div className="text-slate-600 dark:text-slate-400">{achievement.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM HIGHLIGHT */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-900 dark:text-white mb-1">
                      Delivered measurable operational efficiency improvements
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Including optimized network routing to reduce Starlink data consumption
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 2: SODIPO MEDICAL CENTER (HEALTHCARE EMR) */}
        {/* ------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-1">
            <div className="bg-white dark:bg-slate-900 rounded-[22px] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                    Healthcare Digitalization
                  </div>
                  <h3 className="text-slate-900 dark:text-white mb-4">
                    Sodipo Medical Center – Electronic Medical Records (EMR) Integration
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Implemented a fully digital EMR system enabling seamless patient record management,
                    appointment scheduling, diagnostics tracking, billing, and healthcare workflow optimization.
                    Enhanced operational transparency, reduced waiting times, and improved medical data accuracy.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                      <div className="text-green-600 dark:text-green-400 mb-1">100%</div>
                      <div className="text-slate-600 dark:text-slate-400">Digital Patient Records</div>
                    </div>
                    <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                      <div className="text-teal-600 dark:text-teal-400 mb-1">Real-Time</div>
                      <div className="text-slate-600 dark:text-slate-400">Clinical Updates</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Healthcare', 'EMR', 'ERPNext', 'Billing', 'Patient Records'].map((tag, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h4 className="text-slate-900 dark:text-white mb-6">Highlights</h4>
                  <div className="space-y-4">
                    {[
                      {
                        icon: HeartPulse,
                        title: 'End-to-End EMR System',
                        description: 'Patient records, clinical notes, prescriptions, billing and scheduling.'
                      },
                      {
                        icon: Activity,
                        title: 'Reduced Waiting Times',
                        description: 'Improved internal coordination across departments.'
                      },
                      {
                        icon: MessageSquare,
                        title: 'Real-time Medical Updates',
                        description: 'Instant record updates for doctors and departments.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700 transition-colors duration-300"
                      >
                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4 flex-shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-slate-900 dark:text-white mb-1">{item.title}</div>
                          <div className="text-slate-600 dark:text-slate-400">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* PROJECT 3: MAADE FARMS (POS IMPLEMENTATION) */}
        {/* ------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-1">
            <div className="bg-white dark:bg-slate-900 rounded-[22px] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">

                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4">
                    Retail & Inventory Automation
                  </div>

                  <h3 className="text-slate-900 dark:text-white mb-4">
                    Maade Farms – POS Deployment & Inventory Synchronization
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Implemented a modern POS system integrated with ERPNext for real-time inventory updates,
                    sales posting, and expense tracking. Eliminated manual stock posting errors and improved
                    operational visibility across retail activities.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
                      <div className="text-orange-600 dark:text-orange-400 mb-1">100%</div>
                      <div className="text-slate-600 dark:text-slate-400">POS Sync Accuracy</div>
                    </div>
                    <div className="p-4 rounded-xl bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800">
                      <div className="text-pink-600 dark:text-pink-400 mb-1">Instant</div>
                      <div className="text-slate-600 dark:text-slate-400">Stock Reflection</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['POS', 'Retail', 'Inventory', 'ERPNext', 'Real-time Sync'].map((tag, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-900 dark:text-white mb-6">Highlights</h4>
                  <div className="space-y-4">
                    {[
                      {
                        icon: ShoppingCart,
                        title: 'POS Deployment & Optimization',
                        description: 'Fast-selling workflow with real-time posting.'
                      },
                      {
                        icon: TrendingUp,
                        title: 'Improved Sales Accuracy',
                        description: 'All POS sales synced automatically to accounting and stock.'
                      },
                      {
                        icon: Zap,
                        title: 'Instant Stock Updates',
                        description: 'No delays, no manual logs, no errors.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-colors duration-300"
                      >
                        <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mr-4 flex-shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-slate-900 dark:text-white mb-1">{item.title}</div>
                          <div className="text-slate-600 dark:text-slate-400">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
