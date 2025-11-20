import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FileText, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="case-studies" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
            <FileText className="w-4 h-4 mr-2" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-slate-900 dark:text-white mb-4">
            Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </motion.div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-8 md:p-12 text-white">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                Manufacturing Excellence
              </div>
              <h3 className="mb-4">
                Manufacturing Stock Optimization
              </h3>
              <p className="text-white/90 max-w-3xl">
                Transforming a high-volume manufacturing operation through intelligent automation and performance optimization
              </p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-slate-900 dark:text-white">Problem</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    High volume of stock entries (5,000+ daily) causing system delays and errors.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Performance bottlenecks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Manual posting errors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>System delays</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h4 className="text-slate-900 dark:text-white">Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Custom automation workflow',
                      'Server-side scripting and performance tuning',
                      'Material consumption enhancements',
                      'Manufacturing configuration improvements',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="text-slate-900 dark:text-white">Result</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Posting Time', value: 'Significantly reduced' },
                      { label: 'Accuracy', value: 'Improved' },
                      { label: 'Bottlenecks', value: 'Eliminated' },
                      { label: 'Operations', value: 'Smoother' },
                    ].map((metric, index) => (
                      <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800">
                        <div className="text-green-600 dark:text-green-400 mb-1">
                          {metric.label}
                        </div>
                        <div className="text-slate-900 dark:text-white">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="text-slate-900 dark:text-white mb-2">
                      Ready to optimize your operations?
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Let's discuss how we can transform your business
                    </div>
                  </div>
                  <a
                    href="https://wa.me/2348069468072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
                  >
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
