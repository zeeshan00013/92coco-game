import React from "react";

const Features = () => {
  return (
    <section className="py-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#f0c059c5]">
          Key Features of 92Coco Game
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "🎲 Game Variety",
              description:
                "Enjoy a wide range of games including Teen Patti, Rummy, Andar Bahar, slots, lotteries, sports betting, and fishing.",
            },
            {
              title: " 💰 VIP Program",
              description:
                "Unlock exclusive perks and faster withdrawals as you level up.",
            },
            {
              title: " 💰 Ad-Free Experience",
              description:
                "Play your favorite games without any interruptions.",
            },

            {
              title: "💰 Earning Opportunities",
              description:
                "Earn through sign-up bonuses, referrals, and friend's activities.",
            },
            {
              title: "🔐 Secure Transactions",
              description:
                "Safe and fast transactions via JazzCash and Easypaisa with advanced encryption.",
            },
            {
              title: "🎁 Bonuses & Rewards",
              description:
                "Daily bonuses, surprise gifts, lucky spins, and weekly bonuses to keep you engaged.",
            },
            {
              title: "🎁 Referral Program",
              description:
                "Earn Rs 1500 for each friend you invite to the platform.",
            },
            {
              title: "🎁 Welcome Bonus",
              description:
                "When new  player, you can receive  Welcome Bonus that helps you to make money. It includes cash  and free spins. These bonuses are given only one time right after sign-up.",
            },
            {
              title: "🌐 User Experience",
              description:
                "User-friendly interface with multi-language support and quick registration.",
            },
            {
              title: "📞 24/7 Customer Support",
              description:
                "Round-the-clock support through live chat, WhatsApp, and Telegram.",
            },
            {
              title: "🌐Betting Experience",
              description:
                "92 coco offers a variety of betting Platforms, Online Casino Games,Live Matches Betting,Live Casino",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#045316] rounded-xl shadow-lg hover:shadow-xl transition-shadow  "
            >
              <h3 className="text-xl font-semibold  text-slate-800 dark:text-white">
                {feature.title}:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 ml-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
