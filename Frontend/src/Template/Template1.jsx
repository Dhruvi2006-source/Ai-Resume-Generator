import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const Template1 = ({ data }) => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* -------- HEADER -------- */}
      <div className="flex flex-row flex-wrap items-center gap-8 p-3 bg-linear-to-r from-gray-900 to-gray-700 text-white">
        {/* LEFT: PROFILE IMAGE */}
        <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-white shadow-lg">
          {data.personal_info.profileImage ? (
            <img
              src={
                typeof data.personal_info.profileImage === "string"
                  ? data.personal_info.profileImage
                  : URL.createObjectURL(data.personal_info.profileImage)
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-600">
              <span>No Photo</span>
            </div>
          )}
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-wide text-white">
            {data.personal_info.fullName}
          </h1>

          <p className="text-lg opacity-90">{data.personal_info.Profession}</p>

          {/* CONTACT DETAILS */}
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>{data.personal_info.Email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>{data.personal_info.Phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>{data.personal_info.Address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} /> <span>{data.personal_info.LinkedIn}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} /> <span>{data.personal_info.Website}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ BODY SECTIONS (Education/Exp/etc) ------------ */}
      <div className="p-8 space-y-8">
        {/* Professional Summary */}
        {data.summary && (
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700">{edu.degree}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.institution} — {edu.startDate} to {edu.endDate}
                  </p>
                  <p className="text-gray-600 text-sm">GPA: {edu.GPA}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700">{exp.position}</p>
                  <p className="text-gray-600 text-sm">
                    {exp.company} — {exp.startDate} to {exp.endDate}
                  </p>

                  {/* Experience Details (ARRAY) */}
                  {Array.isArray(exp.details) ? (
                    <ul className="list-disc ml-6 text-gray-600">
                      {exp.details.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">{exp.details}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((project, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-700">{project.title}</p>
                  <p className="text-gray-600 text-sm">{project.link}</p>
                  <p className="text-gray-600">{project.description}</p>

                  {/* ARRAY OF TECH */}
                  <p className="text-gray-600 text-sm">
                    Tech Used:{" "}
                    {Array.isArray(project.tech)
                      ? project.tech.join(", ")
                      : project.tech}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ⭐ NEW SECTION — SKILLS */}
        {data.skills?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ⭐ NEW SECTION — ACHIEVEMENTS */}
        {data.achievements?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Achievements
            </h2>
            <div className="space-y-3">
              {data.achievements.map((ach) => (
                <div key={ach.id}>
                  <p className="font-medium text-gray-700">{ach.title}</p>
                  <p className="text-gray-600 text-sm">{ach.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Template1;
