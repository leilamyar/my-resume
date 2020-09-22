import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { 
  Home,
  AboutMe,
  AboutThis, 
  ChronologicalView, 
} from './pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/about-this' component={AboutThis} />
        <Route path='/chrono-view' component={ChronologicalView} />
      </div>
    </BrowserRouter>
  );
}

export default App;
