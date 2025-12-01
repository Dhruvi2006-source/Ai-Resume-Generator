import React from "react";
import { motion } from "framer-motion";
import { Plus, Trash } from "lucide-react";

const Education = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      degree: "",
      institution: "",
      startDate: "",
      endDate: "",
      GPA: "",
      currentlystudying: false,
    };

    onChange([...(data || []), newEducation]);
  };

  const removeEducation = (index) => {
    const updatedEducation = data.filter((_, idx) => idx !== index);
    onChange(updatedEducation);
  };

  const updatedEducation = (index, field, value) => {
    const updated = [...data];

    if (field === "currentlystudying") {
      updated[index].currentlystudying = value;
      updated[index].endDate = value ? "Present" : "";
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
            Add your Education here
          </h3>
          <p className="text-sm text-gray-500">
            Add your education information for your resume.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center px-1 gap-1 py-1 rounded-lg border border-gray-300 
            shadow-sm text-sm font-medium transition-all bg-white hover:bg-gray-100"
          onClick={addEducation}
        >
          <Plus className="size-4 text-black" />
          <p className="text-xs">Add Education</p>
        </motion.button>
      </div>

      {data.length === 0 ? (
        <p className="text-sm text-gray-500 mt-4">
          No education added yet. Click "Add Education" to get started.
        </p>
      ) : (
        data.map((edu, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-md font-semibold">Education</h4>
              <button
                onClick={() => removeEducation(idx)}
                className="text-red-500 text-sm hover:underline"
              >
                <Trash className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  updatedEducation(idx, "degree", e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Degree"
              />

              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  updatedEducation(idx, "institution", e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Institution"
              />

              <input
                type="text"
                value={edu.GPA}
                onChange={(e) => updatedEducation(idx, "GPA", e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="GPA out of 10.0"
              />

              <div className="flex gap-2">
                <input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) =>
                    updatedEducation(idx, "startDate", e.target.value)
                  }
                  className="w-1/2 border border-gray-300 rounded-lg p-2"
                  placeholder="Start Date"
                />

                <input
                  type="month"
                  value={edu.endDate || ""}
                  onChange={(e) =>
                    updatedEducation(idx, "endDate", e.target.value)
                  }
                  disabled={edu.currentlystudying}
                  className={`w-1/2 border border-gray-300 rounded-lg p-2 ${
                    edu.currentlystudying
                      ? "bg-gray-200 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="End Date"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={edu.currentlystudying}
                  onChange={(e) =>
                    updatedEducation(idx, "currentlystudying", e.target.checked)
                  }
                />
                <label className="text-sm text-gray-600">
                  I am currently studying here
                </label>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Education;
