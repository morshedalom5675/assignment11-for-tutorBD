import React, { useState, useMemo } from "react";
import TuitionCard from "../../components/Home/TuitionCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  XCircle,
  BookOpen,
  MapPin,
} from "lucide-react";

const Tuitions = () => {
  // --- States for Search, Filter, Sort & Pagination ---
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const { data: tuitions = [], isLoading } = useQuery({
    queryKey: ["tuition"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
      return res.data;
    },
  });

  // --- Logic for Search & Filtering (Challenge 1 & 4) ---
  const filteredTuitions = useMemo(() => {
    let result = tuitions.filter(t => t.status === "approved");

    // Search by subject or location
    if (search) {
      result = result.filter(
        (t) =>
          t.subject.toLowerCase().includes(search.toLowerCase()) ||
          t.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Advanced Filter by Class
    if (filterClass) {
      result = result.filter((t) => t.level === filterClass);
    }

    // Sorting by Budget or Date
    if (sortOrder === "lowToHigh") {
      result.sort((a, b) => a.expectedSalary - b.expectedSalary);
    } else if (sortOrder === "highToLow") {
      result.sort((a, b) => b.expectedSalary - a.expectedSalary);
    } else {
      result.sort((a, b) => new Date(b.appliedAt) - new Date(a.appliedAt));
    }

    return result;
  }, [tuitions, search, filterClass, sortOrder]);

  // --- Pagination Logic (Challenge 2) ---
  const totalPages = Math.ceil(filteredTuitions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTuitions = filteredTuitions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- Banner/Header Section --- */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Available <span className="text-primary">Tuition</span> Posts
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Browse through our verified tuition listings and find the perfect
            match for your teaching career.
          </p>
        </div>
      </div>

      {/* --- Search & Filter Bar UI --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search Input */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by subject/location..."
              className="input input-bordered w-full pl-10 focus:outline-primary border-gray-200 h-12"
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Filter by Class (Advanced Filter) */}
          <div className="relative">
            <BookOpen
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <select
              className="select select-bordered w-full pl-10 focus:outline-primary border-gray-200 h-12"
              onChange={(e) => {
                setFilterClass(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="">All Classes</option>
              <option value="Class 1 - 5">Class 1 - 5</option>
              <option value="Class 6 - 8">Class 6 - 8</option>
              <option value="SSC/O-Level">SSC/O-Level</option>
              <option value="HSC/A-Level">HSC/A-Level</option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="relative">
            <SlidersHorizontal
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <select
              className="select select-bordered w-full pl-10 focus:outline-primary border-gray-200 h-12"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="lowToHigh">Salary: Low to High</option>
              <option value="highToLow">Salary: High to Low</option>
            </select>
          </div>

          {/* Result Count Badge */}
          <div className="bg-primary/5 p-3 rounded-xl border border-primary/10 text-center">
            <span className="text-sm font-bold text-primary">
              {filteredTuitions.length} Posts Found
            </span>
          </div>
        </div>
      </div>

      {/* --- Tuition Grid Layout --- */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        {paginatedTuitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedTuitions.map((tuition) => (
              <TuitionCard key={tuition._id} tuition={tuition} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
            <XCircle size={60} className="text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-700">
              No Tuitions Found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>
        )}

        {/* --- Challenge 2: Pagination UI --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="btn btn-circle btn-outline btn-primary hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-12 h-12 rounded-full font-bold transition-all ${
                    currentPage === idx + 1
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="btn btn-circle btn-outline btn-primary hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tuitions;
