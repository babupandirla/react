import React,{Component } from 'react';
import { robots } from '../robots.js';
import Cardlist from './Cardlist.js';
import Searchbar from './Searchbar.js';
//import Test from './Test.js';
//import hooks from './hook.js';
import Scroll from './Scroll.js';
import Hooks from '../hook.js';
import Users from '../Users.js';
import Navbar from './Navbar.js';
import Login from './Login.js';

class App extends Component { 
    constructor()
    {
        super();    
        this.state=
        {
            robots:robots,
            searchfiled:'',
            view:"Robot",
            isLogin:true
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
    logout=(event)=>{
        this.setState({isLogin:false})
    }
    render()
    {
        const filteredlist= this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })

        if(this.state.isLogin){
            if(this.state.view==="Table")
                {
                    return(
                        <div className="tc">
                            <h1>User List</h1>
                            <button type="button" onClick={this.logout}>Logout</button>
                            <Users />
                            <button type="button" onClick={this.switchview}>Switch View</button>
                            <Hooks/>
                        </div>
                    ); 
                }
            
                return( 
                <div className="tc">
                    <div>
                    <Navbar/>
                    </div>
                    <h1>RoboFriends</h1>
                    <button type="button" onClick={this.switchview}>Switch View</button>
                    <div>
                        <Searchbar searchchange={this.onsearchchange}/>
                    </div>
                    <Scroll className='pa3 ma3'>
                    <Cardlist robots={filteredlist}/>
                    </Scroll>
                    
                    
                    {//<Test name="Chamcham"/>
                //
                }
                </div>
                );
        
    }
    else{
        return(<Login />)
    }
}
    
    
}
export default App;