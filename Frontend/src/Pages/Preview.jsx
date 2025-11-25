import React from "react";
import Template3 from "../Template/Template3";
import Template2 from "../Template/Template2";
import Template4 from "../Template/Template4";
import Template1 from "../Template/Template1";

const Preview = ({ data, template, classes = "" }) => {
  const renderTemplates = () => {
    switch (template) {
      case "Morden":
        return <Template2 data={data} />;

      case "Classic":
        return <Template4 data={data} />;

      case "Creative":
        return <Template3 data={data} />;

      case "Professional":
        return <Template1 data={data} />;

      default:
        return <Template4 data={data} />;
    }
  };

  return (
    <div className="w-full flex justify-center bg-gray-200 py-4 px-2 sm:px-4">
      <div
        id="resume-privew"
        className={
          `
            bg-white 
            shadow-xl 
            border border-gray-300 
            overflow-hidden 
            mx-auto

            /* --- A4 SIZE CONTROL --- */
            w-[210mm] 
            min-h-[297mm]

            /* SCALE DOWN ON SMALL SCREENS */
            scale-90 sm:scale-95 md:scale-100 
            origin-top

            /* SMOOTH QUALITY */
            print:scale-100 print:shadow-none print:border-none
          ` + classes
        }
      >
        {renderTemplates()}
      </div>
    </div>
  );
};

export default Preview;
