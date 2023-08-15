import React, { useState } from "react";
import Rating from "../Rating/";
import styles from "./style.module.css";
import star from "../../assets/star.svg";
import thankyou from "../../assets/thank-you-illustration.svg";
import { AnimatePresence, motion } from "framer-motion";

const RatingCard: React.FC = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [rateSent, setRateSent] = useState(false);

  const handleSubmitButton = () => {
    rate && setRateSent(true);
  };

  return (
    <>
      <AnimatePresence>
        {!rateSent && (
          <motion.div
            className={`${styles.ratingcard} ${styles.card}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -100,
              transitionEnd: {
                display: "none",
              },
            }}
          >
            <div className={styles.starcontainer}>
              <img className={styles.star} src={star} alt="" />
            </div>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <Rating setRate={setRate} />
            <button
              className={styles.submitbutton}
              onClick={handleSubmitButton}
            >
              Submit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {rateSent && (
          <motion.div
            className={`${styles.thankyoucard} ${styles.card}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.illustrationcontainer}>
              <img src={thankyou} alt="" />
            </div>
            <p className={styles.rateselected}>You selected {rate} out of 5</p>
            <h1>Thank you!</h1>
            <p className={styles.thankyoutext}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RatingCard;
