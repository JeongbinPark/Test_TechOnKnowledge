import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/views/Header/Header';
import Sidebar from './components/views/Sidebar/Sidebar';
import Footer from './components/views/Footer/Footer';
import HomePage from './components/views/HomePage/HomePage';
import MyPage from './components/views/MyPage/MyPage';
import Lecture from './components/views/Lecture/Lecture';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Sidebar />
        <article>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/lecture/:lectureId" component={Lecture} />
          </Switch>
        </article>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
