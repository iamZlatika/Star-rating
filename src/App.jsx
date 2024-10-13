import "./App.css";
import StarRating from "./star-rating";
import { useState, useCallback } from "react";

export default function App() {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = useCallback((ratingValue) => {
    setCurrentRating(ratingValue);
  }, []);

  const handleMouseEnter = useCallback((ratingValue) => {
    setHoverRating(ratingValue);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverRating(0);
  }, []);

  return (
    <main>
      <p>Current Product Rating: {currentRating}</p>
      <StarRating
        maxRating={5}
        currentRating={currentRating}
        hoverRating={hoverRating}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </main>
  );
}
