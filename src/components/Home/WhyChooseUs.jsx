import React from "react";
import { Shield, Users, CreditCard, Clock } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  // ফিচার ডেটা
  const features = [
    {
      title: "Verified and Qualified Tutors",
      description:
        "We ensure all educators undergo a strict verification process, focusing on experience and background checks.",
      icon: Shield,
    },
    {
      title: "Role-Based Personalized Dashboard",
      description:
        "Students, Tutors, and Admins each get a tailored dashboard for efficient management and tracking.",
      icon: Users,
    },
    {
      title: "Transparent & Secure Payments",
      description:
        "All financial transactions are handled securely via Stripe, offering full transparency for both parties.",
      icon: CreditCard,
    },
    {
      title: "Flexible Scheduling & Location",
      description:
        "Find tuitions that perfectly fit your schedule, whether online or locally, based on your precise location.",
      icon: Clock,
    },
  ];

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="py-20 bg-gray-50">
      {" "}
      {/* হালকা ধূসর ব্যাকগ্রাউন্ড */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Experience the difference with a system built for trust, efficiency,
            and growth.
          </p>
        </motion.div>

        {/* 4-Feature Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary/70 text-center transition duration-500 hover:shadow-2xl hover:border-b-secondary"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
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
