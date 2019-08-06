import React,{Component } from 'react';
import { robots } from './robots.js';
import Cardlist from './Cardlist.js';
import Searchbar from './Searchbar.js';

class App extends Component { 
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfiled:''
        }
    }
    onsearchchange=(event)=>{
        this.setState({searchfiled:event.target.value})

    }
    render()
    {
        const filteredlist= this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })
        return(
            <div className="tc">
                <div>
                    <h1>
                        RoboFriends
                    </h1>
                    <div>
                    <Searchbar searchchange={this.onsearchchange}/>
                    </div>
                </div>
                <Cardlist robots={filteredlist}/>
            </div>
        );
    }
    
    
}
export default App;