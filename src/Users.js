
import React, { Component } from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import Userform from "./Userform"

class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            userform:false,
            users:[
                {
                    index:1,
                    fname:"Babu",
                    email:"Pandirla@abc.com",
                    id:1,
                    actions:""
                },
                {
                    index:2,
                    fname:"Ramu",
                    email:"ramu@abc.com",
                    id:2,
                    actions:""
                }
            ],
            columns:[
                {
                    Header: "Index",
                    accessor: "index",
                    sortable:false,
                    maxwidth:100,
                    width:100
                },
                {
                    Header: "FullName",
                    accessor: "fname"
                },
                {
                    Header: "Email",
                    accessor: "email"
                },
                {
                    Header: "UserId",
                    accessor: "id",
                    maxwidth:100,
                    width:100
                },
                {
                    Header: "Actions",
                    sortable:false,
                    Cell:props=>{
                        return(
                        <div>
                        <button>Edit</button>&nbsp;
                        <button>Delete</button>
                        </div>
                        )
                    },
                    maxwidth:200,
                    width:150
                }
            ]
        }   
    }
/*
*/
 
    


 adduser=(e)=>{
        this.setState({userform:true});
    }
    
render(){
    let myheader={
        "Content-Type": 'application/json',
        "Authorization": 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU3ODE1MDQ3OCwiaWF0IjoxNTc4MTMyNDc4fQ.GntIvtlgiR8fYpg0u2qS3-S9gb4jM0eGFSNE8hIP2XBRr-ijWpg0ZeQOtZbK7LtRinxtbBjH0HtYtJmTlaKs6w'
    }
    try {
        const response =fetch('http://localhost:8080/Users',{
          method: "GET", 
          headers:myheader
        }).then(response=>{
            if(response.status===200){
                const json =response.json();
                console.log('Success:', JSON.stringify(json)); 
            }
            });       
      } catch (error) {
        console.error('Error in hitting auth Api:', error);
      }
    if(this.props.name){
        const user={
            index:this.state.users.length+1,
            fname:this.props.name,
            email:this.props.email,
            id:this.state.users.length+1,
            actions:""
        }
        let a=this.state.users.slice();
        let arrind=this.state.users.length+1;
        a[arrind]=user;
        console.log(a)
        //this.setState({users:a});
    }
        
    if(this.state.userform){
        return(
            <div>
                <Userform />
            </div>
        );
    }
    return(
        
        <div>
            <ReactTable
            columns={this.state.columns}
            data={this.state.users}
            defaultPageSize={5}
            >
            </ReactTable>
            <button onClick={this.adduser}>Add User</button>
        </div>
    );
}}
export default Users;  