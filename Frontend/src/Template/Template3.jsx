import React from "react";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";

const Template3 = ({ data }) => {
  return (
    <div className="w-full max-w-[900px] mx-auto bg-white overflow-hidden relative">
      {/* HEADER */}
      <div
        className="relative flex flex-col lg:flex-row items-center p-8 sm:p-12 
                      bg-gradient-to-r from-purple-100 via-white to-indigo-100 
                      gap-6 sm:gap-10"
      >
        {/* Profile Image */}
        {data.personal_info.profileImage && (
          <div className="relative flex justify-center">
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 
                            bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-xl"
            >
              <img
                src={
                  typeof data.personal_info.profileImage === "string"
                    ? data.personal_info.profileImage
                    : URL.createObjectURL(data.personal_info.profileImage)
                }
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
        )}

        {/* Name + Contact */}
        <div className="flex-1 text-center lg:text-left space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {data.personal_info.fullName}
          </h1>

          <p className="text-lg sm:text-xl text-gray-700">
            {data.personal_info.Profession}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start mt-2">
            <p className="flex items-center text-gray-600 text-sm sm:text-base">
              <Mail size={16} className="mr-2" /> {data.personal_info.Email}
            </p>
            <p className="flex items-center text-gray-600 text-sm sm:text-base">
              <Phone size={16} className="mr-2" /> {data.personal_info.Phone}
            </p>
            <p className="flex items-center text-gray-600 text-sm sm:text-base">
              <MapPin size={16} className="mr-2" /> {data.personal_info.Address}
            </p>
            {data.personal_info.LinkedIn && (
              <p className="flex items-center text-gray-600 text-sm sm:text-base">
                <Linkedin size={16} className="mr-2" />{" "}
                {data.personal_info.LinkedIn}
              </p>
            )}
            {data.personal_info.Website && (
              <p className="flex items-center text-gray-600 text-sm sm:text-base">
                <Globe size={16} className="mr-2" />{" "}
                {data.personal_info.Website}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <section className="p-8 sm:p-12 bg-purple-50">
        <h2 className="text-lg sm:text-xl font-bold text-purple-700 border-l-4 border-purple-400 pl-4 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-800 bg-white p-5 sm:p-6 rounded-2xl shadow-sm text-sm sm:text-base">
          {data.summary}
        </p>
      </section>

      {/* EXPERIENCE — TIMELINE */}
      <section className="p-8 sm:p-12 bg-white">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-700 border-l-4 border-indigo-400 pl-4 mb-6">
          Work Experience
        </h2>

        <div className="relative pl-8 sm:pl-12">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-3 sm:left-5 top-0 bottom-0 w-1 
                          bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
          ></div>

          <div className="space-y-10">
            {data.experience
              ?.slice()
              .reverse()
              .map((exp, i) => (
                <div key={i} className="relative group">
                  {/* Dot */}
                  <div
                    className="absolute -left-1 sm:-left-0.5 top-2 w-4 h-4 
                                  bg-white border-2 border-indigo-500 rounded-full shadow-md 
                                  group-hover:scale-125 transition-transform duration-300"
                  ></div>

                  {/* Card */}
                  <div
                    className="ml-6 sm:ml-10 p-5 sm:p-6 rounded-2xl bg-indigo-50 shadow-sm
                                  border border-indigo-100 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.position}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {exp.company} • {exp.startDate} -{" "}
                      {exp.current ? "Present" : exp.endDate}
                    </p>

                    {/* Details (Array Support) */}
                    <ul className="mt-3 text-gray-800 space-y-1.5 list-disc list-inside text-sm sm:text-base">
                      {(Array.isArray(exp.details)
                        ? exp.details
                        : [exp.details]
                      ).map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-8 sm:p-12 bg-pink-50">
        <h2 className="text-lg sm:text-xl font-bold text-pink-700 border-l-4 border-pink-400 pl-4 mb-6">
          Projects
        </h2>

        <div className="space-y-5 sm:space-y-6">
          {data.projects?.map((project, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-pink-100"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-indigo-600 mt-1 break-all">
                {project.link}
              </p>
              <p className="mt-2 text-gray-800 text-sm sm:text-base">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Tech Used: <span className="font-medium">{project.tech}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION (Normal, Not Timeline) */}
      <section className="p-8 sm:p-12 bg-white">
        <h2 className="text-lg sm:text-xl font-bold text-yellow-700 border-l-4 border-yellow-400 pl-4 mb-6">
          Education
        </h2>

        <div className="space-y-4">
          {data.education
            ?.slice()
            .reverse()
            .map((edu, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 bg-amber-100 rounded-2xl shadow-sm border border-amber-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {edu.institution} • {edu.startDate} -{" "}
                  {edu.current ? "Present" : edu.endDate}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  GPA: {edu.GPA}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Template3;
