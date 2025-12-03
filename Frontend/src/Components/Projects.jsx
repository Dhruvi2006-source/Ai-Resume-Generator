import React from "react";
import { motion } from "framer-motion";
import { Briefcase, SparkleIcon, Trash } from "lucide-react";

const Projects = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      tech: "",
      link: "",
    };

    onChange([...(data || []), newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, idx) => idx !== index);
    onChange(updated);
  };

  const updatedProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="grid">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900">
            Add your Project here
          </h3>
          <p className="text-sm text-gray-500">
            Add your valuable project for your resume.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center px-1 gap-1 py-1 rounded-lg border border-gray-300 
            shadow-sm text-sm font-medium transition-all bg-white hover:bg-gray-100"
          onClick={addProject}
        >
          <Briefcase className="size-4 text-black" />
          <p className="text-xs">Add Project</p>
        </motion.button>
      </div>

      {data.length === 0 ? (
        <p className="text-sm text-gray-500 mt-4">
          No project added yet. Click "Add Project" to get started.
        </p>
      ) : (
        data.map((pro, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-md font-semibold">Project</h4>
              <button
                onClick={() => removeProject(idx)}
                className="text-red-500 text-sm hover:underline"
              >
                <Trash className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                type="text"
                value={pro.title}
                onChange={(e) => updatedProject(idx, "title", e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Project Title"
              />

              <input
                type="text"
                value={pro.tech}
                onChange={(e) => updatedProject(idx, "tech", e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Project Technologies (comma separated)"
              />
              <input
                type="url"
                value={pro.link}
                onChange={(e) => updatedProject(idx, "link", e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Project Technologies (comma separated)"
              />

              <div className="flex gap-2">
                <input
                  type="month"
                  value={pro.startDate}
                  onChange={(e) =>
                    updatedProject(idx, "startDate", e.target.value)
                  }
                  className="w-1/2 border border-gray-300 rounded-lg p-2"
                  placeholder="Start Date"
                />

                <input
                  type="month"
                  value={pro.endDate || ""}
                  onChange={(e) =>
                    updatedProject(idx, "endDate", e.target.value)
                  }
                  className="w-1/2 border border-gray-300 rounded-lg p-2"
                  placeholder="End Date"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="grid">
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                    Project Details
                  </h3>
                  <p className="text-sm text-gray-500">
                    Add a short professional project description for your
                    resume.
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

              <textarea
                value={pro.description}
                onChange={(e) =>
                  updatedProject(idx, "description", e.target.value)
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
        ))
      )}
    </div>
  );
};

export default Projects;
