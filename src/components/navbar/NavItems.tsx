import React from "react";

export default function NavItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="text-gray-700 hover:text-blue-600 text-sm font-medium transition flex items-center space-x-2">
      {icon}
      <span>{label}</span>
    </button>
  );
}
