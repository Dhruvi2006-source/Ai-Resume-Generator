import React, { useState } from "react";
import { Check, Layout } from "lucide-react";


const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "Classic",
      name: "Classic",
      preview: "A clean Resume template with a traditional layout.",
    },
    {
      id: "Morden",
      name: "Morden",
      preview: "A modern Resume template with a sleek design.",
    },
    {
      id: "Professional",
      name: "Professional",
      preview: "A professional Resume template with a formal look.",
    },
    {
      id: "Creative",
      name: "Creative",
      preview: "A creative Resume template with unique elements.",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full flex items-center gap-1 justify-between"
      >
        <Layout className="sm:size-6" /> <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`px-4 py-3 hover:bg-gray-100 cursor-pointer relative ${
                selectedTemplate === template.id ? "bg-gray-200" : ""
              }`}
            >
              {/* Selected Mark */}
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="size-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                </div>
              )}

              {/* Template Name / Preview */}
              <div className="space-y-1">
                <h4>{template.name}</h4>
                <p className="text-xs text-gray-600">{template.preview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
