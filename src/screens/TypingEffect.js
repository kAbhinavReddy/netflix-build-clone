import React, { useState, useEffect } from 'react';

const TypingEffect = (props) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const x=props.text
    const y= x.substr(0,1)+" "+x.substr(1,x.length)
    const textToType = y

    let currentCharacterIndex = 0;

    const typingInterval = setInterval(() => {
      // Add the next character to the displayed text
      setDisplayText((prevText) => prevText + textToType[currentCharacterIndex]);

      // Move to the next character
      currentCharacterIndex++;

      // Check if we've reached the end of the text
      if (currentCharacterIndex === textToType.length-1) {
        clearInterval(typingInterval); // Stop the typing interval
      }
    }, props.speed || 500); // Use the provided speed or default to 100 milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, [props.text, props.speed]);



  return <div>{displayText}</div>;
};

export default TypingEffect;
