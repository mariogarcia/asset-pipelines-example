class Menu extends React.Component {
    render() {
        return (
          <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <a className="pure-menu-heading" href="#">Assets-Pipelines</a>
              <ul className="pure-menu-list">
                  <li className="pure-menu-item pure-menu-selected"><a href="index.html" className="pure-menu-link">Home</a></li>
                  <li className="pure-menu-item"><a href="about.html" className="pure-menu-link">About</a></li>
              </ul>
          </div>
        )
    }
}