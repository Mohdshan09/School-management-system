"use client"
import { useState } from "react";
import LoginInterface from "@/app/page";
import { EyeOff,Eye,ChevronLeft } from "lucide-react";
import Link from "next/link";
export default function CreatePasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword && password.length > 0) {
      console.log('Password reset successful');
      alert('Password has been reset successfully!');
    } else {
      alert('Passwords do not match or are empty');
    }
  };

  
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 my-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
        {/* Back Button */}
        <button
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 text-sm"
        >
          <ChevronLeft size={18} />
          <span>
            <Link href={"/"}>
            Back
            </Link>
          </span>
        </button>

        {/* Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Create New Password
          </h1>
          <p className="text-sm text-gray-600">
            Enter your new password below to complete the reset process. Make sure it's strong and secure.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 rounded-lg transition-colors text-sm mt-6"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

