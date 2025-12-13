import React from "react";
import { Book, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Post or Search",
      description:
        "Students post their tuition requirements, while tutors browse available jobs based on location and subject.",
      icon: Book,
    },
    {
      title: "Apply and Match",
      description:
        "Tutors submit applications to suitable posts. Students review applications and approve the best fit.",
      icon: Users,
    },
    {
      title: "Secure Payment & Start",
      description:
        "Once approved, the student makes a secure payment via Stripe, and the tuition officially begins.",
      icon: DollarSign,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A clear step-by-step guide to connecting students with verified tutors.
          </p>
        </motion.div>

        {/* Grid Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/30 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Circle icon */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white my-8 shadow-lg">
                  <Icon className="w-10 h-10" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
