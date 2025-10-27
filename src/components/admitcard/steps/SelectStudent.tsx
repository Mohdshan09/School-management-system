// components/AdminAdmitCardSystem/steps/SelectStudentStep.tsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { Student } from "../types";

export default function SelectStudentStep({
  students,
  selectedStudents,
  onSelect,
}: {
  students: Student[];
  selectedStudents: Student[];
  onSelect: (selected: Student[]) => void;
}) {
  const handleToggle = (student: Student) => {
    const isSelected = selectedStudents.some(
      (s) => s.rollNumber === student.rollNumber
    );

    if (isSelected) {
      // Remove from selection
      onSelect(selectedStudents.filter((s) => s.rollNumber !== student.rollNumber));
    } else {
      // Add to selection
      onSelect([...selectedStudents, student]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Select Students</h2>
      <table className="w-full border">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Select</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const isChecked = selectedStudents.some(
              (s) => s.rollNumber === student.rollNumber
            );
            return (
              <tr
                key={student.rollNumber}
                onClick={() => handleToggle(student)}
                className={`cursor-pointer ${
                  isChecked ? "bg-indigo-50" : ""
                }`}
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggle(student)}
                  />
                </td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.rollNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selectedStudents.length > 0 && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-indigo-600" size={20} />
            <p className="text-sm font-medium text-indigo-900">
              Selected {selectedStudents.length} student
              {selectedStudents.length > 1 ? "s" : ""}
            </p>
          </div>
          <ul className="text-xs text-indigo-700 space-y-1">
            {selectedStudents.map((s) => (
              <li key={s.rollNumber}>
                {s.name} — Roll: {s.rollNumber}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
