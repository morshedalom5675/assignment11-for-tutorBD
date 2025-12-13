import React from "react";
import { Award, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Feature cards data
  const featureCards = [
    {
      icon: Award,
      title: "Verified Tutors",
      description:
        "Only qualified and background-checked educators are onboarded.",
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description:
        "Post your tuition and get applications instantly from relevant tutors.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description:
        "Transparent and secure payment workflow via Stripe integration.",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/Rk0fsx23/hero-banner.avif")',
        }}
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="px-25 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-14"
        >
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-secondary font-semibold text-lg mb-3 uppercase tracking-wider"
            >
              Your Learning Partner
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-800 leading-tight mb-6"
            >
              The <span className="text-primary">Easiest Way</span> to Find{" "}
              <br />
              Verified Tutors
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Connect with thousands of verified tutors and students in one
              integrated platform. Your next tuition opportunity is just a click
              away.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition">
                Find Tutors
              </button>

              <button className="btn btn-outline btn-lg border-gray-400 text-gray-700 hover:bg-gray-100 transition">
                Post Tuition
              </button>
            </motion.div>
          </div>

          {/* Right Feature Cards */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {featureCards.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/90 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-9 h-9 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
