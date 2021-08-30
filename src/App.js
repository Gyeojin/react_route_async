import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Router는 연결되는 컴포넌트 전체를 감싸준다
//Route는 연결되는 컴포넌트 각각에 속성을 지정하여 연결 경로를 지정한다

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Movie from "./components/Movie";
import Detail from "./components/Detail";

import "./style/App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path='/' exact component={Home} />
        {/* '/'를 기준으로 나타나는 페이지를 모두 표시한다 */}
        {/* 즉 '/about'에도 '/'가 있기 때문에 Home과 함께 인식된다 */}
        {/* exact 속성을 사용하면 '/'를 고유하게 인식하여 정확하게 일치하는 경로만 표시한다 */}
        <Route path='/about' component={About} />
        <Route path='/movie' exact component={Movie} />
        <Route path='/movie/:id' component={Detail} />
      </div>
    </Router>
  );
}

export default App;
