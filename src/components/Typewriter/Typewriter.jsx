import { useState, useEffect } from "react";
import { BlinkingCursor, SolidCursor } from "..";

export default function Typewriter({ text, delay = 100 }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false); // New state

  useEffect(() => {
    // Add initial delay of 2 seconds before typing starts
    const initTimeout = setTimeout(() => {
      setIsInitialized(true);
    }, 2000);
    return () => clearTimeout(initTimeout);
  }, []);

  useEffect(() => {
    if (!isInitialized) return; // Don't start typing if not initialized

    let timeout;
    timeout = setTimeout(() => {
      if (currentText.length < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, delay, text, isInitialized]);

  return (
    <h1>
      {currentText}
      <span>
        {isInitialized && currentIndex < text.length ? (
          <SolidCursor />
        ) : (
          <BlinkingCursor />
        )}
      </span>
    </h1>
  );
}
