import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  FileText,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Barcode,
  Fingerprint,
  UtensilsCrossed,
  HeartPulse,
  Factory
} from 'lucide-react';

function CaseStudyCard({
  badge,
  title,
  description,
  gradient,
  problem,
  solution,
  results
}) {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700">

        {/* HEADER */}
        <div className={`${gradient} p-8 md:p-12 text-white`}>
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
            {badge}
          </div>
          <h3 className="mb-4">{title}</h3>
          <p className="text-white/90 max-w-3xl">{description}</p>
        </div>

        {/* CONTENT BLOCK */}
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">

            {/* PROBLEM */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 dark:text-white">Problem</h4>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {problem.map((p, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOLUTION */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 dark:text-white">Solution</h4>
              </div>

              <ul className="space-y-3">
                {solution.map((item, index) => (
                  <li key={index} className="flex items-start p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESULTS */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 dark:text-white">Result</h4>
              </div>

              <div className="space-y-3">
                {results.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800"
                  >
                    <div className="text-green-600 dark:text-green-400 mb-1">{metric.label}</div>
                    <div className="text-slate-900 dark:text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="case-studies" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
            <FileText className="w-4 h-4 mr-2" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-slate-900 dark:text-white mb-4">Case Studies</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </motion.div>

        {/* CASE STUDIES WITH SPACING */}
        <div className="space-y-24">

          {/* 1. BARCODE PRODUCTION AUTOMATION */}
          <CaseStudyCard
            badge="Barcode Production Automation"
            title="Plain Rolls Store & Multilayer Production – Batch Scanning Automation"
            description="Implemented barcode-based material tracking and batch scanning to eliminate discrepancies and ensure 100% traceability across production."
            gradient="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500"
            problem={[
              "Manual tracking of rolls caused discrepancies",
              "Difficulty verifying roll batch source",
              "No real-time traceability",
              "Wrong materials used in production"
            ]}
            solution={[
              "Barcode generation for plain rolls & multilayer rolls",
              "Batch scanning on production floor",
              "Automated stock posting based on scanned rolls",
              "Batch-linked Delivery Notes"
            ]}
            results={[
              { label: "Traceability", value: "100% batch-level traceability" },
              { label: "Production Accuracy", value: "85% reduction in production errors" },
              { label: "Material Integrity", value: "Eliminated wrong batch usage" }
            ]}
          />

          {/* 2. PAYROLL + MEAL TICKET AUTOMATION */}
          <CaseStudyCard
            badge="Payroll & Ticket Automation"
            title="Automated Payroll Processing & Meal Ticket System"
            description="Fully automated payroll cycle connected to attendance, and introduced a fraud-proof digital meal ticket system."
            gradient="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500"
            problem={[
              "Manual salary calculations",
              "Meal ticket fraud and misuse",
              "Attendance not linked to payroll"
            ]}
            solution={[
              "Automated salary rules & components",
              "Digital meal ticket issuance per shift",
              "Real-time attendance-to-payroll linkage",
              "Department-based meal eligibility validation"
            ]}
            results={[
              { label: "Payroll Errors", value: "Eliminated miscalculations" },
              { label: "Meal Ticket Control", value: "100% automated & auditable" },
              { label: "Fraud Reduction", value: "Significant reduction in abuse" }
            ]}
          />

          {/* 3. BIOMETRIC INTEGRATION */}
          <CaseStudyCard
            badge="Biometric Verification"
            title="Fingerprint Attendance Integration & Shift Verification"
            description="Built biometric verification workflows that eliminated proxy attendance and improved payroll accuracy."
            gradient="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
            problem={[
              "Inaccurate attendance logs",
              "Proxy attendance by staff",
              "Shift mismatch and attendance disputes"
            ]}
            solution={[
              "Biometric device integration with ERPNext",
              "Shift-based attendance validation logic",
              "Daily sync + real-time attendance dashboard",
              "Fingerprint-driven overtime approval"
            ]}
            results={[
              { label: "Attendance Accuracy", value: "99% accuracy achieved" },
              { label: "Proxy Attendance", value: "Fully eliminated" },
              { label: "Payroll Confidence", value: "Data-driven salary processing" }
            ]}
          />
          {/* 4. EMR IMPLEMENTATION */}
          <CaseStudyCard
            badge="Healthcare EMR"
            title="Sodipo Medical Center – Electronic Medical Records Implementation"
            description="Digitized patient records, billing, appointments, clinical notes, and pharmacy workflows using ERPNext Healthcare EMR."
            gradient="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600"
            problem={[
              "Paper-based record keeping",
              "Frequent loss of patient files",
              "Slow billing & appointment confusion"
            ]}
            solution={[
              "Digitized patient records end-to-end",
              "Realtime clinical updates & prescriptions",
              "Integrated billing + consultation + pharmacy",
              "Doctor-to-department workflow optimization"
            ]}
            results={[
              { label: "Record Accuracy", value: "100% digital, no missing files" },
              { label: "Waiting Time", value: "Reduced dramatically" },
              { label: "Operational Transparency", value: "Full visibility of medical workflows" }
            ]}
          />

          {/* 5. STOCK LEDGER PERFORMANCE */}
          <CaseStudyCard
            badge="Manufacturing Optimization"
            title="Manufacturing Stock Ledger Optimization & High-Volume Performance Improvements"
            description="Optimized stock ledger operations handling over 5,000 daily stock entries, eliminating delays and improving accuracy."
            gradient="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
            problem={[
              "System delays due to extremely high stock volume",
              "Frequent posting errors",
              "Slow stock reposting jobs",
              "Server struggling with simultaneous submissions"
            ]}
            solution={[
              "Optimized posting logic & background jobs",
              "Custom automated material consumption process",
              "High-performance manufacturing workflow adjustments",
              "Database-level tuning & improved indexes"
            ]}
            results={[
              { label: "Posting Speed", value: "Significantly improved" },
              { label: "Operational Efficiency", value: "Smooth 24/7 workflow" },
              { label: "Error Reduction", value: "65% fewer ledger errors" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
