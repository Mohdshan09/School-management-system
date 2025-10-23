"use client";
import React, { useState } from "react";
import { Menu, MessageSquare, FilePlus, CreditCard, User } from "lucide-react";
import NavItem from "./NavItems";
import DropdownItem from "./Dropdown";
import Sidebar from "./Sidebar";
import { itemDetails } from "./data/ItemDetails";
import { examinationMenuItems } from "./data/ExamMenu";
import { role } from "@/lib/data";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    keyof typeof itemDetails | null
  >(null);

  return (
    <div className="relative w-full bg-gray-50">
      {/* Navbar Header */}
      <nav className=" w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            B
          </div>
          <h1 className="text-sm font-bold text-gray-700">
            BHN HR SEC ENGLISH SCHOOL
          </h1>
        </div>

        {/* Center Search */}
        <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 w-80 border border-gray-200">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Right Side Nav */}
        <div className="flex items-center space-x-6">
          <NavItem
            icon={<MessageSquare className="w-4 h-4" />}
            label="My Messages"
          />
          <NavItem
            icon={<FilePlus className="w-4 h-4" />}
            label="New Admission"
          />

          {/* Explore Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition"
            >
              <Menu className="w-4 h-4" />
              <span>explore</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 shadow-lg rounded-xl p-4 grid grid-cols-3 gap-2 z-50">
                {Object.entries(itemDetails)
                  .filter(([_, item]) => item.visible.includes(role)) //
                  .map(([label, { icon }]) => (
                    <DropdownItem
                      key={label}
                      icon={icon}
                      label={label}
                      onClick={() => {
                        setSelectedItem(label as keyof typeof itemDetails);
                        setSidebarOpen(true);
                        setDropdownOpen(false);
                      }}
                    />
                  ))}
              </div>
            )}
          </div>

          <NavItem
            icon={<CreditCard className="w-4 h-4" />}
            label="Collect Fee"
          />
          <NavItem icon={<User className="w-4 h-4" />} label="Me" />

          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm font-semibold transition">
            Support
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        selectedItem={selectedItem}
        itemDetails={itemDetails}
        examinationMenuItems={examinationMenuItems}
      />
    </div>
  );
}
