class Button extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <a href={this.props.link} className="pure-button pure-button-primary">
        {this.props.text}
      </a>
    )
  }
}