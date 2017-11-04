import React from 'react';

import Parklivicon from '../../images/Parklivicon.png';

class Header extends React.Component{
	render() {
    	return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <a href="/" className="navbar-brand">
                <img src={Parklivicon} />
              </a>
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
              </ul>
          </div>
        </nav>
		);
	}
};

export default Header;
