import styles from "./Rating.module.css";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

type RatingProps = {
  userRating: number;
};

export default function Rating({ userRating }: RatingProps) {
  const [starClicked, setStarClicked] = useState(false);
  const [rating, setRating] = useState(userRating);

  const handleStarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const selected = target.querySelector(`${styles.selected}`);
    if (selected) {
      selected.classList.add(`${styles.isAnimated}`, `${styles.pulse}`);
      setTimeout(() => {
        selected.classList.remove(`${styles.isAnimated}`, `${styles.pulse}`);
      }, 1000);
    }
    setStarClicked(true);
  };

  const updateStarState = (target: HTMLSpanElement) => {
    const parent = target.parentElement as HTMLElement;
    let sibling = parent.previousElementSibling as HTMLElement;

    while (sibling) {
      sibling.classList.add(`${styles.animate}`);
      sibling.querySelector("span")?.classList.add(`${styles.starColour}`);
      sibling = sibling.previousElementSibling as HTMLElement;
    }
    sibling = parent.nextElementSibling as HTMLElement;
    while (sibling) {
      sibling.classList.remove(`${styles.animate}`);
      const spans = sibling.querySelectorAll("span");

      spans.forEach((span) => {
        span.classList.remove(styles.starColour);
      });

      sibling = sibling.nextElementSibling as HTMLElement;
    }
    if (sibling == null) {
    }
  };

  const handleFullClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (starClicked) {
      setFullStarState(event.currentTarget);
      const value = parseInt(event.currentTarget.dataset.value || "0");
      setRating(value);
    }
  };

  const handleHalfClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (starClicked) {
      setHalfStarState(event.currentTarget);
      const value = parseFloat(event.currentTarget.dataset.value || "0");
      setRating(value);
    }
  };

  const handleFullHover = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!starClicked) {
      setFullStarState(event.currentTarget);
    }
  };

  const handleHalfHover = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!starClicked) {
      setHalfStarState(event.currentTarget);
    }
  };

  const setHalfStarState = (target: HTMLSpanElement) => {
    target.classList.add(`${styles.starColour}`);
    const prevSibling = target.previousElementSibling as HTMLSpanElement;
    prevSibling?.classList.add(`${styles.starColour}`);
    updateStarState(target);
  };

  const setFullStarState = (target: HTMLSpanElement) => {
    target.classList.add(`${styles.starColour}`);
    target.parentElement?.classList.add(`${styles.animate}`);
    const prevSibling = target.previousElementSibling as HTMLSpanElement;
    prevSibling?.classList.remove(`${styles.starColour}`);
    updateStarState(target);
  };

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((num) => (
        <div className={styles.star} key={num} onClick={handleStarClick}>
          <span
            className={styles.full}
            data-value={num}
            onClick={handleFullClick}
            onMouseOver={handleFullHover}
          ></span>
          <span
            className={styles.half}
            data-value={num - 0.5}
            onClick={handleHalfClick}
            onMouseOver={handleHalfHover}
          ></span>
          <span className={styles.selected}></span>
        </div>
      ))}

      <div className={styles.score}>
        <span className={styles.scoreRating}>{rating.toFixed(1)}</span>
        <span>/</span>
        <span className={styles.total}>5</span>
      </div>
    </div>
  );
}
