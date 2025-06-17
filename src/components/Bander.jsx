import React, { useState, useRef, useEffect } from "react";

const slides = [
    {
        title: "Modern Web Development",
        desc: "Build fast, responsive, and scalable websites with the latest technologies.",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Custom Solutions",
        desc: "Tailored web applications to fit your business needs.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "SEO & Performance",
        desc: "Optimized for search engines and lightning-fast load times.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
];

const Bander = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(
            () => setCurrent((prev) => (prev + 1) % slides.length),
            4000
        );
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {slides.map((slide, idx) => (
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    key={idx}
                    style={{ backgroundImage: `url(${slide.img})` }}
                >
                    <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                        <p className="text-lg md:text-2xl text-white drop-shadow">{slide.desc}</p>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${idx === current ? "bg-white scale-125" : "bg-white/50"}`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bander;