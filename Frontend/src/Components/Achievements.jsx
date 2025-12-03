import React from "react";
import { motion } from "framer-motion";
import { Briefcase, SparkleIcon, Trash } from "lucide-react";

const Achievements = ({ data, onChange }) => {
  const addAchievement = () => {
    const newProject = {
      name: "",
      description : ""
    };

    onChange([...(data || []), newProject]);
  };

  const removeAchievement = (index) => {
    const updated = data.filter((_, idx) => idx !== index);
    onChange(updated);
  };

  const updatedAchievement = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="grid">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900">
            Add your Achievements here
          </h3>
          <p className="text-sm text-gray-500">
            Add your valuable Achievements for your resume.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center px-1 gap-1 py-1 rounded-lg border border-gray-300 
            shadow-sm text-sm font-medium transition-all bg-white hover:bg-gray-100"
          onClick={addAchievement}
        >
          <Briefcase className="size-4 text-black" />
          <p className="text-xs">Add Achievement</p>
        </motion.button>
      </div>

      {data.length === 0 ? (
        <p className="text-sm text-gray-500 mt-4">
          No achievements added yet. Click "Add Achievement" to get started.
        </p>
      ) : (
        data.map((achievements, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-md font-semibold">Achievements</h4>
              <button
                onClick={() => removeAchievement(idx)}
                className="text-red-500 text-sm hover:underline"
              >
                <Trash className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                type="text"
                value={achievements.title}
                onChange={(e) =>
                  updatedAchievement(idx, "title", e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Achievement Title"
              />
              <textarea
                value={achievements.description}
                onChange={(e) =>
                  updatedAchievement(idx, "description", e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Achievement Description"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Achievements;
