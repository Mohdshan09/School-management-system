// components/AdminAdmitCardSystem/steps/UploadTimetableStep.tsx
import React from "react";
import { Calendar, CheckCircle } from "lucide-react";

export default function UploadTimetableStep({
  timetableData,
  handleUpload,
}: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Timetable</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
        <label className="cursor-pointer">
          <span className="text-indigo-600 font-semibold hover:text-indigo-700">
            Click to upload
          </span>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>
      {timetableData.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="text-green-600" size={20} />
          <p className="text-sm font-medium text-green-900 mt-2">
            {timetableData.length} exams loaded successfully
          </p>
        </div>
      )}
    </div>
  );
}
