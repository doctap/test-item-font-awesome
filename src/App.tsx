import React from 'react';
import styles from './App.module.scss';
import { RandomIcon } from './components';
import { icons } from './assets';

function App () {
  return (
    <div className={styles.App}>
      <RandomIcon delay={3000} iconNames={icons} />
    </div>
  );
}

export default App;
