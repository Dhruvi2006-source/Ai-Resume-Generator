// import React, { navigate,useState } from 'react'
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Plus,
  CloudUpload,
  FilePenIcon,
  FilePenLineIcon,
  TrashIcon,
  PencilLine,
  XIcon,
  Flag,
  UploadCloudIcon,
} from "lucide-react";
import { dummyData } from "../assets/data";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colours = [
    "#283618", // earthy deep olive
    "#6A040F", // dramatic wine red
    "#0A9396", // teal green
    "#5A189A", // deep purple
    "#3A0CA3", // royal indigo
    "#B7094C", // dark magenta-red
    "#1D3557", // navy steel blue
    "#264653", // deep desert teal
  ];

  const [allResumes, setAllResumes] = useState([]);
  const [createResume, setCreateResume] = useState(false);
  const [uploadResume, setUploadResume] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");

  const navigate = useNavigate();

  const AllResumes = async () => {
    setAllResumes(dummyData);
  };

  const createsResume = async (event) => {
    event.preventDefault();
    setCreateResume(false);
    navigate(`/layout/resume/12de3`);
  };

  const uploadsResume = async (event) => {
    event.preventDefault();
    setUploadResume(false);
    navigate(`/layout/resume/12de3`);
  };

  const editTitle = async (event) => {
    event.preventDefault();
  };

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm(
      "Are you sure You want to delete this Resume?"
    );
    if (confirm) {
      setAllResumes((prev) => prev.filter((resume) => resume._id !== resumeId));
    }
  };

  useEffect(() => {
    const fetchResumes = async () => {
      await AllResumes();
    };

    fetchResumes();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="body  gap-6 flex flex-wrap items-center">
        {/* Create Resume */}

        <div
          onClick={() => setCreateResume(true)}
          className="cursor-pointer bg-slate-200 w-60 h-80 border m-3 border-dashed border-gray-300 rounded-2xl hover:border-gray-800 flex flex-col flex-wrap justify-center items-center gap-3"
        >
          <Plus className="plusbtn size-15  transition-all duration-300 p-2.5 from-linear-to-br bg-indigo-400 to from-indigo-600  text-white rounded-full" />
          <p className="text-2xl font-bold">Create Resume</p>
        </div>

        {/* Upload Resume */}

        <div
          onClick={() => setUploadResume(true)}
          className="cursor-pointer bg-slate-200 w-60 h-80 border m-3 border-dashed border-gray-300 rounded-2xl hover:border-gray-800 flex flex-col justify-center items-center gap-3"
        >
          <CloudUpload className="uploadbtn size-15  transition-all duration-300 p-2.5 from-linear-to-br bg-indigo-400 to from-indigo-600  text-white rounded-full" />
          <p className="text-2xl font-bold">Upload Existing</p>
        </div>
      </div>

      <hr className="border-slate-400 my-6 m-4 sm:w-[305px]" />

      <div className="grid  sm:flex flex-wrap m-4 gap-6">
        {allResumes.map((resume, index) => {
          const basecolour = colours[index % colours.length];
          return (
            <button
              onClick={() => navigate(`/layout/resume/${resume._id}`)}
              key={index}
              className="relative max-w-60 w-60  h-76 flex flex-col flex-wrap items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                background: `linear-gradient(135deg , ${basecolour}10 , ${basecolour}40)`,
                borderColor: basecolour + "40",
              }}
            >
              <FilePenLineIcon
                className="size-7 group-hover:scale-105 transition-all"
                style={{ color: basecolour }}
              />
              <p
                className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                style={{ color: basecolour }}
              >
                {resume.title}
              </p>

              <p
                className="absolute bottom-1 text-[11px] text-slate-500 transition-all duration-300 px-2 text-center"
                style={{ color: basecolour + "90" }}
              >
                Updated on : {new Date(resume.updatedAt).toLocaleDateString()}
              </p>
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:visible"
              >
                <TrashIcon
                  onClick={() => deleteResume(resume._id)}
                  className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-500 transition-colors"
                />

                <PencilLine
                  onClick={() => {
                    setEditResumeId(resume._id);
                    setResumeTitle(resume.title);
                  }}
                  className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-500 transition-colors"
                />
              </div>
            </button>
          );
        })}
      </div>

      {createResume && (
        <form
          onSubmit={createsResume}
          onClick={() => {
            setCreateResume;
          }}
          className="fixed inset-0 w-full h-full bg-black/50 bg-opacity-50 backdrop-blur flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm  p-6"
          >
            <h2 className="text-xl font-bold mb-4">Create Resume</h2>
            <input
              type="text"
              placeholder="Enter Reume title"
              className="w-full px-4 py-2 mb-4 focus:border-green-500 ring-green-600"
              required
            />
            <button className="w-full py-2 bg-indigo-400 text-white rounded hover:bg-indigo-800 transition-colors">
              Create Resume
            </button>

            <XIcon
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-700 cursor-pointer transition-colors"
              onClick={() => {
                setCreateResume(false);
                setResumeTitle("");
              }}
            />
          </div>
        </form>
      )}

      {uploadResume && (
        <form
          onSubmit={uploadsResume}
          onClick={() => {
            setUploadResume;
          }}
          className="fixed inset-0 w-full h-full bg-black/50 bg-opacity-50 backdrop-blur flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm  p-6"
          >
            <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
            <input
              onChange={(e) => setResumeTitle(e.target.value)}
              value={resumeTitle}
              type="text"
              placeholder="Enter Reume title"
              className="w-full px-4 py-2 mb-4 focus:border-green-500 ring-green-600"
              required
            />
            <div>
              <label htmlFor="resume-input">
                Select Resume File
                <div className="flex flex-col items-center justify-center gap-2 border group text-slate-900 border-slate-400 border-dashed rounded-md p-4 py-10 my-10 hover:border-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors">
                  {resume ? (
                    <p className="text-indigo-500">{resume.name}</p>
                  ) : (
                    <>
                      <UploadCloudIcon className="size-14 stroke-1" />
                      <p>Upload Resume</p>
                    </>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="resume-input"
                accept=".pdf"
                hidden
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>

            <button className="w-full py-2 bg-indigo-400 text-white rounded hover:bg-indigo-800 transition-colors">
              Create Resume
            </button>

            <XIcon
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-700 cursor-pointer transition-colors"
              onClick={() => {
                setUploadResume(false);
                setResumeTitle("");
              }}
            />
          </div>
        </form>
      )}

      {editResumeId && (
        <form
          onSubmit={editTitle}
          onClick={() => {
            setEditResumeId("");
          }}
          className="fixed inset-0 w-full h-full bg-black/50 bg-opacity-50 backdrop-blur flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm  p-6"
          >
            <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>
            <input
              type="text"
              placeholder="Enter Reume title"
              className="w-full px-4 py-2 mb-4 focus:border-green-500 ring-green-600"
              required
            />
            <button className="w-full py-2 bg-indigo-400 text-white rounded hover:bg-indigo-800 transition-colors">
              Update
            </button>

            <XIcon
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-700 cursor-pointer transition-colors"
              onClick={() => {
                setEditResumeId("");
                setResumeTitle("");
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Dashboard;




