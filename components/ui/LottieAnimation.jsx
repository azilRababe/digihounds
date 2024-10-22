"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch(
        "https://lottie.host/a7afb558-8f71-41ac-b3b3-158253ca5ef7/D8wyY8z95f.json"
      );
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, []);

  return (
    <div>
      {animationData && (
        <Lottie
          loop
          play
          animationData={animationData}
          style={{ width: 500, height: 500 }}
        />
      )}
    </div>
  );
};

export default LottieAnimation;
