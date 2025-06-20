
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  words,
  typeSpeed = 150,
  deleteSpeed = 100,
  delaySpeed = 2000,
}: UseTypewriterProps) => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = words[currentIndex];
      
      if (isDeleting) {
        setCurrentWord(prev => prev.slice(0, -1));
      } else {
        setCurrentWord(prev => current.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % words.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentWord, currentIndex, isDeleting, words, typeSpeed, deleteSpeed, delaySpeed]);

  return currentWord;
};
