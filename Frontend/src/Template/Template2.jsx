import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Briefcase,
  GraduationCap,
  Laptop,
  UserRound,
} from "lucide-react";

const Template2 = ({ data }) => {
  return (
    <div className="w-full max-w-[950px] mx-auto bg-white   relative overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]
        bg-[linear-gradient(to_right,#0002_1px,transparent_1px),linear-gradient(to_bottom,#0002_1px,transparent_1px)]
        bg-size-[26px_26px]"
      ></div>

      {/* MAIN GRID (Mobile 2 Columns) */}
      <div
        className="relative z-10 grid grid-cols-9
 p-4 sm:p-6 lg:p-0"
      >
        {/* LEFT SIDEBAR */}
        <div className="col-span-4 h-[297mm] bg-linear-to-b from-violet-700 to-violet-500 text-white rounded-r-xl p-5 sm:p-7 lg:p-10 space-y-8">
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
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto roundemin-h-max object-cover shadow-xl border-4 border-white/30"
              />
            )}

            <h1 className="text-xl sm:text-3xl font-bold mt-3">
              {data.personal_info.fullName}
            </h1>
            <p className="text-violet-100 text-xs sm:text-sm mt-1 uppercase tracking-wide">
              {data.personal_info.Profession}
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <UserRound size={18} /> Contact
            </h2>

            <div className="text-xs sm:text-sm space-y-2 break-all">
              <p className="flex items-center gap-2">
                <Mail size={14} /> {data.personal_info.Email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> {data.personal_info.Phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} /> {data.personal_info.Address}
              </p>
              <p className="flex items-center gap-2">
                <Linkedin size={14} /> {data.personal_info.LinkedIn}
              </p>
              <p className="flex items-center gap-2">
                <Globe size={14} /> {data.personal_info.Website}
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Laptop size={18} /> Skills
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {data.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs sm:text-sm bg-white/20 border border-white/30 backdrop-blur rounded-md shadow"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-5 lg:col-span-5 p-3 sm:p-6 lg:p-10 space-y-10">
          {/* SUMMARY */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <UserRound size={18} /> Professional Summary
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed bg-gray-50 p-4 sm:p-5 rounded-xl shadow-sm text-sm sm:text-base">
              {data.summary}
            </p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <Briefcase size={18} /> Work Experience
            </h2>

            <div className="mt-4 space-y-6">
              {data.experience
                ?.slice()
                .reverse()
                .map((exp, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm"
                  >
                    <h3 className="text-base sm:text-lg font-semibold">
                      {exp.position}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      {exp.company} • {exp.startDate} - {exp.endDate}
                    </p>
                    <p className="text-gray-800 mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <Laptop size={18} /> Projects
            </h2>

            <div className="mt-4 space-y-6">
              {data.projects?.map((project, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm"
                >
                  <h3 className="text-base sm:text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-600 mt-1 break-all">
                    {project.link}
                  </p>
                  <p className="mt-2 text-gray-800 text-xs sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Tech Used:{" "}
                    <span className="font-semibold">{project.tech}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </h2>

            <div className="mt-4 space-y-4">
              {data.education
                ?.slice()
                .reverse()
                .map((edu, i) => (
                  <div key={i} className="p-2">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-base">
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
