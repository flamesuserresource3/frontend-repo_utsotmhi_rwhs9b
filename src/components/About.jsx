import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-white/70"
        >
          Senior digital marketing and data analytics leader specializing in paid media, CRM, and automation. I build AI-assisted growth systems that connect strategy, measurement, and activation across the full funnel. From audience design to creative testing and analytics engineering, I help brands scale efficiently using a rigorous, data-driven approach.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Strategy',
              items: ['Full-funnel planning', 'Experimentation frameworks', 'Attribution & MMM', 'Budget pacing']
            },
            {
              title: 'Analytics',
              items: ['Marketing mix & incrementality', 'Looker Studio & Power BI', 'SQL, Python, dbt', 'Warehouse modeling']
            },
            {
              title: 'AI & Automation',
              items: ['Predictive audiences', 'Bidding & creative optimization', 'LLM content ops', 'Lifecycle automation']
            },
            {
              title: 'Channels',
              items: ['Google, Meta, LinkedIn', 'Programmatic & YouTube', 'Email/SMS & CRM', 'Affiliate & Partnerships']
            }
          ].map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <h3 className="text-lg font-medium text-white">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {group.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-fuchsia-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
