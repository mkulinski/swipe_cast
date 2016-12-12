import React from 'react';
import Nav from './Nav';
import styles from '../stylesheets/mainStyle';

const App = () => {
  return (
    <div>
      <Nav />
      <h1 style={styles.text}>
        Main App Container
      </h1>
    </div>
  );
};

export default App;
