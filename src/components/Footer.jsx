import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">WebDev Solutions</h2>
                    <p className="text-sm mt-2">
                        Empowering your business with modern web development services.
                    </p>
                </div>
                <div className="flex space-x-8">
                    <div>
                        <h3 className="font-semibold mb-2">Services</h3>
                        <ul className="text-sm space-y-1">
                            <li>Custom Websites</li>
                            <li>UI/UX Design</li>
                            <li>SEO Optimization</li>
                            <li>Maintenance</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <ul className="text-sm space-y-1">
                            <li>Email: info@webdevsolutions.com</li>
                            <li>Phone: (123) 456-7890</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} WebDev Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;