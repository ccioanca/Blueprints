import { useEffect, useState } from "react";

interface TypewriterProps {
  typeData: Array<string>; // Required prop
  typeTime?: number; // Optional prop
  className?: string; // Optional prop
}

const Typewriter = ({ typeData, typeTime = 2000, className }: TypewriterProps) => {
    const [displayText, setDisplayText] = useState("");
    const [isDeletingText, setIsDeletingText] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    function randomInterval(max: number, min: number){
        return (Math.random() * (max - min) + min);
    }

    useEffect(() => {
        const currentWord = typeData[wordIndex];

        // If we haven't finished typing the current word
        if (charIndex < currentWord.length && !isDeletingText) {
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + currentWord[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, randomInterval(100, 50)); // Speed of typing

            return () => clearTimeout(timer);
        }
        else if(charIndex == currentWord.length && !isDeletingText){
            console.log("set deleting");
            const timer = setTimeout(() => {
                setIsDeletingText(true);
            }, typeTime);

            return () => clearTimeout(timer);
        }
        else if(charIndex > 0 && isDeletingText) {
            console.log("start deleting");
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev.substring(0, prev.length - 1));
                setCharIndex((prev) => prev - 1);
            }, 50); // Speed of deleting

            return () => clearTimeout(timer);
        }
        else {
            console.log("else");
            // Word is finished, wait for typeTime then move to next word
            const timer = setTimeout(() => {
                setDisplayText("");
                setCharIndex(0);
                setWordIndex((prev) => (prev + 1) % typeData.length);
                setIsDeletingText(false);
            }, randomInterval(750, 500));

            return () => clearTimeout(timer);
        }
    }, [charIndex, wordIndex, typeData, typeTime, isDeletingText]);

    return(
        <span className={className}>
            <span className="pr-px caret">{displayText}</span>
        </span>
    );
}


export default Typewriter;