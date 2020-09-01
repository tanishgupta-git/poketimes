import React , { Component } from 'react';
import Header from './components/header';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Posts from './components/posts.component';
class App extends Component {

render(){

    return (
      <BrowserRouter>
      <div className="App">
      <Header />
      <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/contact' component={Contact} />
       <Route path='/:post_id' component={Posts} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
