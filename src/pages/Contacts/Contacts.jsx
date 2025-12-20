import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ফর্ম সাবমিট লজিক এখানে যুক্ত করা যাবে
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- Header Section --- */}
      <div className="bg-primary py-20 text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4"
        >
          Get In Touch
        </motion.h1>
        <p className="text-primary-content/80 max-w-2xl mx-auto text-lg">
          Have questions or need assistance? Our team is here to help you with
          any inquiries regarding our tuition platform.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Contact Info Cards --- */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone Support</h4>
                  <p className="text-gray-500">+880 1234-567890</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Us</h4>
                  <p className="text-gray-500">support@etuitionbd.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-2xl text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Office Address</h4>
                  <p className="text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.div>

            <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Clock size={20} className="text-primary" /> Support Hours
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex justify-between">
                  <span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span> <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>{" "}
                  <span className="text-primary">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* --- Contact Form Section --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <h2 className="text-3xl font-black text-gray-800 mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                  <label className="label font-bold text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered w-full bg-gray-50 focus:outline-primary border-none h-14"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label font-bold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="input input-bordered w-full bg-gray-50 focus:outline-primary border-none h-14"
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label font-bold text-gray-700">Subject</label>
                <select className="select select-bordered w-full bg-gray-50 focus:outline-primary border-none h-14">
                  <option disabled selected>
                    How can we help you?
                  </option>
                  <option>Tutor Verification</option>
                  <option>Payment Issues</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label font-bold text-gray-700">
                  Your Message
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 bg-gray-50 focus:outline-primary border-none pt-4"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full md:w-auto px-12 h-14 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
