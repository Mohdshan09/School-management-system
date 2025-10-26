// components/AdminAdmitCardSystem/steps/SelectStudentStep.tsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { Student } from "../types";

export default function SelectStudentStep({
  students,
  selectedStudent,
  onSelect,
}: {
  students: Student[];
  selectedStudent: Student | null;
  onSelect: (s: Student) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Student</h2>
      <table className="w-full border">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Select</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.rollNumber}
              onClick={() => onSelect(student)}
              className={`cursor-pointer ${
                selectedStudent?.rollNumber === student.rollNumber
                  ? "bg-indigo-50"
                  : ""
              }`}
            >
              <td className="px-4 py-2">
                <input
                  type="radio"
                  name="student"
                  checked={selectedStudent?.rollNumber === student.rollNumber}
                  readOnly
                />
              </td>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.rollNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="text-indigo-600" size={20} />
          <div>
            <p className="text-sm font-medium text-indigo-900">
              Selected: {selectedStudent.name}
            </p>
            <p className="text-xs text-indigo-700">
              Roll: {selectedStudent.rollNumber}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
