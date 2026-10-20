"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./Container";
import Section from "./Section";

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  badges?: string[];
  children?: ReactNode;
}

export default function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
  badges = [],
  children,
}: PageHeroProps) {
  return (
    <Section
      background="gradient"
      spacing="xl"
      className="overflow-hidden"
    >
      <Container size="xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {badge && (
              <span className="inline-flex rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-[#176C73]">
                {badge}
              </span>
            )}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              {title}
            </h1>

            <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#2BA9B5] to-[#176C73]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              {description}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="mt-10 flex flex-wrap gap-4">

                {primaryButton && (
                  <Link
                    href={primaryButton.href}
                    className="rounded-xl bg-[#176C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#145d63]"
                  >
                    {primaryButton.label}
                  </Link>
                )}

                {secondaryButton && (
                  <Link
                    href={secondaryButton.href}
                    className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2BA9B5] hover:text-[#176C73]"
                  >
                    {secondaryButton.label}
                  </Link>
                )}

              </div>
            )}

            {badges.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3">
                {badges.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {children}
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.8,
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[520px] w-[520px] rounded-full bg-teal-200/30 blur-3xl" />

            <Image
              src={image}
              alt={imageAlt}
              width={700}
              height={700}
              priority
              className="relative z-10 h-auto w-full max-w-[620px]"
            />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}