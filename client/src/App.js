import './App.css';
import RouteFinder from './components/RouteFinder/RouteFinder';
import Intro from './components/Intro';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  function closeIntro() {
    setShowIntro(false);
  }

  return (
    <div className="App">
      {showIntro && <Intro close={closeIntro} />}
      <Header />
      <RouteFinder />
    </div>
  );
}

export default App;
