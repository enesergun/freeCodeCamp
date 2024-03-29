class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input:e.target.value,
      messages: this.state.messages,
    })
  };

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input} />
        <button onClick={this.submitMessage.bind(this)}> x </button>
        <ul>
          {
            this.state.messages.map((message, key)=> (
              <li key={key}>{message}</li>
            ))
          }
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};