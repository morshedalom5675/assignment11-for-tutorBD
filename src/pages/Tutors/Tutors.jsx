import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useMemo } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import TutorCard from "../../components/Home/Tutorcard";
import { Search, Filter, UserCheck } from "lucide-react";

const Tutors = () => {
 
  const [searchText, setSearchText] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [sortSalary, setSortSalary] = useState("");

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/applications`);
      return res.data;
    },
  });

  const filteredApplications = useMemo(() => {
    let result = [...applications];

   
    if (searchText) {
      result = result.filter(
        (app) =>
          app.subject.toLowerCase().includes(searchText.toLowerCase()) ||
          app.location.toLowerCase().includes(searchText.toLowerCase()) ||
          app.tutorName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedSubject) {
      result = result.filter((app) => app.subject === selectedSubject);
    }

   
    if (sortSalary === "lowToHigh") {
      result.sort((a, b) => a.expectedSalary - b.expectedSalary);
    } else if (sortSalary === "highToLow") {
      result.sort((a, b) => b.expectedSalary - a.expectedSalary);
    }

    return result;
  }, [applications, searchText, selectedSubject, sortSalary]);

  const categories = [...new Set(applications.map((app) => app.subject))];

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- Header Section --- */}
      <div className="bg-primary/10 py-16 px-4 border-b border-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Find Your Perfect <span className="text-primary">Tutor</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the most skilled tutors according to your needs.
          </p>
        </div>
      </div>

      {/* --- Filter & Search Section --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative w-full md:flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by subject, location or name..."
              className="input input-bordered w-full pl-10 focus:outline-primary border-gray-200"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {/* Subject Filter */}
            <select
              className="select select-bordered focus:outline-primary border-gray-200"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">All Subjects</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Salary Sort */}
            <select
              className="select select-bordered focus:outline-primary border-gray-200"
              value={sortSalary}
              onChange={(e) => setSortSalary(e.target.value)}
            >
              <option value="">Sort by Salary</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSearchText("");
                setSelectedSubject("");
                setSortSalary("");
              }}
              className="btn btn-primary px-6"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* --- Grid Layout --- */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <p className="mb-4 text-gray-500 font-medium">
          Showing {filteredApplications.length} tutors
        </p>

        {filteredApplications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApplications.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="bg-gray-100 p-6 rounded-full mb-4 text-gray-400">
              <UserCheck size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-700">
              No Match Found!
            </h3>
            <p className="text-gray-500 mt-2">
              No tutors were found that match your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutors;
