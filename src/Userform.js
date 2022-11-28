import React, { Component } from 'react'
// import Users from './Users';

class Userform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            Username: "",
            Password: "",
            role: "Role_User"
        }
    }
    moveback = (e) => {
        console.log(this.state);
        const newUser =
        {
            "email": this.state.email,
            "password": this.state.Password,
            "fullName": this.state.name,
            "roles": this.state.role,
            "username": this.state.Username
        }
        const body=JSON.stringify(newUser);
        let data1;
        try {
            fetch('http://localhost:8080/Register', {
                method: "POST", // or 'PUT',
                // data can be `string` or {object}!
                headers: {
                    'Authorization': this.props.token,
                    'Content-Type': 'application/json',
                    "access-control-allow-origin": "*",
                },
                body: body,
            }).then(response => {
                if (response.status === 200) {
                    console.log('new user added')
                }
                return response.json();
            }).then(data => {
                data1=data;
                
            });
        } catch (error) {
            console.log('Error while added the users:', error);
        }
        this.props.renderTable(data1);
    }
    addname = (event) => {
        this.setState({ name: event.target.value })
    }
    addusername = (event) => {
        this.setState({ Username: event.target.value })
    }
    addpassword = (event) => {
        this.setState({ Password: event.target.value })
    }
    addemail = (e) => {
        this.setState({ email: e.target.value })
    }
    addrole = (e) => {
        this.setState({ role: "Role_" + e.target.value }, () => { console.log(this.state) })
    }
    render() {
    
            return (
                <form>
                    <div className='flex flex-wrap justify-around ma2'>
                        <input type="text" placeholder="Username" className='tc pa1 ma2 b--green bg-lightest-blue' onChange={this.addusername} />
                        <input type="text" placeholder="Full name" className='tc pa1 ma2 b--green bg-lightest-blue' onChange={this.addname} />
                        <input type="email" placeholder="Email" className='tc pa1 ma2 b--green bg-lightest-blue' onChange={this.addemail} />
                        <input type="password" placeholder="Password" className='tc pa1 ma2 b--green bg-lightest-blue' onChange={this.addpassword} />
                    </div>
                    <select name="role" className='pa1 b--green bg-lightest-blue tc ma2' onChange={this.addrole}>
                        <option value="User" selected>User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <br /><br />
                    <button type="submit" onClick={this.moveback}>ADD</button>
                </form>
            );
        }

    }
export default Userform;