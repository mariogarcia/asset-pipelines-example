//= require react.development.js
//= require react-dom.development.js
//= require_tree .

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<Button />);