"use client";
import { useState } from "react";

const faqsData = [
  {
    question: "What is 92 Coco Game?",
    answer:
      "92 Coco is Pakistan's premier online gaming app where users can play casino-style games like Teen Patti, Rummy, slots, and sports betting to earn real money. It's available on Android, iOS, and web.",
  },
  {
    question: "How can I earn money from 92 Coco?",
    answer:
      "You can earn money by playing games, joining referral programs, claiming daily bonuses, and participating in lucky spins. You also earn Rs. 1500 per friend you invite.",
  },
  {
    question: "Is 92 Coco Game safe to use?",
    answer:
      "Yes, 92 Coco supports secure transactions via JazzCash and Easypaisa with strong encryption. It also uses two-factor authentication and OTP verification.",
  },
  {
    question: "How to register on 92 Coco Game?",
    answer:
      "Open the app, choose 'New Registration', verify with a Pakistani number, set a strong password, and complete the OTP-based two-factor authentication.",
  },
  {
    question: "What is the minimum deposit and withdrawal amount?",
    answer:
      "Minimum deposit is ₨500 and minimum withdrawal is ₨1000. Most deposits are completed in under 90 seconds and withdrawals take 24–48 hours via bank transfer.",
  },
  {
    question: "Are there any bonuses for new users?",
    answer:
      "Yes, new users receive a one-time Welcome Bonus that includes cash and free spins, available right after sign-up.",
  },
  {
    question: "What kind of games are available?",
    answer:
      "Games include Teen Patti, Rummy, Andar Bahar, Slots, Lotteries, Fishing Games, Sports Betting, and Live Casino experiences.",
  },
  {
    question: "Does the app contain ads?",
    answer:
      "No, 92 Coco provides an ad-free gaming experience so users can enjoy uninterrupted play.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, 92 Coco offers 24/7 customer support via live chat, WhatsApp, and Telegram.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-4 py-10 text-white max-w-5xl mx-auto text-center w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#f0c059]">
        92 Coco Game – FAQs
      </h2>
      <div className="space-y-4 ">
        {faqsData.map((faq, index) => (
          <div key={index} className="border rounded-2xl shadow-sm max-w-5xl">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-gray-800rounded-b-2xl hover:bg-gray-700 transition-all duration-200 rounded-t-2xl"
            >
              <span className="text-base sm:text-lg font-medium">
                {faq.question}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-400 bg-[#0e0f26] rounded-b-2xl text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
