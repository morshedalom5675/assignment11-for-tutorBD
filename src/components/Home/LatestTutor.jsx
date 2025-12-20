import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router";
import { motion } from "framer-motion";
import TutorCard from "./Tutorcard";

const LatestTutor = () => {
  const { data: latestApplications = [], isLoading } = useQuery({
    queryKey: ["latest-applications"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/latest-applications`
      );
      return res.data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      {/* হেডিং সেকশন */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Meet Our <span className="text-primary">Latest Tutors</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Check out the profiles of our best tutors who have recently joined.
          </p>
        </div>
        <Link
          to="/tutors"
          className="btn btn-primary btn-outline px-8 rounded-xl"
        >
          View All Tutors
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestApplications.map((tutor, index) => (
          <motion.div
            key={tutor._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TutorCard tutor={tutor} />
          </motion.div>
        ))}
      </div>

      {latestApplications.length === 0 && (
        <div className="text-center py-10 bg-gray-50 rounded-2xl border-2 border-dashed">
          <p className="text-gray-500">No tutors found at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default LatestTutor;
