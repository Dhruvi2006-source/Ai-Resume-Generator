import React from "react";

const Template2 = ({ data }) => {
  return (
    <div
      className="w-full max-w-5xl mx-auto  
      bg-white shadow-2xl rounded-2xl
      border border-gray-200
      relative overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] 
      bg-[linear-gradient(to_right,#0001_1px,transparent_1px),linear-gradient(to_bottom,#0001_1px,transparent_1px)]
      bg-size-[22px_22px]"
      ></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-9 gap-10">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-4 p-10 space-y-10 bg-violet-600 border-r border-gray-300">
          {/* PROFILE */}
          <div className="text-center">
            {data.personal_info.profileImage && (
              <img
                src={
                  typeof data.personal_info.profileImage === "string"
                    ? data.personal_info.profileImage
                    : URL.createObjectURL(data.personal_info.profileImage)
                }
                alt="Profile"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md border"
              />
            )}

            <h1 className="text-2xl font-bold mt-4 text-red-50 tracking-tight">
              {data.personal_info.fullName}
            </h1>
            <p className="text-amber-100 text-sm mt-1 uppercase tracking-wide">
              {data.personal_info.Profession}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-lg font-semibold text-pink-100 border-b pb-2">
              Contact
            </h2>
            <div className="space-y-1 mt-3 text-gray-50 text-sm">
              <p>{data.personal_info.Email}</p>
              <p>{data.personal_info.Phone}</p>
              <p>{data.personal_info.Address}</p>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-lg font-semibold text-blue-50 border-b pb-2">
              Skills
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {data.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white border rounded-lg shadow-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="lg:col-span-5 pt-10 pb-10 space-y-12 pr-3">
          {/* SUMMARY */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-blue-600 pl-4">
              Professional Summary
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed bg-white p-5  shadow-sm">
              {data.summary}
            </p>
          </div>

          {/* EXPERIENCE — Reverse Chronological */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-purple-600 pl-4">
              Work Experience
            </h2>

            <div className="mt-6 space-y-6">
              {data.experience
                ?.slice()
                .reverse() // NEWEST FIRST
                .map((exp, i) => (
                  <div key={i} className=" p-6 shadow-sm bg-white">
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {exp.company} • {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="text-gray-800 mt-3 leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-pink-600 pl-4">
              Projects
            </h2>

            <div className="mt-6 space-y-6">
              {data.projects?.map((project, i) => (
                <div key={i} className="p-6 shadow-sm bg-white">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.link}</p>
                  <p className="mt-2 text-gray-800">{project.description}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Tech Used: {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION — Reverse Chronological */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-yellow-600 pl-4">
              Education
            </h2>

            <div className="mt-6 space-y-4">
              {data.education
                ?.slice()
                .reverse() // newest → oldest
                .map((edu, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-700">
                      {edu.institution} • {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
