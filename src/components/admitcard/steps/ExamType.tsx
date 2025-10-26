// components/AdminAdmitCardSystem/steps/ExamTypeStep.tsx
import React from "react";
import { AlertCircle } from "lucide-react";

export default function ExamTypeStep({ examType, setExamType }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Examination Type</h2>
      <select
        value={examType}
        onChange={(e) => setExamType(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Select examination type</option>
        <option value="Mid-Term Examination">Mid-Term Examination</option>
        <option value="Final Examination">Final Examination</option>
        <option value="Board Examination">Board Examination</option>
      </select>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
        <div>
          <p className="text-sm font-medium text-blue-900">Information</p>
          <p className="text-xs text-blue-700 mt-1">
            This exam type will appear on all generated admit cards
          </p>
        </div>
      </div>
    </div>
  );
}
