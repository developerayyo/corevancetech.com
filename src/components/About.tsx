import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Code, Database, Network } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { icon: Database, label: 'ERPNext & Frappe', color: 'bg-blue-500' },
    { icon: Code, label: 'Python & JavaScript', color: 'bg-indigo-500' },
    { icon: Database, label: 'SQL & Databases', color: 'bg-purple-500' },
    { icon: Network, label: 'Servers & Networking', color: 'bg-cyan-500' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
            <Award className="w-4 h-4 mr-2" />
            <span>About CorevanceTech</span>
          </div>
          <h2 className="text-slate-900 dark:text-white mb-4">
            About CorevanceTech
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300">
                CorevanceTech is led by Babalola Peter, an ERP Consultant and Software Engineer with extensive experience deploying, customizing, and optimizing ERP systems for large-scale operations. I help businesses eliminate manual processes, automate workflows, and improve accuracy across inventory, sales, accounting, and manufacturing.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                With strong skills in Python, JavaScript, SQL, servers, and networking, I deliver complete digital transformation for Nigerian companies seeking efficiency and competitive advantage.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-slate-900 dark:text-white mb-6">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Glass morphism card */}
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-8 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                    <Award className="w-12 h-12" />
                  </div>
                  <div>
                    <div className="mb-2">Babalola Peter</div>
                    <div className="text-white/90">
                      ERPNext Consultant & Software Engineer
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="text-white/90 mb-1">Experience</div>
                      <div>Extensive</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="text-white/90 mb-1">Focus</div>
                      <div>Digital Transformation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
