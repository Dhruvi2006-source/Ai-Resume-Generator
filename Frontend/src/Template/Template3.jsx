import React from "react";

const Template3 = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white text-[#1F1F1F] p-10 border border-[#E5E7EB] shadow-sm">
      {/* HEADER */}
      <div className="flex items-center gap-8 border-b border-[#E5E7EB] pb-6">
        {data.personal_info.profileImage && (
          <img
            src={
              typeof data.personal_info.profileImage === "string"
                ? data.personal_info.profileImage
                : URL.createObjectURL(data.personal_info.profileImage)
            }
            alt="Profile"
            className="w-28 h-28 rounded-lg object-cover border border-[#E5E7EB]"
          />
        )}

        <div>
          <h1 className="text-4xl font-semibold tracking-tight">
            {data.personal_info.fullName}
          </h1>
          <p className="text-lg text-[#4A5568] mt-1">
            {data.personal_info.Profession}
          </p>

          <div className="mt-3 text-sm text-[#4A5568] space-y-1">
            <p>{data.personal_info.Email}</p>
            <p>{data.personal_info.Phone}</p>
            <p>{data.personal_info.Address}</p>
          </div>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-3 gap-10 mt-10">
        {/* LEFT COLUMN (TINTED BG) */}
        <div className="col-span-1 space-y-10 bg-[#F7F8FA] p-6 rounded-xl border border-[#E5E7EB]">
          {/* SUMMARY */}
          <div>
            <h2 className="text-lg font-semibold border-b border-[#E5E7EB] pb-1 uppercase tracking-wide">
              Summary
            </h2>
            <p className="text-[#4A5568] mt-3 leading-relaxed">
              {data.summary}
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-lg font-semibold border-b border-[#E5E7EB] pb-1 uppercase tracking-wide">
              Skills
            </h2>

            <ol className="list-decimal ml-5 mt-3 text-[#1F1F1F] space-y-1">
              {data.skills?.map((skill, i) => (
                <li key={i}>{skill.name}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-2 space-y-10">
          {/* EXPERIENCE (BG SHADE 1) */}
          <div className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="text-lg font-semibold border-b border-[#E5E7EB] pb-1 uppercase tracking-wide">
              Experience
            </h2>

            <div className="mt-4 space-y-7">
              {data.experience?.map((exp, i) => (
                <div key={i} className="border-l-2 border-[#1F1F1F] pl-4">
                  <h3 className="text-[17px] font-semibold">{exp.role}</h3>
                  <p className="text-sm text-[#4A5568]">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="mt-2 text-[#1F1F1F] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS (BG SHADE 2) */}
          <div className="bg-[#F7F8FA] p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="text-lg font-semibold border-b border-[#E5E7EB] pb-1 uppercase tracking-wide">
              Projects
            </h2>

            <ol className="list-decimal ml-5 mt-4 text-[#1F1F1F] space-y-5">
              {data.projects?.map((project, i) => (
                <li key={i}>
                  <h3 className="text-[17px] font-semibold">{project.title}</h3>
                  <p className="mt-1 text-[#4A5568]">{project.description}</p>
                  <p className="text-sm text-[#4A5568] mt-1">
                    Tech Used: {project.tech}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* EDUCATION (BG WHITE AGAIN) */}
          <div className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E5E7EB]">
            <h2 className="text-lg font-semibold border-b border-[#E5E7EB] pb-1 uppercase tracking-wide">
              Education
            </h2>

            <div className="mt-5 space-y-5">
              {data.education?.map((edu, i) => (
                <div key={i} className="border-l-2 border-[#1F1F1F] pl-4">
                  <h3 className="text-[17px] font-semibold">{edu.degree}</h3>
                  <p className="text-[#4A5568]">
                    {edu.school} — {edu.year}
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

export default Template3;
