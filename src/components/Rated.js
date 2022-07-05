import React from 'react';
import styles from './Rating.module.css';
import rated from './Rated.module.css';

const Rated = ({ rating }) => {
  return (
    <div className={`${styles.rating} ${rated.rated}`}>
      <div className={rated.image}></div>
      <h4 className={rated.selected}>You selected {rating} out of 5</h4>
      <h1>Thank you!</h1>
      <p>
        {' '}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Rated;
