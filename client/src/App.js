import React from 'react';
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main"
// import UserModal from "./components/Modal"



function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Home />
          <Main />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
