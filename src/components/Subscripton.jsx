import React from "react";

const plans = [
    {
        name: "Basic",
        price: "$49/mo",
        features: [
            "1 Website",
            "Basic Support",
            "Responsive Design",
            "3 Revisions",
        ],
        bg: "bg-white",
        border: "border-gray-200",
        text: "text-gray-900",
        button: "bg-blue-500 text-white hover:bg-blue-600",
    },
    {
        name: "Premium",
        price: "$99/mo",
        features: [
            "Up to 5 Websites",
            "Priority Support",
            "Advanced Design",
            "10 Revisions",
            "SEO Optimization",
        ],
        bg: "bg-blue-50",
        border: "border-blue-400",
        text: "text-blue-900",
        button: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
        name: "Diamond",
        price: "$199/mo",
        features: [
            "Unlimited Websites",
            "24/7 Dedicated Support",
            "Custom Design",
            "Unlimited Revisions",
            "SEO & Analytics",
            "E-commerce Integration",
        ],
        bg: "bg-gradient-to-br from-blue-600 to-blue-400",
        border: "border-blue-700",
        text: "text-white",
        button: "bg-white text-blue-700 hover:bg-gray-100",
    },
];

const Subscription = () => (
    <section className="py-16 bg-gray-50" id="subscription">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
                Web Development Subscription Plans
            </h2>
            <p className="text-center text-gray-600 mb-12">
                Choose the plan that fits your business needs. All plans include professional web development services.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`rounded-xl shadow-lg p-8 border-2 ${plan.bg} ${plan.border} ${plan.text} flex flex-col items-center`}
                    >
                        <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold mb-4">{plan.price}</div>
                        <ul className="mb-6 space-y-2">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <span className="mr-2 text-blue-500">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`mt-auto px-6 py-2 rounded-lg font-semibold transition ${plan.button}`}
                        >
                            Choose {plan.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Subscription;