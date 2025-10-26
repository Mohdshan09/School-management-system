"use client";
import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import SchoolInfoStep from "./steps/SchoolInfo";
import ExamTypeStep from "./steps/ExamType";
import UploadStudentsStep from "./steps/Uploadstudent";
import UploadTimetableStep from "./steps/UploadTimeTable";
import SelectStudentStep from "./steps/SelectStudent";
import AdmitCardPreview from "./AdmitCardPreview";
import { Student, TimetableItem } from "./types";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

export default function AdminAdmitCardSystem() {
  const [currentStep, setCurrentStep] = useState(1);
  const [schoolInfo, setSchoolInfo] = useState({ name: "", address: "" });
  const [examType, setExamType] = useState("");
  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [timetableData, setTimetableData] = useState<TimetableItem[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showAdmitCard, setShowAdmitCard] = useState(false);

  // --- Handlers ---
  const handleSchoolInfoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSchoolInfo({ ...schoolInfo, [e.target.name]: e.target.value });

  const handleStudentFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Sample data simulation
    const sampleStudents: Student[] = [
      { rollNumber: "STU-1", name: "John Doe", class: "10", section: "A", dob: "2008-05-12", photo: null },
      { rollNumber: "STU-2", name: "Jane Smith", class: "10", section: "B", dob: "2008-08-21", photo: null },
    ];
    setStudentsData(sampleStudents);
  };

  const handleTimetableFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Sample data simulation
    const sampleTimetable: TimetableItem[] = [
      { date: "04/15/2025", time: "9:00 AM - 12:00 PM", subject: "Mathematics", code: "MATH101" },
      { date: "04/17/2025", time: "9:00 AM - 12:00 PM", subject: "English", code: "ENG102" },
    ];
    setTimetableData(sampleTimetable);
  };

  // --- Step Validation ---
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return schoolInfo.name && schoolInfo.address;
      case 2:
        return examType !== "";
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

  const steps = [
    { number: 1, title: "School Info" },
    { number: 2, title: "Exam Type" },
    { number: 3, title: "Upload Students" },
    { number: 4, title: "Upload Timetable" },
    { number: 5, title: "Select Student" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length && canProceed()) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length && canProceed()) {
      setShowAdmitCard(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // --- Step Content Renderer ---
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <SchoolInfoStep schoolInfo={schoolInfo} handleChange={handleSchoolInfoChange} />
        );
      case 2:
        return <ExamTypeStep examType={examType} setExamType={setExamType} />;
      case 3:
        return (
          <UploadStudentsStep
            handleFileUpload={handleStudentFileUpload}
            studentsData={studentsData}
          />
        );
      case 4:
        return (
          <UploadTimetableStep
            handleFileUpload={handleTimetableFileUpload}
            timetableData={timetableData}
          />
        );
      case 5:
        return (
          <SelectStudentStep
            students={studentsData}
            selectedStudent={selectedStudent}
            onSelect={setSelectedStudent}
          />
        );
      default:
        return null;
    }
  };

  if (showAdmitCard && selectedStudent) {
    return (
      <AdmitCardPreview
        student={selectedStudent}
        schoolInfo={schoolInfo}
        examType={examType}
        timetable={timetableData}
        onBack={() => setShowAdmitCard(false)}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center mb-2">Admit Card Generation System</h1>
      <p className="text-center text-gray-500 mb-8">
        Admin Panel - Generate admit cards for examinations
      </p>

      {/* Step Indicator */}
      <StepIndicator steps={steps} currentStep={currentStep} />

      {/* Step Content */}
      <div className="mt-10 min-h-[300px] transition-all duration-500">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
            currentStep === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 text-gray-700"
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
            canProceed()
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {currentStep === steps.length ? (
            <>
              <FileText className="w-4 h-4" /> Generate Admit Card
            </>
          ) : (
            <>
              Next <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
