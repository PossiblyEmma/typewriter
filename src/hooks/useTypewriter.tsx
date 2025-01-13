import { useEffect, useRef, useState } from "react";

type UseTypewriterOptions = {
  // The full text to be rendered using the typewriter effect.
  text: string;
  // Characters to return per second. Defaults to 5.
  charactersPerSecond?: number;
};

/**
 * A typewriter effect hook.
 *
 * Returns input text character-by-character with an option
 * to control the typing speed.
 */
export const useTypeWriter = ({
  text,
  charactersPerSecond = 5,
}: UseTypewriterOptions): string => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const typingDelay = (1 / charactersPerSecond) * 1000;

  const intervalRef = useRef<number>();

  useEffect(() => {
    const cleanup = () => {
      clearInterval(intervalRef.current);
    };

    if (displayedText === text) return cleanup;

    cleanup();
    intervalRef.current = setInterval(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, typingDelay);

    return cleanup;
  }, [displayedText, text, typingDelay]);

  return displayedText;
};
