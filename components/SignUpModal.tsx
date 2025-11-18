
import React, { useEffect } from 'react';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            <div 
                className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity duration-300" 
                onClick={onClose}
            ></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[440px] overflow-hidden transform transition-all scale-100 opacity-100 flex flex-col">
                {/* Header with Close Button */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Get started</h2>
                        <p className="text-gray-500 text-sm mt-1">Join Portify to build your portfolio.</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div className="px-8 pb-8">
                    {/* Social Buttons */}
                    <div className="space-y-3 mt-2">
                        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm relative group">
                             <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <span>Sign up with Google</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 bg-black text-white font-medium py-2.5 rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.48C2.7 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.23 3.93-1.14 1.03.08 1.98.57 2.68 1.31-.69 2.55 1.86 5.09 1.81 5.24l-.1.3c-.1.29-.38.85-.42.97-.55 1.56-1.33 3.23-2.98 5.55zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            <span>Sign up with Apple</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 text-gray-900" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com" 
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 text-gray-900" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 text-gray-900" 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/30 mt-4 transform hover:scale-[1.02]"
                        >
                            Create account
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account? <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Log in</a>
                    </p>
                 </div>
            </div>
        </div>
    );
};

export default SignUpModal;
