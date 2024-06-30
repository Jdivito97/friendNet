import React, { useEffect, useState, useRef } from "react";
import "../css/main.css";
import DeadPixel from "./deadPixel";
import MagicButton from "./magicButton";

const Main = () => {
  const [deadPixels, setDeadPixels] = useState([]);
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(new Audio());
  const sounds = [
    "https://www.soundjay.com/communication/sounds/modem-calling-tone-01.mp3",
    "https://www.soundjay.com/communication/sounds/dial-up-modem-01.mp3",
    "https://www.soundjay.com/communication/sounds/dial-up-modem-02.mp3",
    "https://www.soundjay.com/communication/sounds/modem-dialing-01.mp3",
    "https://www.soundjay.com/communication/sounds/modem-dialing-01.mp3",
  ];
  const playRandomSound = () => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    audioRef.current.src = sounds[randomIndex];
    audioRef.current.play();
  };
  useEffect(() => {
    const enableAudioOnInteraction = () => {
      setUserInteracted(true);
      // Play the first sound immediately upon interaction
      playRandomSound(sounds[Math.floor(Math.random() * sounds.length)]);
      // Then set an interval to play a sound every 45 seconds
      const intervalId = setInterval(() => {
        playRandomSound(sounds[Math.floor(Math.random() * sounds.length)]);
      }, 45000);

      // Cleanup function to clear the interval
      return () => {
        clearInterval(intervalId);
      };
    };

    // Add event listener for the first user interaction
    document.addEventListener("click", enableAudioOnInteraction, { once: true });

    return () => {
      document.removeEventListener("click", enableAudioOnInteraction);
      // Since the cleanup function for the interval is defined inside enableAudioOnInteraction,
      // there's no need to remove the event listener for 'ended' here as it's managed within playRandomSound.
    };
  }, [sounds]);
  //   Array of sound file paths
  //   const sounds = [
  //     "../SoundFX/dial-up-modem-01.mp3",
  //     "srcSoundFX/dial-up-modem-02.mp3",
  //     "../SoundFX/modem-calling-tone-01.mp3",
  //     "../SoundFX/modem-dialing-01.mp3",
  //     "../SoundFX/modem-dialing-02.mp3",
  //   ];

  useEffect(() => {
    const generateDeadPixels = () => {
      const pixels = [];
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        pixels.push(<DeadPixel key={i} x={x} y={y} />);
      }
      setDeadPixels(pixels);
    };

    generateDeadPixels();
    const intervalId = setInterval(generateDeadPixels, 250);

    // Select a random sound file when the component mounts
    setCurrentSoundIndex(Math.floor(Math.random() * sounds.length));

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="background">
        {deadPixels}
        <div className="glitch">
          <h1>Welcome home "Friend"</h1>
          <h3>It's been a while</h3>
        </div>{" "}
        <p>Enjoy what you have agreed to.</p>
      </div>

      <MagicButton />
    </>
  );
};

export default Main;
