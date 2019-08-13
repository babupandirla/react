import React,{Component } from 'react';
import { robots } from './robots.js';
import Cardlist from './Cardlist.js';
import Searchbar from './Searchbar.js';
//import Test from './Test.js';
//import hooks from './hook.js';
import Hooks from './hook.js';
import Users from './Users.js';

class App extends Component { 
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfiled:'',
            view:"Table"
        }
    }
    onsearchchange=(event)=>{
        this.setState({searchfiled:event.target.value})

    }
    switchview=(event)=>{
        if(this.state.view==="Table"){
            this.setState({view:"Robot"})
        }
        else{
            this.setState({view:"Table"}) 
        }
        
    }
    render()
    {
        const filteredlist= this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })
        
        if(this.state.view==="Table")
        {
            return(
                <div className="tc">
                    <h1>User List</h1>
                    <Users />
                    <button type="button" onClick={this.switchview}>Switch View</button>
                    <Hooks/>
                </div>
            ); 
        }
        return(
        <div className="tc">
            <h1>RoboFriends</h1>
            <button type="button" onClick={this.switchview}>Switch View</button>
            <div>
                <Searchbar searchchange={this.onsearchchange}/>
            </div>
            <Cardlist robots={filteredlist}/>
            
            {//<Test name="Chamcham"/>
        //
        }
        </div>
        );
        
    }
    
    
}
export default App;