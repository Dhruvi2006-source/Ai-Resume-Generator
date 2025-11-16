import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyData } from "../assets/data";
import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderIcon,
  GraduationCap,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";
import PersonalInfo from "../Components/PersonalInfo";

const ResumeBuilder = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_Info: {},
    personal_summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: "false",
  });

  const loadExistingResume = async () => {
    const resume = dummyData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

useEffect(() => {
  const fetchData = async () => {
    await loadExistingResume();
  };
  fetchData();
}, []);

  const [aciveSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setReoveBackground] = useState(false);

  const section = [
    { id: "personal", name: "personal_info", icon: User },
    { id: "summary", name: "personal_summary", icon: FileText },
    { id: "experience", name: "experience", icon: Briefcase },
    { id: "education", name: "education", icon: GraduationCap },
    { id: "projects", name: "projects", icon: FolderIcon },
    { id: "skills", name: "skils", icon: Sparkles },
    { id: "Tools", name: "tools", icon: Wrench },
  ];

  const activeSections = section[aciveSectionIndex];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/layout"
          className="inline-flex gap-2 items-center text-slate-700  hover:text-slate-900 transition-all"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left-side - Form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6 pt-1">
              {/* Progressbar using ActiveSection Index */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-700" />
              <hr
                className="absolute top-0 left-0 h-1 bg-linear-to-r from-indigo-400 to-indigo-700 border-none transition-all duration-2000"
                style={{
                  width: `${(aciveSectionIndex * 100) / (section.length - 1)}%`,
                }}
              />

              {/* Section Tabs */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-500 py-1"></div>
              <div></div>
              <div className="flex items-center justify-between">
                {aciveSectionIndex !== 0 && (
                  <button
                    onClick={() => {
                      setActiveSectionIndex((prevIndex) =>
                        Math.max(prevIndex - 1, 0)
                      );
                    }}
                    className="flex items-center gap-1 p-1 rounded-lg text-md font-medium text-gray-600 hover:bg-gray-200 transition-all"
                    disabled={aciveSectionIndex === 0}
                  >
                    <ChevronLeft className="size-4" /> Previous
                  </button>
                )}

                <button
                  onClick={() => {
                    setActiveSectionIndex((prevIndex) =>
                      Math.min(prevIndex + 1, section.length - 1)
                    );
                  }}
                  className={`flex items-center gap-1 p-1 rounded-lg text-md font-medium text-gray-600 hover:bg-gray-200 transition-all ${
                    aciveSectionIndex === section.length - 1 && "opacity-50"
                  }`}
                  disabled={aciveSectionIndex === section.length - 1}
                >
                  Next <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Form Content */}
              <div className="space-y-6">
                {activeSections.id === "personal" && (
                  <PersonalInfo
                    data={resumeData.personal_Info}
                    onChange={(updatedData) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_Info: updatedData,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setReoveBackground}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Right-side -Preview */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
