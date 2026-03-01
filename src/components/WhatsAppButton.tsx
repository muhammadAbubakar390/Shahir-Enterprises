import { motion } from 'framer-motion';

export function WhatsAppButton() {
    const phoneNumber = "923214281313";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

            <img
                src="/whatsapp-logo.svg"
                alt="WhatsApp"
                className="w-10 h-10 brightness-0 invert group-hover:scale-110 transition-transform"
            />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                Chat with us on WhatsApp
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
            </div>
        </motion.a>
    );
}
