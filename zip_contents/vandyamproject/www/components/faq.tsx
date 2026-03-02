"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is your system harmful to wildlife or the environment?",
    answer: "No, our devices are eco-friendly, non-invasive, and designed to protect natural habitats without disturbing wildlife.",
  },
  {
    question: "Do the radio collars harm or disturb the animals?",
    answer: "No, they are lightweight and ergonomically designed to avoid impacting the animals' natural behavior.",
  },
  {
    question: "What is the coverage area of your network?",
    answer:
      "Using our mesh network we can cover vast area of forest with maximum distance of 4 Km between one gateway to another gateway with a proper Line of sight.",
  },
  {
    question: "Can the system operate in remote or off-grid locations?",
    answer: "Yes, our devices function independently of mobile networks, making them ideal for remote areas.",
  },
  {
    question: "How scalable is your solution?",
    answer: "The modular design allows you to easily add more devices and gateways to cover small to very large areas as needed.",
  },
  {
    question: "What is the lead time of the products?",
    answer: "The lead time of the products is 2 months.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our wildlife monitoring system</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium underline">
              Contact us
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
