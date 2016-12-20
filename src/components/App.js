import React from 'react';
import Nav from './Nav';
import UsersDashboard from './UsersDashboard';

const App = () => {
  return (
    <div>
      <Nav />
      <h1>Main App Container</h1>
      <UsersDashboard />
    </div>
  );
};

export default App;
