import React from "react";

const TipsAndReferral = () => {
  return (
    <section className="px-4 py-10 text-white max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#f0c059]">
        92 Coco Guide & Player Insights
      </h2>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-[#f0c059]">
          🎯 Tips for Beginners
        </h3>
        <ul className="space-y-2 text-base leading-relaxed text-gray-200">
          <li>🔐 Use a strong, private password to secure your account.</li>
          <li>🎮 Begin with low bets to learn before going all-in.</li>
          <li>📅 Check daily for new events and bonus drops.</li>
          <li>💳 Set a spending cap to stay in control of your budget.</li>
          <li>🆓 Play demo games to master skills without risking funds.</li>
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-[#f0c059]">
          💸 Referral Rewards System
        </h3>
        <ul className="space-y-2 text-base leading-relaxed text-gray-200">
          <li>🔗 Share your unique referral code via WhatsApp or SMS.</li>
          <li>🎁 Earn bonuses when your invitees join and deposit.</li>
          <li>💰 Receive a percentage of your friends’ game wins.</li>
          <li>🏆 Top the leaderboard to unlock mega referral rewards.</li>
          <li>📈 Consistent sharing = consistent passive earnings.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#f0c059]">
          📝 Personal Experience
        </h3>
        <p className="text-gray-200 leading-relaxed">
          I've personally enjoyed using 92 Coco. The UI is smooth even on older
          phones, and the variety of games keeps things exciting. Bonuses help
          offset losses, and daily spins make it fun to log in. It’s a legit way
          to mix gaming with earning potential.
        </p>
      </div>
    </section>
  );
};

export default TipsAndReferral;
