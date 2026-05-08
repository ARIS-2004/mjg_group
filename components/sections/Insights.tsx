"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { fadeUp, fadeUpSlow, stagger } from "@/lib/motion";

const categories = [
  "All Insights",
  "Facility Management",
  "Workplace Solutions",
  "Technology",
  "Company Updates",
];

const articles = [
  {
    tag: "Housekeeping",
    title: "Is residential housekeeping the new commercial cleaning?",
    excerpt:
      "The pandemic has brought a strange dichotomy; the intensity and thoroughness of cleaning has been increased across the board…",
    author: "Clean India Journal",
    date: "May 12, 2022",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Trends",
    title: "4 facilities management trends for 2026 that you should know",
    excerpt:
      "Which trends will shake the world of facilities management this year? Our team of FM experts shares them below.",
    author: "JLL Technologies",
    date: "Apr 28, 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Digital Transformation",
    title: "Transforming facilities management digitally",
    excerpt:
      "The digitisation of the world is happening rapidly — disrupting some sectors while improving others. FM is no exception.",
    author: "Colliers",
    date: "Apr 15, 2026",
    read: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Insights() {
  const [active, setActive] = useState("All Insights");

  return (
    <section id="insights" className="relative py-4 sm:py-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-white" />
      <div className="glow-blob top-10 -left-20 h-72 w-72 bg-accent-500/8" />
      <div className="glow-blob bottom-20 right-10 h-64 w-64 bg-brand-500/8" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
              News &amp; Insights
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUpSlow}
            className="display-h mt-4 text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.06]"
          >
            Stay updated.{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Stay ahead
            </span>
            <span className="text-accent-500">.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-brand-900/60"
          >
            Industry trends, expert perspectives, and company updates to keep
            you informed and inspired.
          </motion.p>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                  active === c
                    ? "border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                    : "border-brand-100 bg-white text-brand-900/70 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-700 transition-colors hover:text-accent-500"
          >
            View All Insights <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-brand-100/80 bg-white shadow-[0_8px_30px_-12px_rgba(11,31,77,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(11,31,77,0.25)]"
            >
              {/* Gradient overlay on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 via-transparent to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]" />

              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-700 backdrop-blur-md shadow-lg">
                  {a.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2.5 text-[11px] text-brand-900/50">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {a.date}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-brand-200" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {a.read}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-[18px] font-bold text-brand-900 leading-snug transition-colors group-hover:text-brand-700">
                  {a.title}
                </h3>

                <p className="mt-2.5 text-[13px] leading-relaxed text-brand-900/60 line-clamp-3">
                  {a.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-[10px] font-bold text-white shadow-md">
                      {a.author
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="text-[11px] text-brand-900/50">By</p>
                      <p className="text-[12px] font-semibold text-brand-900/80">
                        {a.author}
                      </p>
                    </div>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-700 transition-all duration-300 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-500/25">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-200 bg-white px-6 py-3 text-[14px] font-semibold text-brand-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
          >
            Explore All Articles{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
