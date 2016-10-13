var React = require('react');
var Nav = require('Nav');

// this.props.children loads child components into Main component
// Child components are defined in <Route/> tags in app.jsx
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;

// ES5 syntax takes a JavaScript object of methods as an input for React.createClass();
