"use client";
import React, { useState, useRef } from "react";
import {
  User,
  Calendar,
  FileText,
  Download,
  Printer,
  School,
  CheckCircle,
  Upload,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

export default function AdminAdmitCardSystem() {
  const [currentStep, setCurrentStep] = useState(1);
  const [schoolInfo, setSchoolInfo] = useState({
    name: "",
    address: "",
  });

  const printRef = useRef<HTMLDivElement>(null);
  const [examType, setExamType] = useState("");
  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [timetableData, setTimetableData] = useState<
    { date: string; time: string; subject: string; code: string }[]
  >([]);

  type StudentI = {
    rollNumber: string;
    name: string;
    class: string;
    section: string;
    dob: string;
    photo: null | string;
  };

  const [selectedStudent, setSelectedStudent] = useState<StudentI[]>([]);


  const [showAdmitCard, setShowAdmitCard] = useState(false);

  const handleSchoolInfoChange = (e: any) => {
    setSchoolInfo({
      ...schoolInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleStudentFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const sampleStudents = [
        {
          rollNumber: "STU-2024-1234",
          name: "Emily Roberts",
          class: "Grade 10-A",
          section: "A",
          dob: "2008-05-12",
          photo: null,
        },
        {
          rollNumber: "STU-2024-1235",
          name: "John Smith",
          class: "Grade 10-A",
          section: "A",
          dob: "2008-06-15",
          photo: null,
        },
        {
          rollNumber: "STU-2024-1236",
          name: "Sarah Johnson",
          class: "Grade 10-A",
          section: "A",
          dob: "2008-07-20",
          photo: null,
        },
        {
          rollNumber: "STU-2024-1237",
          name: "Michael Brown",
          class: "Grade 10-B",
          section: "B",
          dob: "2008-08-10",
          photo: null,
        },
        {
          rollNumber: "STU-2024-1238",
          name: "Lisa Anderson",
          class: "Grade 10-B",
          section: "B",
          dob: "2008-09-05",
          photo: null,
        },
      ];
      setStudentsData(sampleStudents);
    }
  };

  const handleTimetableFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const sampleTimetable = [
        {
          date: "04/15/2025",
          time: "9:00 AM - 12:00 PM",
          subject: "Mathematics",
          code: "MATH101",
        },
        {
          date: "04/17/2025",
          time: "9:00 AM - 12:00 PM",
          subject: "Physics",
          code: "PHY101",
        },
        {
          date: "04/19/2025",
          time: "9:00 AM - 12:00 PM",
          subject: "Chemistry",
          code: "CHEM101",
        },
        {
          date: "04/22/2025",
          time: "9:00 AM - 12:00 PM",
          subject: "English",
          code: "ENG101",
        },
        {
          date: "04/24/2025",
          time: "9:00 AM - 12:00 PM",
          subject: "History",
          code: "HIST101",
        },
      ];
      setTimetableData(sampleTimetable);
    }
  };

  interface Student {
    rollNumber: string;
    name: string;
    class: string;
    section: string;
    dob: string;
    photo: null | string;
  }

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent((prevSelected) => {
      const isSelected = prevSelected.some(
        (s) => s.rollNumber === student.rollNumber
      );
      if (isSelected) {
        // Remove student if already selected
        return prevSelected.filter((s) => s.rollNumber !== student.rollNumber);
      } else {
        // Add student if not selected
        return [...prevSelected, student];
      }
    });
  };


  const generateAdmitCard = () => {
    if (selectedStudent) {
      setShowAdmitCard(true);
    }
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return schoolInfo.name && schoolInfo.address;
      case 2:
        return examType;
      case 3:
        return studentsData.length > 0;
      case 4:
        return timetableData.length > 0;
      case 5:
        return selectedStudent !== null;
      default:
        return false;
    }
  };

  const handlePrint = () => {
    if (!printRef.current) return;

    const printContents = printRef.current.innerHTML;
    const newWindow = window.open("", "", "width=900,height=700");

    if (newWindow) {
      newWindow.document.write(`
      <html>
        <head>
          <title>Admit Card</title>
          <style>
            body { font-family: sans-serif; padding: 20px; background: white; color: black; }
            @media print {
              body { -webkit-print-color-adjust: exact; }
              .no-print { display: none !important; }
            }
            table, th, td { border-collapse: collapse; border: 1px solid #ddd; padding: 6px; }
            th { background: #f9f9f9; }
            h3, h4 { margin: 0; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
      newWindow.document.close();
      newWindow.focus();
      newWindow.print();
      newWindow.close();
    }


  };

  const handleDownload = () => {
    alert(
      "Download functionality would be implemented here with PDF generation"
    );
  };

  const steps = [
    { number: 1, title: "School Info" },
    { number: 2, title: "Exam Type" },
    { number: 3, title: "Upload Students" },
    { number: 4, title: "Upload Timetable" },
    { number: 5, title: "Select Student" },
  ];

  if (showAdmitCard && selectedStudent) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex gap-4 justify-between print:hidden">
            <button
              onClick={() => setShowAdmitCard(false)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Back to Selection
            </button>
            <div className="flex gap-4">
              <button
                onClick={handlePrint}
                className="px-6 py-2 border shadow-md rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Printer size={20} />
                Print
              </button>
            </div>
          </div>

          {showAdmitCard && (
            <div ref={printRef} className="space-y-10 print:bg-white print:text-black">
              {selectedStudent.map((student) => (
                <div
                  id="admit-card"
                  key={student.rollNumber}
                  className="border rounded-xl shadow-md p-6 bg-white"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center"> <Image src={"/logoBHN.png"} alt="logo" width={100} height={100} /> </div>
                  <div className="text-right"> <p className="text-sm text-gray-600">Issue Date</p> <p className="text-sm font-semibold text-gray-900"> {new Date().toLocaleDateString()} </p> <p className="mt-5 text-sm font-semibold text-gray-600"> Time - 10:00 to 12:00 </p> </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                    {schoolInfo.name} - {examType}
                  </h3>



                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Student Name</p>
                          <p className="text-base font-semibold text-gray-900">
                            {student.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Roll Number</p>
                          <p className="text-base font-semibold text-gray-900">
                            {student.rollNumber}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Class</p>
                          <p className="text-base font-semibold text-gray-900">
                            {student.class}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Section</p>
                          <p className="text-base font-semibold text-gray-900">
                            {student.section}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Date of Birth</p>
                          <p className="text-base font-semibold text-gray-900">
                            {student.dob}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Exam Center</p>
                          <p className="text-base font-semibold text-gray-900">
                            Main School Building, Hall A
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-300">
                        <User className="text-gray-400" size={48} />
                      </div>
                      <p className="text-xs text-gray-500 text-center">Student Photo</p>
                    </div>
                  </div>

                  {/* Timetable Section */}
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                      Examination Timetable
                    </h4>
                    <table className="w-full text-xs border border-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-2 text-left">Date</th>
                          <th className="p-2 text-left">Time</th>
                          <th className="p-2 text-left">Subject</th>
                          <th className="p-2 text-left">Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {timetableData.map((exam, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="p-2">{exam.date}</td>
                            <td className="p-2">{exam.time}</td>
                            <td className="p-2">{exam.subject}</td>
                            <td className="p-2">{exam.code}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <School className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admit Card Generation System
          </h1>
          <p className="text-gray-600">
            Admin Panel - Generate admit cards for examinations
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${currentStep >= step.number
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {step.number}
                  </div>
                  <p
                    className={`text-xs mt-2 text-center ${currentStep >= step.number
                      ? "text-indigo-600 font-medium"
                      : "text-gray-500"
                      }`}
                  >
                    {step.title}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${currentStep > step.number
                      ? "bg-indigo-600"
                      : "bg-gray-200"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  School Information
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Enter the basic details of your school
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={schoolInfo.name}
                  onChange={handleSchoolInfoChange}
                  placeholder="Enter school name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={schoolInfo.address}
                  onChange={handleSchoolInfoChange}
                  placeholder="Enter complete school address"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Examination Type
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Select the type of examination for which admit cards will be
                  generated
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Examination Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select examination type</option>
                  <option value="Mid-Term Examination">
                    Mid-Term Examination
                  </option>
                  <option value="Final Examination">Final Examination</option>
                  <option value="Pre-Board Examination">
                    Pre-Board Examination
                  </option>
                  <option value="Board Examination">Board Examination</option>
                  <option value="Quarterly Examination">
                    Quarterly Examination
                  </option>
                  <option value="Half-Yearly Examination">
                    Half-Yearly Examination
                  </option>
                  <option value="Annual Examination">Annual Examination</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle
                  className="text-blue-600 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Information
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    This exam type will appear on all generated admit cards
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Upload Student Data
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Upload an Excel file containing student information
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
                <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                <label className="cursor-pointer">
                  <span className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Click to upload
                  </span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleStudentFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Excel file (XLSX, XLS) up to 10MB
                </p>
              </div>

              {studentsData.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm font-medium text-green-900">
                        {studentsData.length} students loaded successfully
                      </p>
                      <p className="text-xs text-green-700 mt-1">
                        Data includes: Roll Number, Name, Class, Section, Date
                        of Birth
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm font-medium text-yellow-900 mb-2">
                  Excel Format Required:
                </p>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Column A: Roll Number</li>
                  <li>• Column B: Student Name</li>
                  <li>• Column C: Class</li>
                  <li>• Column D: Section</li>
                  <li>• Column E: Date of Birth (YYYY-MM-DD)</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Upload Examination Timetable
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Upload an Excel file containing examination schedule
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
                <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
                <label className="cursor-pointer">
                  <span className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Click to upload
                  </span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleTimetableFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Excel file (XLSX, XLS) up to 10MB
                </p>
              </div>

              {timetableData.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm font-medium text-green-900">
                        Timetable loaded successfully - {timetableData.length}{" "}
                        exams scheduled
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 max-h-48 overflow-y-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="text-left p-2">Date</th>
                          <th className="text-left p-2">Time</th>
                          <th className="text-left p-2">Subject</th>
                          <th className="text-left p-2">Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {timetableData.map((exam, idx) => (
                          <tr key={idx} className="border-t border-green-200">
                            <td className="p-2">{exam.date}</td>
                            <td className="p-2">{exam.time}</td>
                            <td className="p-2">{exam.subject}</td>
                            <td className="p-2">{exam.code}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm font-medium text-yellow-900 mb-2">
                  Excel Format Required:
                </p>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Column A: Exam Date (MM/DD/YYYY)</li>
                  <li>• Column B: Time (e.g., 9:00 AM - 12:00 PM)</li>
                  <li>• Column C: Subject Name</li>
                  <li>• Column D: Subject Code</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Select Student
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Choose a student to generate their admit card
                </p>
              </div>

              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="max-h-96 overflow-y-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                          Select
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                          Roll Number
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                          Name
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                          Class
                        </th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                          Section
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentsData.map((student, idx) => (
                        <tr
                          key={idx}
                          className={`border-b hover:bg-gray-50 cursor-pointer ${selectedStudent[0]?.rollNumber === student.rollNumber
                            ? "bg-indigo-50"
                            : ""
                            }`}
                          onClick={() => handleStudentSelect(student)}
                        >
                          <td className="px-4 py-3">
                            <input
                              type="checkbox"
                              name="student"
                              checked={
                                selectedStudent.some(
                                  (s) => s.rollNumber === student.rollNumber
                                )
                              }
                              onChange={() => handleStudentSelect(student)}
                              className="w-4 h-4 text-indigo-600"
                            />
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {student.rollNumber}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {student.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {student.class}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {student.section}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {selectedStudent && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-indigo-600" size={20} />
                    <div>
                      <p className="text-sm font-medium text-indigo-900">
                        Student Selected: {selectedStudent[0]?.name}
                      </p>
                      <p className="text-xs text-indigo-700 mt-1">
                        Roll Number: {selectedStudent[0]?.rollNumber} | Class:{" "}
                        {selectedStudent[0]?.class}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors ${currentStep === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
                }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors ${canProceed()
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Next
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={generateAdmitCard}
                disabled={!canProceed()}
                className={`px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors ${canProceed()
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                <FileText size={20} />
                Generate Admit Card
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
