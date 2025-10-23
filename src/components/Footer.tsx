import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { icons } from '@/lib/icons';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white text-sm font-bold">B</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900"></span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Comprehensive school management system for modern educational institutions.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <span className='w-5 h-5'>{icons.twitter}</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <span className='w-5 h-5'>{icons.facbook}</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <span className='w-5 h-5'>{icons.Linkdin}</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <span className='w-5 h-5'>{icons.Instagram}</span>
                            </a>
                        </div>
                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span>info@BHN1024.edu</span>
                            </div>
                        </div>
                    </div>

                    {/* Features Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Features</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Student Management</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Attendance Tracking</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Grade Management</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Timetable Scheduler</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Fee Management</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Library System</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Admissions</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Staff Portal</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Student Portal</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Calendar</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">News & Events</a></li>
                        </ul>
                    </div>

                    {/* Resources & Support Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">User Guides</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a></li>

                        </ul>
                        <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact Support</a></li>

                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>© 2025 BHN HR SEC ENGLISH SCHOOL. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}