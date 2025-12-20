import React from 'react';
import { Mail, GraduationCap, MapPin, Briefcase, DollarSign, Calendar } from 'lucide-react';

const TutorCard = ({ tutor }) => {
    // তারিখ ফরম্যাট করার জন্য
    const appliedDate = new Date(tutor.appliedAt).toLocaleDateString('en-GB');

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
            {/* কার্ড হেডার: টিউটর ইমেজ এবং নাম */}
            <div className="flex items-center gap-4 p-5 border-b border-gray-50 bg-slate-50/50 rounded-t-2xl">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                        <img 
                            src={tutor.tutorPhoto} 
                            alt={tutor.tutorName} 
                            className="object-cover"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {tutor.tutorName}
                    </h2>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Mail size={14} />
                        <span>{tutor.tutorEmail}</span>
                    </div>
                </div>
            </div>

            {/* কার্ড বডি: টিউশন ডিটেইলস */}
            <div className="card-body p-5 space-y-3">
                <div className="flex justify-between items-center">
                    <span className="badge badge-primary badge-outline font-semibold px-4 py-3">
                        {tutor.subject}
                    </span>
                    <div className={`badge font-medium px-3 py-3 ${
                        tutor.status === 'pending' ? 'badge-warning text-warning-content' : 'badge-success text-white'
                    }`}>
                        {tutor.status.toUpperCase()}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                        <GraduationCap size={16} className="text-primary" />
                        <span>{tutor.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} className="text-primary" />
                        <span className="truncate">{tutor.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase size={16} className="text-primary" />
                        <span>{tutor.experience} Exp.</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} className="text-primary" />
                        <span>{appliedDate}</span>
                    </div>
                </div>

                <div className="divider my-1"></div>

                {/* স্যালারি এবং অ্যাকশন বাটন */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Expected Salary</p>
                        <div className="flex items-center text-2xl font-black text-secondary">
                            <DollarSign size={20} />
                            <span>{tutor.expectedSalary}</span>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-md rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;