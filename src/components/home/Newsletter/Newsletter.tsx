"use client";

import { motion } from "motion/react";
import { FaEnvelope } from "react-icons/fa6";
import { AppDownloadCard } from "./AppDownloadCard";
import { NewsletterForm } from "./NewsletterForm";
import { NewsletterPerks } from "./NewsletterPerks";

export const Newsletter = () => (
  <section className="bg-linear-to-b from-white to-gray-50 py-16">
    <div className="container mx-auto">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-emerald-100/50 bg-linear-to-br from-emerald-50 via-white to-teal-50 shadow-2xl shadow-emerald-500/10"
        >
          {/* Background blobs */}
          <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 -translate-y-1/2 translate-x-1/4 rounded-full bg-linear-to-br from-emerald-200/40 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/2 rounded-full bg-linear-to-tr from-teal-200/30 to-transparent blur-3xl" />

          <div className="relative grid gap-8 p-8 lg:grid-cols-5 lg:p-14">
            {/* Left: signup */}
            <div className="space-y-6 lg:col-span-3">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
                    Newsletter
                  </h3>
                  <p className="text-xs text-gray-500">50,000+ subscribers</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl leading-snug font-bold text-gray-900 lg:text-4xl">
                  Get the Freshest Updates{" "}
                  <span className="text-emerald-600"> Delivered Free</span>
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  Weekly recipes, seasonal offers &amp; exclusive member perks.
                </p>
              </div>

              <NewsletterPerks />
              <NewsletterForm />
            </div>

            {/* Right: app card */}
            <AppDownloadCard />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
