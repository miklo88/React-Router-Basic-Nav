import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <BrowswerRouter>
    <link to='/'>Home</link>
    <link to='/About.js'>About</link>
    <link to='/Contact.js'>Contact</link>
    </BrowswerRouter> */}
      <Navigation />
      <Route path='/' component={Home} />
      <Route path='/About.js' component={About} />
      <Route path='/Contact.js' component={Contact} />
    </div>

  );
};
export default App;