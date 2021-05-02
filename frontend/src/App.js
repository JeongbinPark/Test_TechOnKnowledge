import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/views/HomePage/HomePage';
import Header from './components/views/Header/Header';
import Sidebar from './components/views/Sidebar/Sidebar';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
