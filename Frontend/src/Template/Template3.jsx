import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Template3 = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative">
      {/* HEADER */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start p-12 bg-linear-to-r from-purple-50 via-white to-indigo-50">
        {/* Profile with gradient ring */}
        <div className="relative">
          {data.personal_info.profileImage && (
            <div className="w-36 h-36 rounded-full p-1 bg-linear-to-tr from-purple-400 to-indigo-400 shadow-xl">
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
          )}
        </div>

        {/* Name & contact */}
        <div className="flex-1 lg:ml-10 mt-6 lg:mt-0 text-center lg:text-left space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {data.personal_info.fullName}
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            {data.personal_info.Profession}
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 mt-4 justify-center lg:justify-start space-y-2 sm:space-y-0">
            <p className="flex items-center text-gray-600 text-sm">
              <Mail className="w-4 h-4 mr-1" /> {data.personal_info.Email}
            </p>
            <p className="flex items-center text-gray-600 text-sm">
              <Phone className="w-4 h-4 mr-1" /> {data.personal_info.Phone}
            </p>
            <p className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" /> {data.personal_info.Address}
            </p>
          </div>
        </div>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <section className="p-12 bg-purple-50">
        <h2 className="text-xl font-bold text-purple-700 border-l-4 border-purple-400 pl-4 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-800 bg-white p-6 rounded-2xl shadow-md leading-relaxed">
          {data.summary}
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="p-12 bg-white">
        <h2 className="text-xl font-bold text-indigo-700 border-l-4 border-indigo-400 pl-4 mb-6">
          Work Experience
        </h2>
        <div className="space-y-6">
          {data.experience
            ?.slice()
            .reverse()
            .map((exp, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-indigo-50 shadow-lg transform hover:scale-102 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.position}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {exp.company} • {exp.startDate} - {exp.endDate}
                </p>
                <p className="mt-3 text-gray-800 leading-relaxed">
                  {exp.details}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-12 bg-pink-50">
        <h2 className="text-xl font-bold text-pink-700 border-l-4 border-pink-400 pl-4 mb-6">
          Projects
        </h2>
        <div className="space-y-6">
          {data.projects?.map((project, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md transform hover:scale-102 transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{project.link}</p>
              <p className="mt-2 text-gray-800">{project.description}</p>
              <p className="text-sm text-gray-600 mt-1">
                Tech Used: {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="p-12 bg-yellow-50">
        <h2 className="text-xl font-bold text-yellow-700 border-l-4 border-yellow-400 pl-4 mb-6">
          Education
        </h2>
        <div className="space-y-4">
          {data.education
            ?.slice()
            .reverse()
            .map((edu, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-gray-700">
                  {edu.institution} • {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Template3;
