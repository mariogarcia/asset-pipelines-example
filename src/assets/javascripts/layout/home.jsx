//= require content.jsx
//= require header.jsx
//= require docs.jsx

class Home extends React.Component {
    render() {
       return (
           <div>
             <Header />
             <div className="content-wrapper">
                 <Content />
                 <Documentation />
             </div>
           </div>
       )
    }
}