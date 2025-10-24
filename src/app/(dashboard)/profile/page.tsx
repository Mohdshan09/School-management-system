"use client"

import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Building2, MapPin, Edit2, Shield, Users, BookOpen, GraduationCap, ClipboardList } from 'lucide-react';

export default function SchoolAdminProfile() {
    const [profile] = useState({
        name: 'Dr. Sarah Johnson',
        role: 'Principal',
        status: 'Active',
        employeeId: 'ADM-2024-001',
        email: 'sarah.johnson@schoolname.edu',
        phone: '+1 555-123-4567',
        emergencyContact: '+1 555-987-6543',
        joinDate: '08/15/2018',
        dateOfBirth: '03/22/1975',
        qualification: 'Ph.D. in Educational Leadership',
        experience: '15 Years',
        department: 'Administration',
        address: {
            street: '456 Education Avenue',
            city: 'Boston',
            state: 'Massachusetts',
            country: 'USA',
            postalCode: '02101'
        },
        permissions: [
            { module: 'Student Management', access: 'Full Access' },
            { module: 'Staff Management', access: 'Full Access' },
            { module: 'Finance & Accounts', access: 'Full Access' },
            { module: 'Academic Records', access: 'Full Access' },
            { module: 'Attendance System', access: 'Full Access' },
            { module: 'Examination Module', access: 'Full Access' }
        ],
        recentActivities: [
            { date: '03/20/2025', action: 'Approved 15 leave applications', category: 'Staff Management' },
            { date: '03/19/2025', action: 'Updated academic calendar for Q2', category: 'Academic' },
            { date: '03/18/2025', action: 'Reviewed and approved budget proposal', category: 'Finance' },
            { date: '03/17/2025', action: 'Conducted staff meeting - 45 attendees', category: 'Administration' },
            { date: '03/16/2025', action: 'Approved new course curriculum', category: 'Academic' }
        ],
        statistics: {
            totalStudents: 1250,
            totalStaff: 85,
            totalClasses: 42,
            activeCourses: 28
        }
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                                {profile.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                                <p className="text-gray-600 mt-1">{profile.role} • {profile.department}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        ✓ {profile.status}
                                    </span>
                                    <span className="text-sm text-gray-500">ID: {profile.employeeId}</span>
                                </div>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                            <Edit2 size={16} />
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Students</p>
                                <p className="text-2xl font-bold text-gray-900">{profile.statistics.totalStudents}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Users className="text-blue-600" size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Staff</p>
                                <p className="text-2xl font-bold text-gray-900">{profile.statistics.totalStaff}</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <GraduationCap className="text-purple-600" size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Classes</p>
                                <p className="text-2xl font-bold text-gray-900">{profile.statistics.totalClasses}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <BookOpen className="text-green-600" size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Active Courses</p>
                                <p className="text-2xl font-bold text-gray-900">{profile.statistics.activeCourses}</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <ClipboardList className="text-orange-600" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
                            <div className="space-y-3">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Employee ID</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.employeeId}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Email</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.email}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Phone Number</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.phone}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Emergency Contact</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.emergencyContact}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Date of Birth</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.dateOfBirth}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Join Date</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.joinDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Details */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Professional Details</h2>
                            <div className="space-y-3">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Role</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.role}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Department</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.department}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Qualification</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.qualification}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Experience</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.experience}</span>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Address</h2>
                            <div className="space-y-3">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Street Address</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.address.street}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">City</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.address.city}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">State</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.address.state}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Country</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.address.country}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-500">Postal Code</span>
                                    <span className="text-sm font-medium text-gray-900">{profile.address.postalCode}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* System Permissions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Shield className="text-indigo-600" size={20} />
                                System Permissions & Access
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Module</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Access Level</th>
                                            <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {profile.permissions.map((perm, idx) => (
                                            <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-sm text-gray-900">{perm.module}</td>
                                                <td className="py-3 px-4">
                                                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                                        {perm.access}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-right">
                                                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                                                        Modify
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
                            <div className="space-y-4">
                                {profile.recentActivities.map((activity, idx) => (
                                    <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-0">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <ClipboardList className="text-indigo-600" size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-xs text-gray-500">{activity.date}</span>
                                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                                    {activity.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium text-gray-700">
                                    View Reports
                                </button>
                                <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium text-gray-700">
                                    Manage Staff
                                </button>
                                <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium text-gray-700">
                                    Manage Students
                                </button>
                                <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium text-gray-700">
                                    View Calendar
                                </button>
                                <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium text-gray-700">
                                    Finance Module
                                </button>
                                <button className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium text-gray-700">
                                    Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}