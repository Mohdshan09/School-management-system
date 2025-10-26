// components/AdminAdmitCardSystem/steps/SchoolInfoStep.tsx
import React from "react";

export default function SchoolInfoStep({ schoolInfo, onChange }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">School Information</h2>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          School Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={schoolInfo?.name}
          onChange={onChange}
          placeholder="Enter school name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          School Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          value={schoolInfo?.address}
          onChange={onChange}
          placeholder="Enter complete school address"
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
}
