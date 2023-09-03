'use client'

import { useState, useRef, useEffect } from 'react';
import shuffleLetters from 'shuffle-letters';

export default function Shuffle ({
  id,
  text,
  className,
}: {
  id: string,
  text: string,
  className: string,
}) {

  const [isTriggerd, setIsTriggerd] = useState<boolean>(false);
  const shuffleContainer = useRef(null);
  const defaultShuffleOption = {
    iterations: 5,
    fps: 50,
    text,
  };

  const handleMouseEnter = () => {
    if (!isTriggerd) {
      setIsTriggerd(true);
      shuffleLetters(shuffleContainer.current, defaultShuffleOption);
    }
  }

  const handleMouseLeave = () => {
    setIsTriggerd(false);
  }

  useEffect(() => {
    setIsTriggerd(true);
    shuffleLetters(shuffleContainer.current, {
      ...defaultShuffleOption,
      onComplete: () => {
        setIsTriggerd(false);
      }
    });
  }, []);

  return (
    <span 
      className={className}
      id={id}
      ref={shuffleContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >{text}</span>
  );
}