import React, { Component } from 'react'


class test extends Component{
    
    constructor(props){
        super(props);
        this.state=
        {
           name:this.props.name
        }

    }

    onclickevent=()=>
    {
        console.log("Button clicked");
        this.setState({name:"rama"})
    }
    render()
    {

        return(
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.onclickevent}>Change</button>
        </div>);    
    }
}
export default test;

