const GameStatistics = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#f0c059]">
        92COCO Statistics
      </h2>

      <p className="text-gray-100 mb-6 text-lg leading-relaxed">
        The <strong>92COCO Statistics</strong> section gives users a clear
        summary of their daily betting activity across different game types
        including <strong>Lottery</strong>,<strong> Video</strong>, and{" "}
        <strong>Slot</strong>. It displays the <strong>total bet amount</strong>
        ,<strong> number of bets</strong>, and <strong>winning amount</strong>{" "}
        for each game, helping players easily track their gaming performance.
        Users can switch between views like
        <strong> Today</strong>, <strong>Yesterday</strong>,{" "}
        <strong>This Week</strong>, and <strong>This Month</strong> to analyze
        their progress and betting trends over time. This feature adds
        transparency and keeps players informed about their gameplay results.
      </p>

      <ul className="list-disc pl-6 text-gray-100 space-y-2 text-base">
        <li>Tracks total amount bet for each.</li>
        <li>Shows number of bets placed per game type.</li>
        <li>Displays total winnings in real time.</li>
        <li>Tabs to view data by day, week, or month.</li>
        <li>Supports games like Lottery, Video, and Slots.</li>
      </ul>
    </section>
  );
};

export default GameStatistics;
