//= require react.development.js
//= require react-dom.development.js
//= require_tree ../components
//= require_tree ../layout

class About extends React.Component {
    render() {
       return (
        <div>
          <div className="header">
              <Menu />
          </div>
          <div className="content-wrapper-no-home">
            <a href="index.html">Back to Home</a>
          </div>
        </div>
       )
    }
}

ReactDOM.createRoot(document.getElementById("app")).render(<About />);