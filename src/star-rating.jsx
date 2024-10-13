import "./styles.css";

const StarRating = ({
  maxRating,
  currentRating,
  hoverRating,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className="star-rating-container">
      {[...Array(maxRating)].map((_, idx) => {
        const ratingValue = idx + 1;

        return (
          <p
            className={`star ${
              ratingValue <= (hoverRating || currentRating) ? "active" : ""
            }`}
            onClick={() => onClick(ratingValue)}
            onMouseEnter={() => onMouseEnter(ratingValue)}
            onMouseLeave={onMouseLeave}
            key={idx}
          >
            &#9733;
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
