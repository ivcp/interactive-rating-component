import React from 'react';
import style from './Rating.module.css';

const Rating = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.elements.rating.value) return;
    onSubmit(true, e.target.elements.rating.value);
  };

  return (
    <div className={style.rating}>
      <div className={style.icon}></div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All fedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div className={style.input}>
          <input type="radio" id="1" name="rating" value="1" />
          <label htmlFor="1">1</label>
          <input type="radio" id="2" name="rating" value="2" />
          <label htmlFor="2">2</label>
          <input type="radio" id="3" name="rating" value="3" />
          <label htmlFor="3">3</label>
          <input type="radio" id="4" name="rating" value="4" />
          <label htmlFor="4">4</label>
          <input type="radio" id="5" name="rating" value="5" />
          <label htmlFor="5">5</label>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Rating;
