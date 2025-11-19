// import React from "react";
// import {
//   Briefcase,
//   LinkedinIcon,
//   Globe,
//   MapPin,
//   Phone,
//   User,
//   Mail,
//   UploadCloud,
//   Upload,
// } from "lucide-react";
// // import { motion } from "framer-motion";

// const PersonalInfo = ({
//   data,
//   onChange,
//   removeBackground,
//   setRemoveBackground,
// }) => {
//   const handleChange = (field, value) => {
//     onChange({ [field]: value });
//   };

//   const field = [
//     {
//       key: "fullName",
//       label: "Name",
//       type: "text",
//       icon: User,
//       required: true,
//     },
//     {
//       key: "Email",
//       label: "Email",
//       type: "email",
//       icon: Mail,
//       required: true,
//     },
//     {
//       key: "Phone",
//       label: "Number",
//       type: "phone",
//       icon: Phone,
//       required: false,
//     },
//     {
//       key: "Address",
//       label: "Address",
//       type: "text",
//       icon: MapPin,
//       required: false,
//     },
//     {
//       key: "Profession",
//       label: "Profession",
//       type: "text",
//       icon: Briefcase,
//       required: false,
//     },
//     {
//       key: "LinkedIn",
//       label: "LinkedIn Profile",
//       type: "url",
//       icon: LinkedinIcon,
//       required: false,
//     },
//     {
//       key: "Website",
//       label: "Website",
//       type: "url",
//       icon: Globe,
//       required: false,
//     },
//   ];

//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-gray-950">
//         Personal Information
//       </h2>
//       <p>Fill Personal Info</p>
//       <div className="flex items-center gap-2">
//         <label>
//           {data.image ? (
//             <img
//               src={
//                 typeof data.image === "string"
//                   ? data.image
//                   : URL.createObjectURL(data.image)
//               }
//               alt="Profile"
//               className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"
//             />
//           ) : (
//             <div className="flex items-center gap-1">
//               <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100">
//                 <User className="size-8 text-gray-700 mt-5" />
//               </div>
//               <p>Upload Profile Picture</p>
//             </div>
//           )}
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => handleChange("image", e.target.files[0])}
//           />
//         </label>
//         {typeof data.image === "object" && (
//           <div className="flex flex-col gap-1 pl-4 text-sm">
//             <p>Remove Background</p>
//             <label className="relative inline-flex items-center cursor-pointer text-gray-950 gap-3">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={removeBackground}
//                 onChange={() => setRemoveBackground((prev) => !prev)}
//               />
//               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//               <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-4"></span>
//             </label>
//           </div>
//         )}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {field.map((fields) => {
//           const Icon = fields.icon;
//           return (
//             <div key={fields.key} className="flex flex-col gap-1">
//               <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
//                 <Icon className="size-4" />
//                 {fields.label}
//                 {fields.required && <span className="text-red-500">*</span>}
//               </label>
//               <input
//                 type={fields.type}
//                 value={data[fields.key] || ""}
//                 onChange={(e) => handleChange(fields.key, e.target.value)}
//                 className="mt-1 w-full px-3 py-2 border border-gray-900 rounded-lg focus:ring focus:ring-blue-950 focus:border-blue-950 outline-none transition-all text-sm"
//                 placeholder={`Enter your ${fields.label.toLowerCase()}`}
//                 required={fields.required}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PersonalInfo;



                          // 2nd UI

// import {
//   Briefcase,
//   LinkedinIcon,
//   Globe,
//   MapPin,
//   Phone,
//   User,
//   Mail,
//   UploadCloud,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const PersonalInfo = ({
//   data,
//   onChange,
//   removeBackground,
//   setRemoveBackground,
// }) => {
//   const handleChange = (field, value) => {
//     onChange({ [field]: value });
//   };

//   const fields = [
//     {
//       key: "fullName",
//       label: "Name",
//       type: "text",
//       icon: User,
//       required: true,
//     },
//     { key: "Email", label: "Email", type: "email", icon: Mail, required: true },
//     {
//       key: "Phone",
//       label: "Number",
//       type: "phone",
//       icon: Phone,
//       required: false,
//     },
//     {
//       key: "Address",
//       label: "Address",
//       type: "text",
//       icon: MapPin,
//       required: false,
//     },
//     {
//       key: "Profession",
//       label: "Profession",
//       type: "text",
//       icon: Briefcase,
//       required: false,
//     },
//     {
//       key: "LinkedIn",
//       label: "LinkedIn Profile",
//       type: "url",
//       icon: LinkedinIcon,
//       required: false,
//     },
//     {
//       key: "Website",
//       label: "Website",
//       type: "url",
//       icon: Globe,
//       required: false,
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.07, ease: "easeOut" },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 8 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="p-8 rounded-2xl bg-white border border-indigo-100 shadow-[0_4px_20px_rgba(79,70,229,0.05)]"
//     >
//       {/* Header */}
//       <motion.div variants={item} className="mb-6">
//         <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
//           <User className="size-6 text-indigo-600" />
//           Personal Information
//         </h2>
//         <p className="text-sm text-gray-600">Provide your essential details.</p>
//       </motion.div>

