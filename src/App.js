import React from 'react';
import './App.css';

import AppMenu from './components/AppMenu';
import Lists from './components/Lists';

import 'typeface-roboto';

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Lists />
    </div>
  );
}

export default App;
