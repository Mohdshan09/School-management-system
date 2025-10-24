import React from "react";

export default function DropdownItem({
  icon,
  label,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-3 hover:bg-gray-100 rounded-lg transition"
    >
      <div className="text-blue-600 mb-2">{icon}</div>
      <span className="text-xs text-gray-700 text-center">{label}</span>
    </button>
  );
}
