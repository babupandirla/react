import {CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAIELD
     } from '../constants.js';
const initialState ={
    searchField: '',
    isPending:false,
    robots:[],
    error:''
}

export const searchRobots=(state=initialState,action={})=>{
    switch(action.type) { 
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}

export const requestRobtos=(state=initialState,action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state,isPending:true}
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending:false,robots:action.payload})
        case REQUEST_ROBOTS_FAIELD:
            return Object.assign({},state,{isPending:false,error:action.payload})
        default:
            return state
    }
}