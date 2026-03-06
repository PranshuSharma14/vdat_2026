import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const eventDate = new Date("2026-08-22T00:00:00");
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }); // Initialize with zeros instead of null

  useEffect(() => {
    // Calculate time difference function
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime(); // Explicit getTime() for older browsers

      if (difference > 0) {
        // Explicit math calculations for broader compatibility
        const days = Math.floor(difference / 86400000); // 1000 * 60 * 60 * 24
        const hours = Math.floor((difference % 86400000) / 3600000); // 1000 * 60 * 60
        const minutes = Math.floor((difference % 3600000) / 60000); // 1000 * 60
        const seconds = Math.floor((difference % 60000) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      } else {
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Set up interval with a try-catch for older browsers
    let timer;
    try {
      timer = setInterval(calculateTimeLeft, 1000);
    } catch (e) {
      // Fallback for very old browsers that might have issues with setInterval
      timer = setTimeout(function tick() {
        calculateTimeLeft();
        timer = setTimeout(tick, 1000);
      }, 1000);
    }

    // Clean up
    return () => {
      if (timer) {
        if (typeof timer === "number") {
          clearInterval(timer);
          clearTimeout(timer);
        }
      }
    };
  }, []);

  return (
    <section
      id="about"
      aria-label="About VDAT 2025"
      className="py-16 text-white bg-black bg-opacity-70"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">
            About VDAT 2026
          </h1>
          <p className="text-xl leading-7 text-justify">
            VDAT 2026 invites original, high-quality research papers in the
            areas of VLSI design, semiconductor devices, AI-driven hardware
            systems, advanced packaging, reliability, security, and quantum
            computing architectures. The symposium aims to bring together
            academia, industry professionals, researchers, and innovators to
            discuss emerging trends and technological advancements shaping the
            future of intelligent semiconductor systems. Authors are encouraged
            to submit unpublished work presenting novel methodologies, design
            techniques, experimental results, and system-level innovations.
            Selected papers will be presented during the conference and included
            in the proceedings.
          </p>
        </div>

        {/* Right Countdown Section */}
        <div className="w-full md:w-1/3 mx-auto flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl font-bold mb-4 text-purple-500 text-center">
            Countdown
          </h2>
          <div className="flex justify-center space-x-4">
            {Object.entries(remainingTime).map(([unit, value]) => (
              <div className="text-center" key={unit}>
                <div className="text-4xl font-bold border border-purple-500 bg-black bg-opacity-30 rounded p-2">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-sm mt-1 capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
