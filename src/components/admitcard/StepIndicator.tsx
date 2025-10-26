// components/AdminAdmitCardSystem/StepIndicator.tsx
"use client";
import React from "react";

interface StepIndicatorProps {
  steps: { number: number; title: string }[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  currentStep >= step.number
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.number}
              </div>
              <p
                className={`text-xs mt-2 text-center ${
                  currentStep >= step.number
                    ? "text-indigo-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  currentStep > step.number ? "bg-indigo-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
