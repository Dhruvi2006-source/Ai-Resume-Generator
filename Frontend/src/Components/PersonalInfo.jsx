import { User } from 'lucide-react'
import React from 'react'

const PersonalInfo = ({data , onChange , removeBackground , setRemoveBackground}) => {

  const handleImageChange = (field , value) => {
      onChange({...data , [field] : value})
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-950">
        Personal Information
      </h2>
      <p>Fill Personal Info</p>
      <div className="flect items-center gap-2">
        <label>
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"
            />
          ) : (
            <div className="flex items-center gap-1">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
                <User className="size-8 text-gray-700 mt-5" />
              </div>
              <p>Upload Profile Picture</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageChange("image", e.target.files[0])}
          />
        </label>
        {typeof data.image === "object" && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>Remove Background</p>
            <label className="relative inline-flex items-center cursor-pointer text-gray-950 gap-3">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={removeBackground}
                onChange={() => setRemoveBackground((prev) => !prev)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo