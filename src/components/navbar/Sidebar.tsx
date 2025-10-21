import React from "react";
import { X, ChevronRight, LayoutDashboard } from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  selectedItem,
  itemDetails,
  examinationMenuItems,
}: any) {
  return (
    <div
      className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] w-80 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 z-40 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="text-blue-600">
            {selectedItem ? itemDetails[selectedItem]?.icon : null}
          </div>
          <h2 className="font-semibold text-gray-800 text-lg">
            {selectedItem || "Explore"}
          </h2>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-65px)]">
        {selectedItem === "Dashboard" && (
          <div className="p-4">
            <button className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-blue-50 rounded-lg border border-gray-200 transition-all">
              <div className="flex items-center space-x-3">
                <LayoutDashboard className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Dashboard
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        )}

        {selectedItem === "Examination" && (
          <div className="p-3 space-y-3">
            {examinationMenuItems.map((item: any, index: number) => (
              <button
                key={index}
                className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-all group border border-transparent hover:border-blue-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
