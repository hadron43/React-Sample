import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import ScrollToTop from 'utils/ScrollToTop';

import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';
import Mentor from 'pages/Mentor';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="top" />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Mentor}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
