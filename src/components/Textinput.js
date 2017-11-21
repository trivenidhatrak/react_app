import React,{Component} from 'react';

class Textinput extends Component{

   render(){
      return(
            <div>
            <input type={this.props.inputType} value={this.props.inputvalue} name={this.props.inputname} onChange={this.props.ChangeMethod}/>
            </div>
        )
    }
}
export default Textinput