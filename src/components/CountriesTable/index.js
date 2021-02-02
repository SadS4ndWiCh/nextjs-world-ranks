import { useState } from 'react';

import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@material-ui/icons';
import styles from './CountriesTable.module.css';

function SortArrow({ direction }) {
  if(!direction) return <></>

  if(direction === 'desc') {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color='inherit'/>
      </div>
    )
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color='inherit'/>
      </div>
    )
  }

}

function orderBy(countries, direction) {
  if(direction === 'asc') {
    return [...countries].sort((a,b) => (a.population > b.population) ? 1 : -1);
  }
  
  if(direction === 'desc') {
    return [...countries].sort((a,b) => (a.population > b.population) ? -1 : 1);

  }

  return countries
}

export default function CountriesTable({ countries }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  
  const orderedCountries = orderBy(countries, 'desc');

  function switchDirection() {
    if(!direction) {
      setDirection('desc');
    } else if (direction === 'desc') {
      setDirection('asc');
    } else {
      setDirection();
    }
  }

  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name} onClick={switchDirection}>
          <p>Name</p>

          <SortArrow direction={direction} />
        </button>

        <button className={styles.heading_population}>
          <p>Population</p>

          <SortArrow direction={direction} />
        </button>

      </div>
      {orderedCountries.map((country, index) => (
        <div className={styles.row} key={index}>
          <div className={styles.name}>{country.name}</div>

          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  )
}