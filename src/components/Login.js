import React, { Component } from 'react'
import '../Login.css';
//import { throwStatement } from '@babel/types';
//import axios from 'axios';
import App from './App';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            isValid:""
        }

    }
    fetchdata=(event)=> {
        // console.log({ username: this.state.username,password:this.state.password });
        try {
            
            fetch('http://localhost:8080/authenticate', 
            {
              method: "POST", // or 'PUT'
               // data can be `string` or {object}!
              headers: {
                'Content-Type': 'application/json'
              },body: JSON.stringify(
                { username: this.state.username,
                password:this.state.password})
            }).then((response)=>response.json()).then(data=>{
                this.setState({isValid:data});
            });       
          } catch (error) {
            console.error('Error in hitting auth Api:', error);
          }
        
    }
    setemail=(event)=>{
        this.setState({username:event.target.value});
        // console.log(event.target.value);
    }
    setpass=(event)=>{
        this.setState({password:event.target.value});
        // console.log(event.target.value);
    }

    render(){
        if(this.state.isValid){
            return(
                <div>
                <App token={this.state.isValid}/>
                </div>
            );
        }
        else{

        return(
            <div className="tc pa5 ma10">
                <div className="lastinput" >
                    <label className="ma1">Username:</label>
                    <input type="text" placeholder="Enter Your Email id" id="username" onBlur={this.setemail}/>  
                    <label className="ma1">Password:</label>
                    <input type="password" placeholder="Enter Your Password" id="password" onBlur={this.setpass}/>
                </div>   
                <br></br>
                <br></br>
                <button onClick={this.fetchdata}style={{font:"16",backgroundColor:"green"}}>Login</button>

            </div>
        );
    }
    }
}
export default Login;