import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Timmy extends Component {
  sendMessage = e => {
    this.props.walkieTalkie(e.target.value);
  };

  render() {
    return <input onChange={this.sendMessage} />;
  }
}

class Tommy extends Component {
  render() {
    return <p>I heard Timmy's message: "{this.props.messageFromTimmy}"</p>;
  }
}

class MrsTibble extends Component {
  state = {messageToTommy: ''};

  walkieTalkie = message => {
    this.setState({messageToTommy: message});
  };

  render() {
    return (
      <div className="App">
        <Timmy walkieTalkie={this.walkieTalkie} />
        <Tommy messageFromTimmy={this.state.messageToTommy} />
      </div>
    );
  }
}

export default MrsTibble;
