//= require react.development.js
//= require react-dom.development.js
//= require_tree ../components
//= require_tree ../layout

class Home extends React.Component {
    render() {
       return (
           <div>
             <div className="header">
                  <Menu />
                  <Hero />
              </div>
             <div className="content-wrapper">
                 <Content />
                 <Documentation />
             </div>
           </div>
       )
    }
}

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<Home />);