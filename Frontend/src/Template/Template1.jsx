import React from "react";

const Template1 = ({ data }) => {
  if (!data) return <div>No data provided</div>;

  const { personal_info, summary, skills, experience, education, projects } =
    data;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-gray-800">
      {personal_info?.profileImage && (
        <img
          src={
            typeof personal_info.profileImage === "string"
              ? personal_info.profileImage
              : URL.createObjectURL(personal_info.profileImage)
          }
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border mb-4"
        />
      )}

      {/* Header */}
      <div className="flex flex-col gap-2 border-b pb-6">
        <h1 className="text-4xl font-bold tracking-tight">
          {personal_info?.fullName}
        </h1>
        <p className="text-lg text-gray-600">{personal_info?.Profession}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
          <span>Email: {personal_info?.Email}</span>
          <span>Phone: {personal_info?.Phone}</span>
          <span>Location: {personal_info?.Address}</span>
          {personal_info?.LinkedIn && (
            <span>LinkedIn: {personal_info.LinkedIn}</span>
          )}
          {personal_info?.Website && (
            <span>Website: {personal_info.Website}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-black pl-3">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-black pl-3">
          Work Experience
        </h2>
        {experience?.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl">{exp.position}</h3>
              <span className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-2">{exp.company}</p>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
              {exp.details?.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-black pl-3">
          Education
        </h2>
        {education?.map((edu) => (
          <div key={edu.id} className="mb-3">
            <h3 className="font-bold text-lg">{edu.degree}</h3>
            <p className="text-sm text-gray-600">
              {edu.institution} • {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-black pl-3">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-3 text-gray-700">
          {skills?.map((skill) => (
            <span key={skill.id}>{skill.name}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3 border-l-4 border-black pl-3">
          Projects
        </h2>
        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
          {projects?.map((proj) => (
            <li key={proj.id}>
              <strong>{proj.title}</strong> – {proj.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Template1;