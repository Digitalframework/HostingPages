import styles from './Rating.module.css'
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Rating() {
    
  const [starClicked, setStarClicked] = useState(false);
  const [rating, setRating] = useState(0);
  
  const handleStarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const selected = target.querySelector(`.${styles.selected}`);
    if (selected) {
      selected.classList.add(styles.isAnimated, styles.pulse);
      setTimeout(() => {
        selected.classList.remove(styles.isAnimated, styles.pulse);
      }, 1000);
    }
    setStarClicked(true);
  }

  const updateStarState = (target: HTMLSpanElement) => {
    const parent = target.parentElement as HTMLElement;
    let sibling = parent.previousElementSibling as HTMLElement
    
    while (sibling) {
      sibling.classList.add(styles.animate);
      const spans = sibling.querySelectorAll('span');
      
      spans.forEach(span => {
        span.classList.add(styles.starColour); // add the class from both spans
      });
      
      sibling = sibling.previousElementSibling as HTMLElement;
    }
    //sibling = target.nextElementSibling as HTMLElement;
    sibling = parent.nextElementSibling as HTMLElement;
    while (sibling) {
      sibling.classList.remove(styles.animate);
      const spans = sibling.querySelectorAll('span');
      
      spans.forEach(span => {
        span.classList.remove(styles.starColour); // Remove the class from both spans
      });
      
      sibling = sibling.nextElementSibling as HTMLElement;
    }

  }

  const handleFullClick = (event: React.MouseEvent<HTMLDivElement>) => {
    
    let target = event.currentTarget;
    let element = target.parentElement as HTMLSpanElement;
    setFullStarState(element);
    const value = parseInt(target.dataset.value || "0");
    setRating(value);
  };

  const handleHalfClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    let target = event.currentTarget as HTMLSpanElement;
    setHalfStarState(target);
    const value = parseFloat(target.dataset.value || "0");
    setRating(value);
    
  };

  const handleFullHover = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!starClicked) {
      setFullStarState(event.currentTarget.parentElement as HTMLSpanElement);
    } 
  };

  const handleHalfHover = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!starClicked) {
      setHalfStarState(event.currentTarget);
    }
  };

  const setHalfStarState = (target: HTMLSpanElement) => {
    target.classList.add(styles.starColour);
    updateStarState(target);
  }

  const setFullStarState = (target: HTMLSpanElement) => {
    target.classList.add(styles.starColour);
    const selected = target.parentElement?.querySelector(`.${styles.selected}`) as HTMLSpanElement;
    selected.classList.add(styles.starColour);
    target.parentElement?.classList.add(styles.animate);
    const prevSibling = target.previousElementSibling as HTMLSpanElement;
    prevSibling?.classList.remove(styles.starColour);
    updateStarState(target);
  }

  
  return (
    <div className={styles.rating}>
      {[0,1, 2, 3, 4, 5].map((num) => (
        <div className={num === 0 ? styles.starHidden : styles.star} key={num} onClick={handleStarClick}>
          <span
            className={styles.full}
          >
            <div className={styles.fullArea}
              data-value={num}
              onClick={handleFullClick}
              onMouseOver={handleFullHover}/>
          </span>
          <span
            className={styles.half}
            data-value={num - 0.5}
            onClick={handleHalfClick}
            onMouseOver={handleHalfHover}
          />
          
          <span className={styles.selected}/>
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