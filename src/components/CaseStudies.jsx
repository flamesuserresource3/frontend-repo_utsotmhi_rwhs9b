import React from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    title: 'B2C Ecommerce Scale-Up',
    metrics: ['+42% ROAS', '-28% CAC', '+3.1x remarketing lift'],
    desc: 'Unified Google, Meta, and YouTube with audience pipelines and creative testing. Automated pacing and alerted variance in BI.',
  },
  {
    title: 'B2B SaaS Pipeline Acceleration',
    metrics: ['+65% SQLs', '-34% CPL', '+18% win rate'],
    desc: 'Orchestrated LinkedIn + Search with Salesforce-connected attribution and lead scoring models for higher close rates.',
  },
  {
    title: 'Marketplace Multi-Geo Expansion',
    metrics: ['+78% revenue', '+22% LTV', '-19% churn'],
    desc: 'Geo-budgeting + incrementality testing. ML bidding and lifecycle automation improved retention and ARPU.',
  },
  {
    title: 'Omnichannel Retailer',
    metrics: ['+31% store visits', '+48% online revenue', 'MMM-informed allocation'],
    desc: 'Full-funnel strategy leveraging YouTube, Performance Max, and CRM audiences with MMM to guide budget shifts.',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative w-full bg-neutral-980 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight"
        >
          Case Studies
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {studies.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-inner backdrop-blur"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/20 blur-2xl transition group-hover:scale-110" />
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.metrics.map((m) => (
                  <span key={m} className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
