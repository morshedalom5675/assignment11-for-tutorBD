import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  ShieldCheck,
  Award,
  Rocket,
  Heart,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <div className="relative bg-primary/5 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Revolutionizing <span className="text-primary">Education</span>{" "}
            <br />
            Connections in Bangladesh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            eTuitionBd is the most trusted digital platform connecting thousands
            of passionate educators with students. We simplify the search for
            knowledge through transparency and technology.
          </motion.p>
        </div>
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* --- Mission Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full font-bold text-xs uppercase tracking-widest">
            <Target size={16} /> Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
            Bridging the Gap Between <br />
            <span className="text-primary">Ambition & Excellence.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to decentralize the tuition industry in Bangladesh.
            We aim to eliminate middlemen and provide a secure, automated, and
            direct channel where parents can find verified tutors and educators
            can find their ideal teaching opportunities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "100% Verified Tutors",
              "Direct Communication",
              "Secure Payment Tracking",
              "Real-time Support",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-800 font-semibold"
              >
                <CheckCircle2 className="text-primary" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
            alt="Learning Community"
            className="rounded-[2.5rem] shadow-2xl border-8 border-white"
          />
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Users size={32} />
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">25,000+</p>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-wider">
                  Active Users
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Core Values --- */}
      <div className="bg-gray-50 py-28 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            We are driven by a commitment to quality, security, and the success
            of every student and teacher on our platform.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: ShieldCheck,
              title: "Trust & Safety",
              desc: "Every profile is manually verified to ensure the highest safety standards for students and parents.",
            },
            {
              icon: Award,
              title: "Quality Education",
              desc: "We prioritize academic excellence by matching students with the most qualified subject experts.",
            },
            {
              icon: Rocket,
              title: "Innovation",
              desc: "Utilizing modern technology to make tuition tracking and financial management seamless.",
            },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12 }}
              className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 group transition-all"
            >
              <div className="w-16 h-16 bg-gray-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <val.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {val.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Why Choose Us Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Why Thousands Choose <br />{" "}
              <span className="text-secondary">eTuitionBd</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Finding a reliable teacher shouldn't be a struggle. We have
              optimized our platform to provide a hassle-free experience for
              both parties involved in the educational journey.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Advanced Filtering
                  </h4>
                  <p className="text-gray-500">
                    Find tutors by subject, class, location, and budget
                    instantly.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Direct Interaction
                  </h4>
                  <p className="text-gray-500">
                    No hidden fees or agents. Chat directly and start learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img
                className="rounded-3xl shadow-lg"
                src="https://i.ibb.co.com/hJQ57Y2w/learning.jpg"
                alt="Learning"
              />
              <div className="bg-secondary p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-2xl font-bold">Secure</h4>
                <p className="text-sm opacity-90 mt-2 font-medium uppercase tracking-wider">
                  Payments Protected
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-2xl font-bold">24/7</h4>
                <p className="text-sm opacity-90 mt-2 font-medium uppercase tracking-wider">
                  Expert Support
                </p>
              </div>
              <img
                className="rounded-3xl shadow-lg"
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
                alt="Tutoring"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="max-w-7xl mx-auto px-4 pb-28">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-900 rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Start Your Learning <br /> Journey Today
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
              Whether you are a student looking for a mentor or a tutor looking
              for opportunities, eTuitionBd is the place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn btn-primary bg-primary border-none hover:bg-primary/90 px-12 h-16 rounded-full font-bold text-lg shadow-lg shadow-primary/20">
                Join as a Tutor
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-12 h-16 rounded-full font-bold text-lg">
                Find a Teacher
              </button>
            </div>
          </div>
          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
