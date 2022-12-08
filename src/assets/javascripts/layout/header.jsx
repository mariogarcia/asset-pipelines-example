class Header extends React.Component {
   render() {
      return (
          <div>
              <div className="header">
                  <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                      <a className="pure-menu-heading" href="#">GQL</a>

                      <ul className="pure-menu-list">
                          <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Documentation</a></li>
                          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Github</a></li>
                      </ul>
                  </div>
              </div>
              <div className="splash-container">
                  <div className="splash">
                      <h1 className="splash-head">GQL</h1>
                      <p className="splash-subhead">
                          GQL is a Groovy library for creating GraphQL applications
                      </p>
                      <p>
                          <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
                      </p>
                  </div>
              </div>
          </div>
      )
   }
}