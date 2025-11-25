import React, { useState, useRef, useEffect } from "react";
import Template3 from "../Template/Template3";
import Template2 from "../Template/Template2";
import Template4 from "../Template/Template4";
import Template1 from "../Template/Template1";

const Preview = ({ data, template, colours, classes = "" }) => {
  const [scale, setScale] = useState(1); // Zoom level
  const [fitMode, setFitMode] = useState("screen"); // screen | width | manual
  const resumeRef = useRef(null);

  const MIN_SCALE = 0.6;
  const MAX_SCALE = 1.4;

  const renderTemplates = () => {
    switch (template) {
      case "Morden":
        return <Template3 data={data} colours={colours} />;

      case "Classic":
        return <Template2 data={data} colours={colours} />;

      case "Creative":
        return <Template3 data={data} colours={colours} />;

      case "Professional":
        return <Template1 data={data} colours={colours} />;

      default:
        return <Template4 data={data} colours={colours} />;
    }
  };

  // FIT MODES: auto-scale based on mode
  useEffect(() => {
    const updateScale = () => {
      if (!resumeRef.current || fitMode === "manual") return;

      const parentWidth = resumeRef.current.parentElement.clientWidth;

      if (fitMode === "screen") {
        setScale(Math.min(parentWidth / 850, 1));
      } else if (fitMode === "width") {
        setScale(parentWidth / 850);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [fitMode]);

  return (
    <div className="w-full bg-gray-200 flex flex-col items-center py-4 px-2">
      {/* ------------------ TOP CONTROL BAR ------------------ */}
      <div className="flex items-center gap-3 mb-4 bg-white shadow-md rounded-lg px-4 py-2">
        <button
          onClick={() => setScale((prev) => Math.max(prev - 0.1, MIN_SCALE))}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          –
        </button>

        <span className="text-sm font-medium w-10 text-center">
          {(scale * 100).toFixed(0)}%
        </span>

        <button
          onClick={() => setScale((prev) => Math.min(prev + 0.1, MAX_SCALE))}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          +
        </button>

        <div className="w-px bg-gray-300 h-6"></div>

        <button
          onClick={() => setFitMode("screen")}
          className={`px-3 py-1 rounded text-sm ${
            fitMode === "screen" ? "bg-gray-900 text-white" : "bg-gray-100"
          }`}
        >
          Fit Screen
        </button>

        <button
          onClick={() => setFitMode("width")}
          className={`px-3 py-1 rounded text-sm ${
            fitMode === "width" ? "bg-gray-900 text-white" : "bg-gray-100"
          }`}
        >
          Fit Width
        </button>

        <button
          onClick={() => setFitMode("manual")}
          className={`px-3 py-1 rounded text-sm ${
            fitMode === "manual" ? " bg-gray-900 text-white" : "bg-gray-100"
          }`}
        >
          Manual
        </button>
      </div>

      {/* ------------------ A4 PAGE WRAPPER ------------------ */}
      <div className="overflow-auto w-full flex justify-center">
        <div
          ref={resumeRef}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
          className={`
            bg-white shadow-xl border border-gray-300 overflow-hidden 
            w-[210mm] min-h-[297mm] my-6 
            print:scale-100 print:shadow-none print:border-none
            ${classes}
          `}
        >
          {renderTemplates()}
        </div>
      </div>
    </div>
  );
};

export default Preview;
