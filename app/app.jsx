var React = require('react');
var ReactDOM = require('react-dom');

// Accesses property from react-router and assigns it to variable. Ex: var Route = require('react-router').Route
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Imports all the components so they can be references in the router.
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Careers = require('Careers');

ReactDOM.render(
  // Sets / path to Main component which loads in the child components.
  // NOTE: The child routes are self-closing tags as opposed to the Main route.
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <Route path="careers" component={Careers}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>
  , document.getElementById('app'));
