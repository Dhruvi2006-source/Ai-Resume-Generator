import { SparkleIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const PersonalSummary = ({ data, onChange}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-4 sm:p-6"
    >
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="grid">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">
              Personal Summary
            </h3>
            <p className="text-sm text-gray-500">
              Add a short professional summary for your resume.
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center px-1 gap-1 py-1 rounded-lg border border-gray-300 
                       shadow-sm text-sm font-medium transition-all bg-white hover:bg-gray-100"
          >
            <SparkleIcon className="size-4 text-[#d63384]" />
            <p className="text-xs">AI Enhance</p>
          </motion.button>
        </div>

        {/* Textarea Section */}
        <div className="grid">
          <textarea
            value={data || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 text-[15px] leading-relaxed
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all bg-gray-50 hover:bg-white shadow-sm"
            rows={6}
            placeholder="Write your summary..."
          />

          <p className="text-xs text-gray-500 mt-2">
            Tip: Keep it concise (3–4 sentences) and highlight your strongest
            achievements.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalSummary;
