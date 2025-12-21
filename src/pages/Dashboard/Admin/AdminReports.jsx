import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Users,
  CreditCard,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

const AdminReports = () => {
  // ডামি ডাটা - এনালিটিক্স কার্ডের জন্য
  const stats = [
    {
      id: 1,
      name: "Total Revenue",
      value: "$12,450",
      icon: DollarSign,
      color: "bg-blue-500",
      trend: "+12.5%",
    },
    {
      id: 2,
      name: "Total Transactions",
      value: "458",
      icon: CreditCard,
      color: "bg-purple-500",
      trend: "+8.2%",
    },
    {
      id: 3,
      name: "Active Subscriptions",
      value: "1,205",
      icon: Users,
      color: "bg-green-500",
      trend: "+15.3%",
    },
    {
      id: 4,
      name: "Platform Growth",
      value: "24%",
      icon: TrendingUp,
      color: "bg-orange-500",
      trend: "+4.1%",
    },
  ];

  // ডামি ডাটা - ট্রানজ্যাকশন টেবিলের জন্য
  const transactions = [
    {
      id: "#TRX-9854",
      user: "Abul Basar",
      date: "Dec 18, 2025",
      amount: "$40",
      status: "Success",
      method: "Stripe",
    },
    {
      id: "#TRX-9850",
      user: "Catherine Hurst",
      date: "Dec 17, 2025",
      amount: "$25",
      status: "Success",
      method: "SSLCommerz",
    },
    {
      id: "#TRX-9842",
      user: "Jamil Ahmed",
      date: "Dec 15, 2025",
      amount: "$60",
      status: "Success",
      method: "Stripe",
    },
    {
      id: "#TRX-9838",
      user: "Sultana Razia",
      date: "Dec 14, 2025",
      amount: "$15",
      status: "Success",
      method: "Paypal",
    },
    {
      id: "#TRX-9830",
      user: "Rakib Hasan",
      date: "Dec 12, 2025",
      amount: "$50",
      status: "Success",
      method: "Stripe",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800">
          Reports & Analytics
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of your platform's financial performance and transactions.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl text-white ${item.color}`}>
                <item.icon size={24} />
              </div>
              <span className="flex items-center gap-1 text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} /> {item.trend}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {item.name}
              </p>
              <h3 className="text-2xl font-black text-gray-800 mt-1">
                {item.value}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Analytics Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transaction History Table */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">
              Recent Transactions
            </h3>
            <button className="btn btn-ghost btn-sm text-primary">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gray-50/50">
                <tr className="text-gray-600 border-none">
                  <th className="font-bold">Transaction ID</th>
                  <th className="font-bold">User</th>
                  <th className="font-bold">Date</th>
                  <th className="font-bold">Amount</th>
                  <th className="font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((trx) => (
                  <tr
                    key={trx.id}
                    className="hover:bg-gray-50/50 transition-colors border-gray-50"
                  >
                    <td className="font-medium text-primary">{trx.id}</td>
                    <td className="font-semibold text-gray-700">{trx.user}</td>
                    <td className="text-gray-500">{trx.date}</td>
                    <td className="font-bold text-gray-800">{trx.amount}</td>
                    <td>
                      <div className="badge badge-success gap-2 text-white py-3 px-4">
                        <CheckCircle size={14} /> {trx.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Distribution (Placeholder/Visual) */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Revenue Source
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Tuition Post Fees
                </span>
                <span className="text-sm font-bold text-gray-800">65%</span>
              </div>
              <progress
                className="progress progress-primary w-full h-3"
                value="65"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Tutor Verification
                </span>
                <span className="text-sm font-bold text-gray-800">25%</span>
              </div>
              <progress
                className="progress progress-secondary w-full h-3"
                value="25"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Platform Ads
                </span>
                <span className="text-sm font-bold text-gray-800">10%</span>
              </div>
              <progress
                className="progress progress-accent w-full h-3"
                value="10"
                max="100"
              ></progress>
            </div>
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-3xl border border-primary/10">
            <h4 className="font-bold text-gray-800 mb-2">Monthly Insight</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Revenue increased by{" "}
              <span className="text-primary font-bold">12%</span> compared to
              last month. Keep optimizing tuition post approvals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
