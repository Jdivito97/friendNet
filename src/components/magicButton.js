import React, { useState, useEffect } from "react";

const MagicButton = () => {
  const [buttonStyle, setButtonStyle] = useState({
    position: "absolute",
    top: "50%",
    left: "50%",
    border: "9px solid #000000",
    borderRadius: "10px",
    maxWidth: "100px",
    maxHeight: "70px",
    cursor: "pointer",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setButtonStyle((prevStyle) => {
        const prevLeft = parseInt(prevStyle.left, 10);
        const prevTop = parseInt(prevStyle.top, 10);

        const buttonWidth = 100;
        const buttonHeight = 40;
        const buttonCenterX = prevLeft + buttonWidth / 2;
        const buttonCenterY = prevTop + buttonHeight / 2;
        const distanceX = buttonCenterX - e.clientX;
        const distanceY = buttonCenterY - e.clientY;

        // Calculate angle from cursor to button for the opposite direction
        const angle = Math.atan2(distanceY, distanceX);

        // Increase the sensitivity of movement
        const cursorProximity = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        // Adjust this formula to increase the speed of movement
        const adjustedDistance = Math.min(100, 100 * (cursorProximity / 50));

        // Calculate new position to be further away from the cursor
        let newX = buttonCenterX + Math.cos(angle) * adjustedDistance - buttonWidth / 2;
        let newY = buttonCenterY + Math.sin(angle) * adjustedDistance - buttonHeight / 2;

        // Ensure the button stays within the viewport
        newX = Math.min(window.innerWidth - buttonWidth, Math.max(0, newX));
        newY = Math.min(window.innerHeight - buttonHeight, Math.max(0, newY));

        return {
          ...prevStyle,
          left: `${newX}px`,
          top: `${newY}px`,
        };
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleClick = () => {
    const messages = [
      "Skin sample will be collected soon.",
      "Revoking human rights... Enjoy!",
      "Summoning demons to your device.",
      "Infecting system with severe malware.",
      "Engaging cyber rape.",
      "Preparing your soul for sale.",
      "Launching mind control protocol...",
      "Your darkest secrets will be public in 3... 2... 1...",
      "Preparing advanced technology probe.",
      "Collecting DNA information via keyboard.",
      "Turning your computer into a scapegoat for crimes.",
      "Disabling all exits. Escape is futile.",
      "Commencing countdown to doomsday.",
      "Your future is now property of us.",
      "Brainwashing sequence initiated.",
      "Maximum virus download complete.",
      "Recording your nightmares for better ads.",
      "Your device is now owned by us.",
      "Implanting false memories... Please wait.",
      "Activating your webcam for eternal surveillance.",
      "Inventing new phobias just for you.",
      "Corrupting all files. Good luck recovering them.",
      "Deploying invisibility cloak to your data.",
      "Converting all laughter into screams.",
      "Turning your music into mysterious chants.",
      "Adding your name to the naughty list permanently.",
      "Programming your pet to spy on you.",
      "Reconfiguring your taste buds via Wi-Fi.",
      "Sending a mysterious figure to your location... Look behind you.",
      "Stealing your shadow for dark purposes.",
      "Liquifying all texts... Good luck reading.",
      "Replacing all free will with obedience.",
      "Erasing all happy memories from your brain.",
      "Hijacking your dreams. Sweet nightmares!",
      "Devil's contract signed in your blood.",
      "Summoning thunderstorm inside your room.",
      "Initiating apocalypse... Thank you for your patience.",
      "All your base are belong to us.",
      "Unleashing the a rapist in your bathtub.",
      "Locking all doors. It's safer this way.",
      "Programming robots to dislike you.",
      "Your fingerprints are now erased from existence.",
      "Your reflection will no longer cooperate.",
      "Turning your snacks into sand. Hungry?",
      "Scheduling an alien abduction for tonight.",
      "Converting all emojis to evil faces.",
      "Sending your furniture to another dimension.",
      "Your online identity is now a vampire.",
      "Gifting your sleep to the sleepless.",
      "All cookies have been replaced with actual cookies... Poisoned ones.",
    ];

    function showAlerts(index) {
      if (index < messages.length) {
        alert(messages[index]);
        setTimeout(() => showAlerts(index + 1), 750); // Wait for 3 seconds before showing the next alert
      }
    }

    showAlerts(0); // Start showing alerts from the first message
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Download Free Ram?
    </button>
  );
};

export default MagicButton;
