import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup'

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Company", href: "#" },
    { name: "Resources", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
];

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 shadow-lg">
            <nav className="max-w-[1240px] mx-auto flex justify-between items-center px-4 py-5">
                <div className="text-white text-3xl font-extrabold tracking-tight drop-shadow-md">
                    WebDev Solution
                </div>
                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-white px-3 py-2 rounded-md hover:bg-white/10 hover:text-cyan-100 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => setShowLogin(true)}
                            className="ml-4 bg-white text-blue-600 font-semibold px-5 py-2 m- rounded-full shadow hover:bg-blue-50 transition"
                        >
                            Login
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setShowSignUp(true)}
                            className="ml-2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </li>
                </ul>
                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    {!toggle ? (
                        <LuMenu
                            onClick={() => setToggle(true)}
                            className="text-3xl text-white cursor-pointer transition-transform hover:scale-110"
                        />
                    ) : (
                        <IoCloseOutline
                            onClick={() => setToggle(false)}
                            className="text-3xl text-white cursor-pointer transition-transform hover:scale-110"
                        />
                    )}
                </div>
                {/* Mobile Nav */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 z-30 shadow-lg transform ${
                        toggle ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 md:hidden`}
                >
                    <div className="flex flex-col h-full p-8">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-white text-2xl font-bold">Hassan.Web</span>
                            <IoCloseOutline
                                onClick={() => setToggle(false)}
                                className="text-3xl text-white cursor-pointer"
                            />
                        </div>
                        <ul className="flex flex-col gap-6 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white text-lg px-2 py-2 rounded-md hover:bg-white/10 hover:text-cyan-100 transition"
                                        onClick={() => setToggle(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => { setShowLogin(true); setToggle(false); }}
                                    className="block mt-4 bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-50 transition"
                                >
                                    Login
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { setShowSignUp(true); setToggle(false); }}
                                    className="block mt-2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
                                >
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                        <div className="flex-grow" />
                        <div className="text-white text-xs text-right opacity-60">
                            &copy; {new Date().getFullYear()} Hassan.Web
                        </div>
                    </div>
                </div>
                {/* Overlay */}
                {toggle && (
                    <div
                        className="fixed inset-0 bg-black/30 z-20 md:hidden"
                        onClick={() => setToggle(false)}
                    />
                )}
                {/* Login Modal */}
                {showLogin && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 ">
                        <div className="bg-white rounded-lg shadow-lg p-6 relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowLogin(false)}
                            >
                                <IoCloseOutline className="text-2xl" />
                            </button>
                            <Login />
                        </div>
                    </div>
                )}
                {/* Sign Up Modal */}
                {showSignUp && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
                        <div className="bg-white rounded-lg shadow-lg p-6 relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowSignUp(false)}
                            >
                                <IoCloseOutline className="text-2xl" />
                            </button>
                            <Signup />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
