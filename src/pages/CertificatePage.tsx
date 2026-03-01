import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CertificatePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center">
                    <Link
                        to="/"
                        className="inline-flex items-center text-[#1e3a5f] hover:text-[#00bcd4] transition-colors font-medium"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 lg:p-8 rounded-2xl shadow-2xl border border-gray-100"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#1e3a5f]">ISO 9001:2015 Certified</h1>
                        <p className="text-gray-600 mt-2">Official Certification for Shahir Enterprises</p>
                    </div>

                    <div className="relative group overflow-hidden rounded-xl border-4 border-gray-50">
                        <img
                            src="/ISO-9001-SHAHIR-ENTERPRISES-5.jpg"
                            alt="ISO 9001 Certificate"
                            className="w-full h-auto shadow-inner"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
