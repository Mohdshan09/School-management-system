// components/AdminAdmitCardSystem/AdmitCardPreview.tsx
import React from "react";
import { School, User, Printer, Download, CheckCircle } from "lucide-react";
import { Student, TimetableItem } from "./types";

export default function AdmitCardPreview({
  schoolInfo,
  examType,
  selectedStudent,
  timetableData,
  onBack,
  onPrint,
  onDownload,
}: any) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Buttons */}
        <div className="mb-6 flex gap-4 justify-between print:hidden">
          <button
            onClick={onBack}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg"
          >
            Back
          </button>
          <div className="flex gap-4">
            <button
              onClick={onDownload}
              className="px-6 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2"
            >
              <Download size={20} /> Download PDF
            </button>
            <button
              onClick={onPrint}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
            >
              <Printer size={20} /> Print
            </button>
          </div>
        </div>

        {/* Admit Card Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-indigo-600">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            {schoolInfo?.name}
          </h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            {schoolInfo?.address}
          </p>

          <h2 className="text-xl font-bold text-indigo-600 text-center mb-6">
            {examType} - Admit Card
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2 space-y-2">
              <p><strong>Name:</strong> {selectedStudent?.name}</p>
              <p><strong>Roll:</strong> {selectedStudent?.rollNumber}</p>
              <p><strong>Class:</strong> {selectedStudent?.class}</p>
              <p><strong>Section:</strong> {selectedStudent?.section}</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-24 h-28 bg-gray-200 flex items-center justify-center rounded-lg border">
                <User size={40} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* Timetable */}
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Date</th>
                <th className="border px-3 py-2">Time</th>
                <th className="border px-3 py-2">Subject</th>
                <th className="border px-3 py-2">Code</th>
              </tr>
            </thead>
            <tbody>
              {timetableData?.map((exam: TimetableItem, i: number) => (
                <tr key={i}>
                  <td className="border px-3 py-2">{exam?.date}</td>
                  <td className="border px-3 py-2">{exam?.time}</td>
                  <td className="border px-3 py-2">{exam?.subject}</td>
                  <td className="border px-3 py-2">{exam?.code}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 text-center">
            <CheckCircle className="inline text-green-600" />
            <p className="text-sm text-gray-600 mt-2">
              Verification Code:{" "}
              <span className="font-mono font-bold">
                {selectedStudent?.rollNumber}-2025-
                {Math.random().toString(36).substring(2, 8).toUpperCase()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
