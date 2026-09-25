'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Line = ({ children }: { children: ReactNode }) => <p>{children}</p>;

const Key = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground/90">{children}</span>
);
const Punc = ({ children }: { children: ReactNode }) => (
  <span className="text-muted-foreground/60">{children}</span>
);
const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-primary/75">{children}</span>
);

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
            <span className="opacity-50">02 ·</span> $ cat ./developer.ts
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            The <span className="text-luxe italic pr-1">Source</span> Behind the Work
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-[1fr,1.4fr]">
          {/* ── Profile photo window ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="os-window glow-gold h-full">
              <div className="os-window-bar">
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                  profile-photo.jpg — preview
                </span>
              </div>
              <div className="relative aspect-[4/5] scanlines">
                <Image
                  src="/profile.jpg"
                  alt="Tsedey Solomon"
                  fill
                  className="object-cover saturate-[0.85] transition-all duration-700 hover:saturate-100"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-background/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                  <span>RGB · 4:5</span>
                  <span className="text-primary">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── developer.ts window ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="os-window h-full">
              <div className="os-window-bar">
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                  developer.ts
                </span>
                <span className="ml-auto font-mono text-[10px] text-primary/60">● saved</span>
              </div>

              <div className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.9] md:text-sm">
                <Line>
                  <span className="text-muted-foreground/50 italic">
                    {'/** '}I&apos;m a full-stack developer building scalable web products, enterprise systems and
                    customer-facing applications.{' */'}
                  </span>
                </Line>

                <p className="mt-2">
                  <span className="text-primary/90 italic">const</span>{' '}
                  <Key>tsedey</Key>
                  <Punc>:</Punc> <span className="text-luxe">Developer</span> <Punc>= {'{'}</Punc>
                </p>

                <div className="pl-5">
                  <Line>
                    <Key>name</Key>
                    <Punc>:</Punc> <Str>&quot;Tsedey Solomon&quot;</Str>
                    <Punc>,</Punc>
                  </Line>
                  <Line>
                    <Key>base</Key>
                    <Punc>:</Punc> <Str>&quot;Addis Ababa, Ethiopia&quot;</Str>
                    <Punc>,</Punc>
                  </Line>
                  <Line>
                    <Key>focus</Key>
                    <Punc>: [</Punc>
                    <Str>&quot;clean architecture&quot;</Str>
                    <Punc>, </Punc>
                    <Str>&quot;delivery speed&quot;</Str>
                    <Punc>, </Punc>
                    <Str>&quot;business impact&quot;</Str>
                    <Punc>],</Punc>
                  </Line>
                  <Line>
                    <Key>experience</Key>
                    <Punc>: {'{'}</Punc>
                  </Line>
                  <div className="pl-5">
                    <Line>
                      <Key>enterprise</Key>
                      <Punc>:</Punc> <Str>&quot;ERP, billing &amp; trainer pooling systems&quot;</Str>
                      <Punc>,</Punc>
                    </Line>
                    <Line>
                      <Key>platforms</Key>
                      <Punc>:</Punc> <Str>&quot;e-ticketing, e-commerce &amp; inventory&quot;</Str>
                      <Punc>,</Punc>
                    </Line>
                    <Line>
                      <Key>mobile</Key>
                      <Punc>:</Punc> <Str>&quot;React Native apps &amp; embedded IoT&quot;</Str>
                      <Punc>,</Punc>
                    </Line>
                  </div>
                  <Line>
                    <Punc>{'}'},</Punc>
                  </Line>
                  <Line>
                    <Key>available</Key>
                    <Punc>:</Punc> <span className="text-primary">true</span>
                    <Punc>,</Punc>
                  </Line>
                </div>

                <Line>
                  <Punc>{'}'}</Punc>
                </Line>

                <div className="mt-5 border-t border-border/60 pt-4">
                  <Line>
                    <span className="text-primary/90 italic">export const</span> <Key>years_experience</Key>{' '}
                    <Punc>=</Punc> <span className="text-luxe text-base">2+</span>
                  </Line>
                  <Line>
                    <span className="text-primary/90 italic">export const</span> <Key>projects_shipped</Key>{' '}
                    <Punc>=</Punc> <span className="text-luxe text-base">7+</span>
                  </Line>
                  <Line>
                    <span className="text-primary/90 italic">export const</span> <Key>companies_served</Key>{' '}
                    <Punc>=</Punc> <span className="text-luxe text-base">3+</span>
                  </Line>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
