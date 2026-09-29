'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** Short, positive, dev-flavoured quotes. Keep them one-liners. */
const quotes = [
  { text: 'Clean code always looks like it was written by someone who cares.', author: 'Robert C. Martin' },
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Any fool can write code a computer understands. Good developers write code humans understand.', author: 'Martin Fowler' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'Simplicity is the prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
  { text: 'Programs must be written for people to read.', author: 'Harold Abelson' },
  { text: 'Weeks of coding can save you hours of planning.', author: 'Unknown Developer' },
  { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
  { text: 'Shipping beats perfection. Ship, learn, improve.', author: 'Unknown Developer' },
  { text: 'Debugging is like being a detective in a world where everyone is lying.', author: 'Unknown Developer' },
  { text: 'The only way to learn a new language is by writing programs in it.', author: 'Dennis Ritchie' },
  { text: 'Code is like humour. When you have to explain it, it is bad.', author: 'Cory House' },
  { text: 'There are only two hard things in computer science: cache invalidation and naming things.', author: 'Phil Karlton' },
  { text: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde' },
];

const ROTATE_MS = 7000;

const QuoteBanner = () => {
  // Start at 0 so server and client markup match, then randomise after mount.
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        if (quotes.length < 2) return prev;
        let next = prev;
        while (next === prev) next = Math.floor(Math.random() * quotes.length);
        return next;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const quote = quotes[index];

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="os-window glow-gold"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Window chrome */}
            <div className="os-window-bar">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                $ fortune ~/quotes
              </span>
              <span className="ml-auto font-mono text-[10px] text-primary/70">
                {String(index + 1).padStart(2, '0')}/{quotes.length}
              </span>
            </div>

            {/* Quote body — fixed height so the card never jumps on rotate */}
            <div className="flex min-h-[170px] flex-col items-center justify-center px-6 py-8 text-center md:min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="max-w-2xl"
                >
                  <span className="font-display text-3xl leading-tight text-primary/40 md:text-4xl">
                    &ldquo;
                  </span>
                  <span className="font-display text-xl italic leading-snug tracking-tight text-foreground md:text-2xl">
                    {quote.text}
                  </span>
                  <span className="font-display text-3xl leading-tight text-primary/40 md:text-4xl">
                    &rdquo;
                  </span>

                  <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    — {quote.author}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Rotation indicator */}
            <div className="flex items-center justify-between border-t border-border/60 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>{paused ? 'paused' : 'auto-rotate'}</span>
              <span className="flex items-center gap-1.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      i === index % 3 ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
