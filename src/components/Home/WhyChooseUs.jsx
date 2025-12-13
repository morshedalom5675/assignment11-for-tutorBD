import React from "react";
import { Award, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
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
    {
      icon: Award,
      title: "Flexible Schedule",
      description: "Choose time slots that work best for you and your tutor.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800 mb-8"
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
              >
                <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
