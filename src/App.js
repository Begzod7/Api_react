import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./Components/About";
import Online from "./Components/Online";
import Base from "./Components/Base";
import Partner from "./Components/Partner";


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Base} exact />
            <Route path="/about" component={About} />
            <Route path="/online" component={Online} />
            <Route path="/partner" component={Partner} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;