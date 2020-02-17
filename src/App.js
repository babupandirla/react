import React,{Component } from 'react';
import {connect} from 'react-redux';
//{ robots } from './robots.js';
import Cardlist from './Cardlist.js';
import Searchbar from './Searchbar.js';
//import Test from './Test.js';
//import hooks from './hook.js';
import Hooks from './hook.js';
import Users from './Users.js';
import Navbar from './Navbar.js';
import {setSearchFiled,requestRobots} from './actions/actions';



const mapStateToProps= (state) =>{
    return{
        searchField:state.searchRobots.searchField,
        robots:state.requestRobtos.robots,
        isPending:state.requestRobtos.isPending,
        error:state.requestRobtos.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onsearchchange:(event)=>dispatch(setSearchFiled(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
    }
}
class App extends Component { 
    constructor(){
        super();    
        this.state={
            view:"Robot"
        }
    }
    componentDidMount(){
        //console.log(this.props.store.getState());
        this.props.onRequestRobots();
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
        const {searchField,onsearchchange,robots,isPending}=this.props;
        const filteredlist= robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
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
            isPending?
            <h1 className='tc'>Loading</h1>:

        <div className="tc">
            <div>
            <Navbar/>
            </div>
            <h1>RoboFriends</h1>
            <button type="button" onClick={this.switchview}>Switch View</button>
            <div>
                <Searchbar searchchange={onsearchchange}/>
            </div>
            <Cardlist robots={filteredlist}/>
            
            {//<Test name="Chamcham"/>
        //
        }
        </div>
        );
        
    }
    
    
}
export default connect(mapStateToProps,mapDispatchToProps)(App);