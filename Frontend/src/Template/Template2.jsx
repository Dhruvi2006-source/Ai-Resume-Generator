import React from "react";

const Template2 = ({ data }) => {
  return (
    <div
      className="w-full max-w-5xl mx-auto  
      bg-white shadow-2xl rounded-2xl
      border border-gray-200
      relative
      overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(to_right,#0002_1px,transparent_1px),linear-gradient(to_bottom,#0002_1px,transparent_1px)] bg-size-[22px_22px]"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-11 ">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-1 space-y-8 p-10 bg-violet-50 w-70">
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
                className="w-32 h-32 mx-auto rounded-full object-cover 
                border border-gray-300 shadow-md"
              />
            )}

            <h1 className="text-3xl font-bold mt-4 text-gray-900 tracking-tight">
              {data.personal_info.fullName}
            </h1>
            <p className="text-gray-700 text-sm mt-1 uppercase tracking-wide">
              {data.personal_info.Profession}
            </p>
          </div>

          {/* CONTACT */}
          <div className="p-5 ">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Contact
            </h2>
            <div className="space-y-1 text-gray-700 text-sm">
              <p>{data.personal_info.Email}</p>
              <p>{data.personal_info.Phone}</p>
              <p>{data.personal_info.Address}</p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="p-5 ">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>

            <div className="flex flex-wrap gap-2">
              {data.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-10 p-10 ">
          {/* SUMMARY */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-blue-600 pl-4">
              Professional Summary
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed bg-white/60 p-5 rounded-xl border border-gray-200 shadow-sm">
              {data.summary}
            </p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-purple-600 pl-4">
              Experience
            </h2>

            <div className="mt-5 space-y-6">
              {data.experience?.map((exp, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white/70"
                >
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-gray-600 text-sm">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {exp.description}
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

            <div className="mt-5 space-y-6">
              {data.projects?.map((project, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white/70"
                >
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1 text-gray-700">{project.description}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Tech Used: {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-yellow-600 pl-4">
              Education
            </h2>

            <div className="mt-5 space-y-6">
              {data.education?.map((edu, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-gray-700">
                    {edu.school} • {edu.year}
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
