import React, { useState } from 'react';
import Rating from '../Rating/';
import styles from './style.module.css';
import star from '../../assets/star.svg';
import thankyou from '../../assets/thank-you-illustration.svg';

const RatingCard: React.FC = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [rateSent, setRateSent] = useState(false);

  const handleSubmitButton = () => {
    rate && setRateSent(true);
  };

  if (!rateSent) {
    return (
      <div className={`${styles.ratingcard} ${styles.card}`}>
        <div className={styles.starcontainer}>
          <img className={styles.star} src={star} alt="" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Rating setRate={setRate} />
        <button className={styles.submitbutton} onClick={handleSubmitButton}>
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.thankyoucard} ${styles.card}`}>
      <div className={styles.illustrationcontainer}>
        <img src={thankyou} alt="" />
      </div>
      <p className={styles.rateselected}>You selected {rate} out of 5</p>
      <h1>Thank you!</h1>
      <p className={styles.thankyoutext}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default RatingCard;
