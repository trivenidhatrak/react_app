import React, { Component } from 'react';
import './App.css';
import Textinput from './components/Textinput.js';
import Mybutton from './components/Mybutton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     firstInt : '',
     secondInt : ''
    }
    this.updateState = this.updateState.bind(this);
    this.updateStateSecond = this.updateStateSecond.bind(this);
    this.handleSwap = this.handleSwap.bind(this);
}
updateState(e) {
  this.setState({firstInt: e.target.value});
}
updateStateSecond(event) {
  this.setState({secondInt: event.target.value});
}
handleSwap() {
  if(this.state.firstInt === "" || this.state.secondInt==="")
  {
    alert('Enter Values');
  }
  else 
  {
    const ans =parseInt(this.state.firstInt)+parseInt(this.state.secondInt) ;
    alert('Answer ='+ans);
  }

}

render() {
    return (<div>
      <h1>Addition of two digits </h1>
      First No :<Textinput inputType="text" inputname="txtfirst" inputvalue={this.state.firstInt} ChangeMethod={this.updateState} />
      Second No :<Textinput inputType="text" inputname="txtsecond" inputvalue={this.state.senconInt}   ChangeMethod={this.updateStateSecond} />
      <Mybutton inputname="btnswap" btnvalue = "Add"  clickMethod={this.handleSwap} />
    </div>
    )
  }
}

export default App;
