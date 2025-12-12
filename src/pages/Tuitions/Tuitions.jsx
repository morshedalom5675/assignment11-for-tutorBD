import React from "react";
import TuitionCard from "../../components/Home/TuitionCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";

const Tuitions = () => {
  const { data: tuitions = [] , isLoading } = useQuery({
    queryKey: ["tuition"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
      return res.data;
    },
  });

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="grid grid-cols-3 gap-3 my-10">
      {tuitions.map((tuition) => (
        <TuitionCard key={tuition._id} tuition={tuition}></TuitionCard>
      ))}
    </div>
  );
};

export default Tuitions;
