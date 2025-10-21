"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function LoginPage() {
  // form states
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [schoolId, setSchoolId] = useState("");

  const LoginMutation = useMutation({
    mutationFn: async ({
      studentId,
      password,
    }: {
      studentId: string;
      password: string;
    }) => {
      // mock API call — replace with your real endpoint
    },
  });

  const ForgotPasswordMutation = useMutation({
    mutationFn: async ({
      resetEmail,
      schoolId,
    }: {
      resetEmail: string;
      schoolId: string;
    }) => {
      //mock API call — replace with your real endpoint
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    LoginMutation.mutate({ studentId, password });
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    ForgotPasswordMutation.mutate({ resetEmail, schoolId });
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center p-8 overflow-hidden">
      <div className="bg-stone-100  shadow-4xl w-full max-w-5xl h-[85vh] max-h-[700px] grid md:grid-cols-2 overflow-hidden">
        {/* Left Section - Illustration */}
        <div className="px-8 py-10 flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Mentorly</h1>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-72 h-72">
              {/* Badges */}
              <div className="absolute top-2 right-0 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-10">
                2.3M Students
              </div>
              <div className="absolute bottom-12 -left-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-10">
                834 Schools
              </div>

              {/* Central Illustration */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={"/bulb-icon.png"}
                  alt="bulb"
                  width={150}
                  height={150}
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute top-4 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="absolute top-20 right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 8h10M7 12h10M7 16h10"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="absolute bottom-20 -left-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    strokeWidth="2"
                  />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path
                    d="M21 15l-5-5L5 21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-around pt-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
              </svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
                <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" strokeWidth="2" />
              </svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="bg-white px-10 py-10 flex flex-col justify-center relative">
          <div className="absolute top-6 right-6">
            <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="5" r="1.5" />
                <circle cx="10" cy="10" r="1.5" />
                <circle cx="10" cy="15" r="1.5" />
              </svg>
            </button>
          </div>

          <div className="max-w-sm mx-auto w-full">
            {/* CHANGE: Conditional rendering - show forgot password form or login form */}
            {!isForgotPassword ? (
              // Login Form
              <>
                <Image src={"/logo_02.jpg"} alt="logo" width={60} height={60} />
                <h2 className="text-gray-600 text-md font-bold mb-8">
                  BHN ENGLISH HR SEC SCHOOL, Gariaband
                </h2>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Enter your student ID"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-full focus:border-blue-600 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      required
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-full focus:border-blue-600 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={LoginMutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-full transition-colors shadow-lg shadow-blue-600/30 text-sm"
                  >
                    {LoginMutation.isPending ? "Logging in..." : "Login"}
                  </button>

                  <div className="text-center mt-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsForgotPassword(true);
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </>
            ) : (
              // CHANGE: Forgot Password Form
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Forgot Password
                </h2>
                <p className="text-gray-600 text-sm mb-8">
                  Enter your email or student ID to receive a password reset
                  link.
                </p>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-full focus:border-blue-600 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Enter your school id"
                      value={schoolId}
                      onChange={(e) => setSchoolId(e.target.value)}
                      className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-full focus:border-blue-600 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={ForgotPasswordMutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-full transition-colors shadow-lg shadow-blue-600/30 text-sm"
                  >
                    {ForgotPasswordMutation.isPending
                      ? "Sending..."
                      : "Send Link to Change Password"}
                  </button>

                  <div className="text-center mt-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsForgotPassword(false);
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Back to Login
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
