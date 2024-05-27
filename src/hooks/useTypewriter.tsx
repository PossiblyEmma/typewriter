import { useEffect, useRef, useState } from "react";

type UseTypewriterOptions = { text: string; charactersPerSecond?: number };

export const useTypeWriter = ({
  text,
  charactersPerSecond = 2,
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
