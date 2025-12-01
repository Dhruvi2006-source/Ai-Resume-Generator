import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { dummyData } from "../assets/data.js";
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
import Template1 from "../Template/Template1.jsx";
import Template2 from "../Template/Template2.jsx";
import Template3 from "../Template/Template3.jsx";
import Template4 from "../Template/Template4.jsx";
import Preview from "./Preview.jsx";
import TemplateSelector from "../Components/TemplateSelector.jsx";
import PersonalSummary from "../Components/PersonalSummary.jsx";
import Experience from "../Components/Experience.jsx";
import Education from "../Components/Education.jsx";

const ResumeBuilder = () => {
  const { resumeid } = useParams();

  console.log("Params:", resumeid);
  console.log(
    "Dummy Match:",
    dummyData.find((r) => r._id === resumeid)
  );

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: "false",
  });

  useEffect(() => {
    const resume = dummyData.find((r) => r._id === resumeid);

    console.log("Matched Resume:", resume);

    if (resume) {
      document.title = resume.title;
      const timer = setTimeout(() => {
        setResumeData(resume);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [resumeid]);

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const section = [
    { id: "personal", name: "personal_info", icon: User },
    { id: "summary", name: "summary", icon: FileText },
    { id: "experience", name: "experience", icon: Briefcase },
    { id: "education", name: "education", icon: GraduationCap },
    { id: "projects", name: "projects", icon: FolderIcon },
    { id: "skills", name: "skills", icon: Sparkles },
    { id: "Tools", name: "tools", icon: Wrench },
  ];

  const activeSection = section[activeSectionIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top area: Back link (kept left-aligned as requested) */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/layout"
          className="inline-flex gap-2 items-center text-slate-700 hover:text-slate-900 transition-all text-sm sm:text-base"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Grid root:
            - On small screens it becomes 2 columns: left form (full height) and right preview (full height),
              arranged vertically with CSS grid areas to keep consistent layout.
            - On large screens it's two columns: left form (5/12) and right preview (7/12).
            - Uses responsive typography and padding.
        */}
        <div
          className="
            gap-6
            grid-cols-1
            md:grid-cols-[1fr_1fr]   /* two equal columns on md+ to keep consistent width across devices */
            lg:grid-cols-12         /* desktop: 12 column grid */
            items-start
          "
        >
          {/* Left-side - Form (keeps all logic & empty divs) */}
          <div
            className="
              col-span-1
              md:col-span-1
              lg:col-span-5
              rounded-lg overflow-hidden
              order-1
            "
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 sm:p-6 lg:p-6 pt-1">
              {/* Progressbar using ActiveSection Index (unchanged logic) */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-700" />
              <hr
                className="absolute top-0 left-0 h-1 bg-linear-to-r from-indigo-400 to-indigo-700 border-none transition-all duration-2000"
                style={{
                  width: `${
                    (activeSectionIndex * 100) / (section.length - 1)
                  }%`,
                }}
              />

              {/* Section Tabs (kept as flex as requested) */}
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 py-2">
                <div className="flex items-center gap-2 hover:bg-gray-50 transition-all p-2 rounded-lg">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) =>
                      setResumeData((prev) => ({ ...prev, template }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  {activeSectionIndex !== 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prevIndex) =>
                          Math.max(prevIndex - 1, 0)
                        )
                      }
                      className="flex items-center gap-1 px-2 py-1 rounded-lg text-md font-medium text-gray-600 hover:bg-gray-100 transition-all"
                      disabled={activeSectionIndex === 0}
                    >
                      <ChevronLeft className="size-4" /> Previous
                    </button>
                  )}

                  <button
                    onClick={() =>
                      setActiveSectionIndex((prevIndex) =>
                        Math.min(prevIndex + 1, section.length - 1)
                      )
                    }
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-md font-medium text-gray-600 hover:bg-gray-100 transition-all ${
                      activeSectionIndex === section.length - 1 && "opacity-50"
                    }`}
                    disabled={activeSectionIndex === section.length - 1}
                  >
                    Next <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Form Content container */}
              <div className="space-y-6">
                {/* Personal section */}
                {activeSection.id === "personal" && (
                  <PersonalInfo
                    data={resumeData.personal_info || {}}
                    onChange={(updatedData) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: {
                          ...prev.personal_info,
                          ...updatedData,
                        },
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}

                {/* Summary section */}
                {activeSection.id === "summary" && (
                  <PersonalSummary
                    data={resumeData.summary}
                    onChange={(updatedData) =>
                      setResumeData((prev) => ({
                        ...prev,
                        summary: updatedData,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}
                {activeSection.id === "experience" && (
                  <Experience
                    data={resumeData.experience}
                    onChange={(updatedData) =>
                      setResumeData((prev) => ({
                        ...prev,
                        experience: updatedData,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}
                {activeSection.id === "education" && (
                  <Education
                    data={resumeData.education}
                    onChange={(updatedData) =>
                      setResumeData((prev) => ({
                        ...prev,
                        education: updatedData,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}
                {/* Preserve empty divs (left intentionally) */}
                <div></div>
              </div>
            </div>
          </div>

          {/* Right-side - Preview */}
          <div
            className="
              col-span-1
              md:col-span-1
              lg:col-span-7
              order-2
              w-full
              flex flex-col
            "
          >
            {/* Buttons placeholder (kept as empty div per instruction) */}
            <div className=""></div>

            {/* The preview container must remain unchanged in logic; only styling adjusted for responsive grid */}
            <div className="px-0 sm:px-2 lg:px-4 w-full">
              <div className="w-full max-w-full overflow-hidden">
                <Preview data={resumeData} template={resumeData.template} />
              </div>
            </div>

            {/* Keep empty div (do not remove) */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
