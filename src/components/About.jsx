import React from "react";

const About = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 md:px-0">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Welcome to our landing page! We are passionate about delivering the best digital experiences. Our team is dedicated to creating beautiful, responsive, and user-friendly web solutions tailored to your needs.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
                        <p className="text-gray-500">
                            To empower businesses with modern web technologies and creative design.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h3>
                        <p className="text-gray-500">
                            Innovation, collaboration, and customer satisfaction are at the heart of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;