import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import TuitionCard from "./TuitionCard";
import { Link } from "react-router";
import { motion } from "framer-motion";

const LatestTuition = () => {
  const { data: latestTuitions = [], isLoading } = useQuery({
    queryKey: ["latest-tuition"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/latest-tuition`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 my-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Available <span className="text-secondary">Tuitions</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Explore the latest tutoring opportunities and find the perfect match
            for your teaching skills.
          </p>
        </div>
        <Link
          to="/tuitions"
          className="btn btn-secondary btn-outline px-8 rounded-xl font-bold"
        >
          Explore All Tuitions
        </Link>
      </div>

      {/* Grid Layout with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestTuitions
          .filter((tuition) => tuition.status === "approved") // শুধুমাত্র approved ডেটাগুলো দেখাবে
          .map((tuition, index) => (
            <motion.div
              key={tuition._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TuitionCard tuition={tuition} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default LatestTuition;
