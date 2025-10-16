"use client";
import React, { useState } from "react";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function LoginInterface({ onForgotPassword }: { onForgotPassword: any }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Login submitted:", { email, password, rememberMe });
  };

  const forgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 sm:p-6 my-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
        {/* Logo */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
           <Image src={"/logo_02.jpg"} alt="logo" width={35} height={35}/>
            <div>
              <div className="font-bold text-sm sm:text-base">BHN ENGLISH HR SEC SCHOOL</div>
              <div className="text-xs text-gray-500">LOGIN PORTAL</div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-3 sm:mb-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            Welcome Back!
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            It's good to have you back on lawyeredup, kindly sign in to your
            account below
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          {/* Email Input */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-xs sm:text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-xs sm:text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <button
              onClick={() => forgotPassword()}
              className="text-teal-700 hover:text-teal-800 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm"
          >
            Sign in
          </button>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-2 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10.2V12.05H15.6109C15.3818 13.3 14.6727 14.3591 13.6045 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z"
                fill="#4285F4"
              />
              <path
                d="M10.2 20C12.9 20 15.1727 19.1045 16.8273 17.5773L13.6045 15.0682C12.7091 15.6682 11.5636 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.58182 11.9H1.25455V14.4909C2.90909 17.7591 6.30909 20 10.2 20Z"
                fill="#34A853"
              />
              <path
                d="M4.58182 11.9C4.38182 11.3 4.26818 10.6591 4.26818 10C4.26818 9.34091 4.38182 8.7 4.58182 8.1V5.50909H1.25455C0.572727 6.85909 0.181818 8.38636 0.181818 10C0.181818 11.6136 0.572727 13.1409 1.25455 14.4909L4.58182 11.9Z"
                fill="#FBBC04"
              />
              <path
                d="M10.2 3.97727C11.6864 3.97727 13.0227 4.48182 14.0727 5.47273L16.9364 2.60909C15.1682 0.990909 12.8955 0 10.2 0C6.30909 0 2.90909 2.24091 1.25455 5.50909L4.58182 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z"
                fill="#E94235"
              />
            </svg>
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-3">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-teal-700 hover:text-teal-800 font-medium"
            >
              Create now
            </a>
          </p>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500 mt-2 leading-relaxed">
            By signing in, you agree to{" "}
            <a href="#" className="text-teal-700 hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-teal-700 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginInterface;
