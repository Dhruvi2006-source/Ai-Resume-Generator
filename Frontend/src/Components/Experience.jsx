import React from "react";
import { motion } from "framer-motion";
import { Briefcase , SparkleIcon, Trash} from "lucide-react";

const Experience = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience = {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    };

    onChange([...(data || []), newExperience]);
  };

  const removeExperience = (index) => {
    const updatedExperience = data.filter((_, idx) => idx !== index);
    onChange(updatedExperience);
  };

  const updatedExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);

    // If checkbox toggles currently working
    if (field === "currentlyWorking") {
      updated[index].currentlyWorking = value;
      updated[index].endDate = value ? "Present" : ""; // set Present or empty
    } else {
      updated[index][field] = value;
    }

    onChange(updated);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="grid">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900">
            Add your Experience here
          </h3>
          <p className="text-sm text-gray-500">
            Add a short job experience for your resume.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center px-1 gap-1 py-1 rounded-lg border border-gray-300 
                       shadow-sm text-sm font-medium transition-all bg-white hover:bg-gray-100"
          onClick={addExperience}
        >
          <Briefcase className="size-4 text-[#000000]" />
          <p className="text-xs">Add Experience</p>
        </motion.button>
      </div>
      {data.length === 0 ? (
        <p className="text-sm text-gray-500 mt-4">
          No experience added yet. Click "Add Experience" to get started.
        </p>
      ) : (
        data.map((exp, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-md font-semibold">Experience</h4>
              <button
                onClick={() => removeExperience(idx)}
                className="text-red-500 text-sm hover:underline"
              >
                <Trash className="size-4" />
              </button>
            </div>
            <div className="grid gap-3">
              <input
                type="text"
                value={exp.position}
                onChange={(e) =>
                  updatedExperience(idx, "position", e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Position"
              />
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  updatedExperience(idx, "company", e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Company"
              />
              <div className="flex gap-2">
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) =>
                    updatedExperience(idx, "startDate", e.target.value)
                  }
                  className="w-1/2 border border-gray-300 rounded-lg p-2"
                  placeholder="Start Date"
                />
                <input
                  type="month"
                  value={exp.endDate || ""}
                  onChange={(e) =>
                    updatedExperience(idx, "endDate", e.target.value)
                  }
                  disabled={exp.currentlyWorking}
                  className={`w-1/2 border border-gray-300 rounded-lg p-2 ${
                    exp.currentlyWorking ? "bg-gray-200 cursor-not-allowed" : ""
                  }
                  }
                  `}
                  placeholder="End Date"
                />
              </div>

              {/* Checkbox for currently working */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={exp.currentlyWorking}
                  onChange={(e) =>
                    updatedExperience(idx, "currentlyWorking", e.target.checked)
                  }
                />
                <label className="text-sm text-gray-600">
                  I am currently working here
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="grid">
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                    Job Summary
                  </h3>
                  <p className="text-sm text-gray-500">
                    Add a short professional job summary for your resume.
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
                  value={exp.details}
                  onChange={(e) =>
                    updatedExperience(idx, "details", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Details"
                  rows={4}
                />

                <p className="text-xs text-gray-500 mt-2">
                  Tip: Keep it concise (3–4 sentences) and highlight your
                  strongest achievements.
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Experience;
