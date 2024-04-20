import React, { useEffect } from "react";
import CountUp from "react-countup";

function VolunteerAnimation() {
  useEffect(() => {
    // Simulate fetching data or a timer to trigger the animation
    const timer = setTimeout(() => {
      // Trigger the CountUp animation to go from 0 to 5000 in 2 seconds
      // You can adjust the duration and other props as needed
      return () => clearTimeout(timer);
    }, 1000); // Delay the animation by 1 second
  }, []);

  const countingStyle = {
    fontWeight: 1000,
    fontSize: "28px",
  };

  return (
    <div>
      <CountUp
        end={500}
        duration={2}
        useEasing={true}
        separator=","
        prefix=""
        style={countingStyle}
      />
      <span style={{ fontSize: "30px", fontWeight: "bold" }}>+</span>
    </div>
  );
}

export default VolunteerAnimation;
