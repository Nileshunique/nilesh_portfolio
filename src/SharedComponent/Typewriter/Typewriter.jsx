/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';

const Typewriter = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_BETWEEN_TEXTS = 1000;

  const typeText = useCallback(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (!isDeleting && displayText !== currentFullText) {
      setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
    } else if (isDeleting && displayText !== '') {
      setDisplayText(prev => prev.slice(0, -1));
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    } else {
      setTimeout(() => setIsDeleting(true), PAUSE_BETWEEN_TEXTS);
    }
  }, [currentTextIndex, displayText, isDeleting, texts]);

  useEffect(() => {
    const timer = setTimeout(
      typeText,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );
    return () => clearTimeout(timer);
  }, [typeText, isDeleting]);

  useEffect(() => {
    const cursorTimer = setTimeout(() => {
      setShowCursor(prev => !prev);
    }, showCursor ? 500 : 500);
    return () => clearTimeout(cursorTimer);
  }, [showCursor]);

  return (
    <div>
      <p>
        {displayText}
        <span>{showCursor ? '|' : '\u00A0'}</span>
      </p>
    </div>
  );
};

export default Typewriter;



/*
import { useState, useEffect } from "react";

const Typewriter = (props) => {
  const { texts } = props;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = 100; // milliseconds per character
    const deletingSpeed = 50; // milliseconds per character
    const pauseBetweenTexts = 1000; // milliseconds

    const typeText = () => {
      const currentFullText = texts[currentTextIndex];

      if (!isDeleting && displayText !== currentFullText) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== "") {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
      }
    };

    const timer = setTimeout(
      typeText,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentTextIndex, displayText, isDeleting]);

  useEffect(() => {
    if (showCursor) {
      setTimeout(() => {
        setShowCursor(false);
      }, 200);
    } else {
      setTimeout(() => {
        setShowCursor(true);
      }, 500);
    }
  }, [showCursor]);

  return (
    <div>
      <p>
        {displayText}
        <span>{showCursor ? "|" : <>&nbsp;</>}</span>
      </p>
    </div>
  );
};

export default Typewriter;

*/