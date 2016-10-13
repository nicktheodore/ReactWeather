var React = require('react');
// Creates link variable var Link = require('react-router').Link;
var {Link, IndexLink} = require('react-router');

// Creates the link elements and assigns them to a path

var Nav = React.createClass({
  render: function() {
    return(
      <div>
        <h2>Navigation Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        <Link to="/careers" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Careers</Link>
      </div>
    );
  }
});

module.exports = Nav;
