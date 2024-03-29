
import React, { Component } from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import Userform from "./Userform";
import Loading from './components/Loading';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userform: false,
            token: this.props.token,
            users: [
                {
                    full_name: "Babu",
                    email: "Pandirla@abc.com",
                    user_id: 1,
                    roles:"",
                    username:"",
                    actions: ""
                },
                {
                    full_name: "Ramu",
                    email: "ramu@abc.com",
                    user_id: 2,
                    roles:"",
                    username:"",
                    actions: ""
                },
                {
                    full_name: "Mural",
                    email: "mural@abc.com",
                    user_id: 3,
                    roles:"",
                    username:"",
                    actions: ""
                }
            ],
            columns: [
                {
                    Header: "UserId",
                    accessor: "userId",
                    sortable:true,
                    maxwidth: 100,
                    width: 100
                },
                {
                    Header: "UserName",
                    accessor: "username"
                },
                {
                    Header: "FullName",
                    accessor: "fullName"
                },
                {
                    Header: "Email",
                    accessor: "email"
                },
                {
                    Header: "Roles",
                    accessor: "roles"
                },  
                {
                    Header: "Actions",
                    sortable: false,
                    Cell: props => {
                        return (
                            <div>
                                <button onClick={this.editUser}>Edit</button>
                                <button>Delete</button>
                            </div>
                        )
                    },
                    maxwidth: 200,
                    width: 150
                }
            ]
        }
    }
    /*
    */
   editUser=(e)=>{

   }
   fetchUsers(){
    try {
        fetch('http://localhost:8080/Users', {
           method: "GET", // or 'PUT',
           // data can be `string` or {object}!
           headers: {
               'Authorization':this.props.token,
               'Content-Type': 'application/json',
               "access-control-allow-origin" : "*",
           }
       }).then(response => {
           if (response.status === 200) {
               console.log('fetched details from server')
           }
           return response.json();          
       }).then(data=>{
           // console.log(data);
           // const userdata=JSON.parse(data);
           this.setState({users:data});
           // console.log(this.state.users);
       });
   } catch (error) {
       console.error('Error while fetching the users:', error);
   }

   }
    componentDidMount() {
        this.fetchUsers();
        
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.users !== this.state.users) {
            this.setState({users:this.state.users})
          }
    }
    renderTable=(data)=>{
        // this.setState({users:data})
        this.setState({ userform: false });
        setTimeout(()=>{
            this.setState({users:data});
        },3000)            
    }
    adduser = (e) => {
        this.setState({ userform: true });
    }  
    render() {
        if (this.props.name) {
            const user = {
                index: this.state.users.length + 1,
                fname: this.props.name,
                email: this.props.email,
                id: this.state.users.length + 1,
                actions: ""
            }
            let a = this.state.users.slice();
            let arrind = this.state.users.length + 1;
            a[arrind] = user;
            console.log(a)
            //this.setState({users:a});
        }

        if (this.state.userform) {
            return (
                <div>
                    <Userform token={this.state.token} renderTable={this.renderTable}/>
                </div>
            );
        }
        if(this.state.users){
            return (
                <div>   
                    
                    <ReactTable
                        columns={this.state.columns}
                        data={this.state.users}
                        defaultPageSize={10}
                    >
                    </ReactTable>
                    <button onClick={this.adduser}>Add User</button>
                </div>
            );

        }
        return(
            <div>
                <Loading/>
            </div>
        )
        
    }
}
export default Users;  