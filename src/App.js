import React from "react";
import {Button} from 'antd-mobile'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { BrowserRouter as Router, Route , Link, Redirect} from 'react-router-dom';
import Home from './pages/Home'
import CityList from "./pages/CityList";
import Map from "./pages/Map";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Link to="/home">首页</Link>
      <Link to="cityList">城市选择</Link> */}
      {/* <ul>
        <li><Link to="/home">首页</Link></li>
        <li><Link to="cityList">城市选择</Link></li>
      </ul> */}
      <Route path="/home" component={Home}></Route>
      <Route path="/cityList" component={CityList}></Route>
      <Route path="/map" component={Map}></Route>
      <Route path="/" exact render={()=> <Redirect to = "/home/index"/>}></Route>
    </div>
    </Router>
  );
}

export default App;