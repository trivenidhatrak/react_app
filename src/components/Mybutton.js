import React,{Component} from 'react'

class Mybutton extends Component{
    render(){
        return (
            <div>
            <button name={this.props.btnname}  onClick={this.props.clickMethod}>{this.props.btnvalue}</button>
            </div>
        )
    }
}
export default Mybutton