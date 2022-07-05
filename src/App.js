import Card from './components/Card';
import Rating from './components/Rating';
import Rated from './components/Rated';
import style from './App.module.css';
import { useState } from 'react';

function App() {
  const [rated, setRated] = useState(false);
  const [selectedRating, setSelectedRating] = useState();

  const ratedHandler = (isRated, number) => {
    setRated(isRated);
    setSelectedRating(number);
  };
  return (
    <main className={style.container}>
      <Card>
        {!rated ? (
          <Rating onSubmit={ratedHandler} />
        ) : (
          <Rated rating={selectedRating} />
        )}
      </Card>
      <div className={style.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/ivcp">ivcp</a>.
      </div>
    </main>
  );
}

export default App;
