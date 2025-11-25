import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const Template4 = ({ data }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white   overflow-hidden">
      {/* -------- HEADER -------- */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100">
        {/* PROFILE IMAGE */}
        <div className="w-28 h-28 rounded-lg overflow-hidden border border-gray-300 bg-gray-200">
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
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
              No Photo
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-900">
            {data.personal_info.fullName}
          </h1>

          <p className="text-base text-gray-700">
            {data.personal_info.Profession}
          </p>

          {/* CONTACT */}
          <div className="mt-1 text-sm text-gray-700 space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={15} />
              <span>{data.personal_info.Email}</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={15} />
              <span>{data.personal_info.Phone}</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={15} />
              <span>{data.personal_info.Address}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Linkedin size={15} />
              <span>{data.personal_info.LinkedIn}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Globe size={15} />
              <span>{data.personal_info.Website}</span>
            </div>
          </div>
        </div>
      </div>

      {/* -------- BODY -------- */}
      <div className="p-6 space-y-6">
        {/* Summary */}
        {data.summary && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.summary}
            </p>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Education
            </h2>
            <div className="space-y-3 text-sm">
              {data.education.map((edu, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-800">{edu.degree}</p>
                  <p className="text-gray-600">
                    {edu.institution} — {edu.startDate} to {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Experience
            </h2>
            <div className="space-y-4 text-sm">
              {data.experience.map((exp, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-800">{exp.position}</p>
                  <p className="text-gray-600">
                    {exp.company} — {exp.startDate} to {exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Projects
            </h2>
            <div className="space-y-4 text-sm">
              {data.projects.map((project, idx) => (
                <div key={idx}>
                  <p className="font-medium text-gray-800">{project.title}</p>
                  <p className="text-gray-600 underline">{project.link}</p>
                  <p className="text-gray-700">{project.description}</p>
                  <p className="text-gray-600">Tech Used: {project.tech}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Template4;
