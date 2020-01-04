import React, { Component } from 'react'
import Users from './Users';

class Userform extends Component{
    state={
        formfetch:true,
        name:"",
        email:"",
        Username:"",
        Password:"",
        role:""
    }
    moveback=(e)=>{

        this.setState({formfetch:false})}
     addname=(event)=>{
        this.setState({name:event.target.value})
    }
    addemail=(e)=>{
        console.log(e.target.value);
        this.setState({email:e.target.value})
    }
    render(){
        if(this.state.formfetch){
        return(
            <form>
                <input type="text" placeholder="Username" className='pa1 b--green bg-lightest-blue' onChange={this.addemail}/>&nbsp;&nbsp;
                <input type="text" placeholder="Full name" className='pa1 b--green bg-lightest-blue' onChange={this.addname}/>&nbsp;&nbsp;
                <input type="email" placeholder="Email" className='pa1 b--green bg-lightest-blue' onChange={this.addemail}/>&nbsp;&nbsp; 
                <input type="password" placeholder="Password" className='pa1 b--green bg-lightest-blue' onChange={this.addemail}/><br/><br/>
                <select name="role" className='pa1 b--green bg-lightest-blue'>
                    <option value="User">User</option>
                    <option value="admin">Admin</option>
                </select>
                <br/><br/>
                <button type="submit" onClick={this.moveback}>ADD</button>   
            </form>
        );
        }
        return(
            <Users name={this.state.name} email={this.state.email}></Users>
        );

    }
}
export default Userform;