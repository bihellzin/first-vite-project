import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

interface RatingProps {
  setRate: React.Dispatch<React.SetStateAction<number | null>>;
}

const Rating: React.FC<RatingProps> = ({ setRate }) => {
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const rates = [1, 2, 3, 4, 5];

  useEffect(() => {
    selectedRate && setRate(selectedRate);
  }, [selectedRate]);

  const handleClickRate = (rate: number) => {
    rate !== selectedRate && setSelectedRate(rate);
    rate === selectedRate && setSelectedRate(null);
  };

  return (
    <div className={styles.rating}>
      {rates.map((rate) => (
        <button
          key={rate}
          className={`${selectedRate === rate && styles.selectedrate}`}
          onClick={() => handleClickRate(rate)}
        >
          {rate}
        </button>
      ))}
    </div>
  );
};

export default Rating;
