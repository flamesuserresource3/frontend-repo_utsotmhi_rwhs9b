import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const AwardsContact = () => {
  const awards = [
    'Google Ads Certified (Search, Video, Measurement)',
    'Meta Media Buying Professional',
    'HubSpot Marketing Automation',
    'Microsoft Power BI Analyst',
    'Looker Studio Advanced'
  ];

  return (
    <section id="contact" className="relative w-full bg-neutral-980 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold tracking-tight"
            >
              Awards & Certifications
            </motion.h2>
            <ul className="mt-6 grid gap-3">
              {awards.map((a) => (
                <motion.li
                  key={a}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  {a}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold tracking-tight"
            >
              Let’s Build Data-Driven Growth
            </motion.h3>
            <p className="mt-3 max-w-xl text-white/70">
              Interested in accelerating performance with AI, analytics, and full-funnel strategy? Let’s connect.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:allan.sumagui@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" /> Email Allan
              </a>
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsContact;