//       {/* Profile + Toggle on the right */}
//       <motion.div
//         variants={item}
//         className="flex justify-between items-center mb-8"
//       >
//         {/* Image Upload */}
//         <label className="group relative cursor-pointer">
//           {data.image ? (
//             <motion.img
//               src={
//                 typeof data.image === "string"
//                   ? data.image
//                   : URL.createObjectURL(data.image)
//               }
//               alt="Profile"
//               className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-200 shadow transition-all duration-300 group-hover:scale-105"
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 200, damping: 18 }}
//             />
//           ) : (
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="w-24 h-24 rounded-full bg-indigo-50 border border-indigo-200 flex flex-col items-center justify-center text-indigo-700"
//             >
//               <UploadCloud className="size-7 opacity-80" />
//               <span className="text-xs mt-1 font-medium">Upload</span>
//             </motion.div>
//           )}

//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => handleChange("image", e.target.files[0])}
//           />
//         </label>

//         {/* Toggle ALWAYS visible if image exists */}
//         {data.image && (
//           <motion.div variants={item} className="flex items-center gap-3">
//             <p className="text-sm text-gray-800 font-medium">
//               Remove Background
//             </p>

//             <label className="relative inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={removeBackground}
//                 onChange={() => setRemoveBackground((prev) => !prev)}
//               />

//               <div
//                 className="
//                   w-12 h-7 bg-gray-300 rounded-full peer
//                   peer-checked:bg-indigo-600 transition-all duration-300
//                 "
//               ></div>

//               <span
//                 className="
//                   absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow
//                   transition-all duration-300 peer-checked:translate-x-5
//                 "
//               ></span>
//             </label>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Input Grid */}
//       <motion.div
//         variants={container}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         {fields.map((field) => {
//           const Icon = field.icon;

//           return (
//             <motion.div
//               variants={item}
//               key={field.key}
//               className="flex flex-col gap-2"
//             >
//               <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                 <Icon className="size-4 text-indigo-600" />
//                 {field.label}
//                 {field.required && <span className="text-red-500">*</span>}
//               </label>

//               <motion.input
//                 type={field.type}
//                 value={data[field.key] || ""}
//                 onChange={(e) => handleChange(field.key, e.target.value)}
//                 whileFocus={{
//                   scale: 1.02,
//                   boxShadow: "0 0 0 3px rgba(79,70,229,0.25)",
//                 }}
//                 transition={{ duration: 0.15 }}
//                 className="
//                   px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm
//                   focus:border-indigo-600 outline-none transition-all
//                 "
//                 placeholder={`Enter your ${field.label.toLowerCase()}`}
//                 required={field.required}
//               />
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PersonalInfo;


import React from "react";
import {
  Briefcase,
  LinkedinIcon,
  Globe,
  MapPin,
  Phone,
  User,
  Mail,
  UploadCloud,
} from "lucide-react";
import { motion } from "framer-motion";

const PersonalInfo = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const field = [
    {
      key: "fullName",
      label: "Name",
      type: "text",
      icon: User,
      required: true,
    },
    { key: "Email", label: "Email", type: "email", icon: Mail, required: true },
    {
      key: "Phone",
      label: "Number",
      type: "phone",
      icon: Phone,
      required: false,
    },
    {
      key: "Address",
      label: "Address",
      type: "text",
      icon: MapPin,
      required: false,
    },
    {
      key: "Profession",
      label: "Profession",
      type: "text",
      icon: Briefcase,
      required: false,
    },
    {
      key: "LinkedIn",
      label: "LinkedIn Profile",
      type: "url",
      icon: LinkedinIcon,
      required: false,
    },
    {
      key: "Website",
      label: "Website",
      type: "url",
      icon: Globe,
      required: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm bg-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 }}
      >
        <h2 className="text-xl font-semibold text-gray-900">
          Personal Information
        </h2>
        <p className="text-sm text-gray-600 mt-1">Fill your personal details</p>
      </motion.div>

      {/* IMAGE + TOGGLE */}
      <div className="flex items-center gap-4 mt-5">
        <label className="cursor-pointer flex items-center gap-3">
          {data.image ? (
            <motion.img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="Profile"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transition"
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex flex-col justify-center items-center bg-gray-50"
            >
              <UploadCloud className="size-6 text-gray-600" />
              <p className="text-xs mt-1">Upload</p>
            </motion.div>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>

        {data.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-1 text-sm pt-2"
          >
            <p className="font-medium text-gray-800">Remove Background</p>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={removeBackground}
                onChange={() => setRemoveBackground((prev) => !prev)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all"></div>
              <span
                className="
                  absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow
                  transition-all duration-300 peer-checked:translate-x-5
                "
              ></span>
            </label>
          </motion.div>
        )}
      </div>

      {/* INPUT FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {field.map((fields, index) => {
          const Icon = fields.icon;

          return (
            <motion.div
              key={fields.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col gap-1"
            >
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Icon className="size-4 text-gray-700" />
                {fields.label}
                {fields.required && <span className="text-red-500">*</span>}
              </label>

              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#1e3a8a",
                  boxShadow: "0 0 0 2px rgba(30,58,138,0.3)",
                }}
                transition={{ duration: 0.15 }}
                type={fields.type}
                value={data[fields.key] || ""}
                onChange={(e) => handleChange(fields.key, e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-400 rounded-lg outline-none transition-all text-sm bg-white"
                placeholder={`Enter your ${fields.label.toLowerCase()}`}
                required={fields.required}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
