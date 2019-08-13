import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

function Users(){
    const columns=[
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
    ];
    const users=[
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
    ]
    return(
        <div>
            <ReactTable
            columns={columns}
            data={users}
            defaultPageSize={5}
            >
            </ReactTable>
        </div>
    );
}
export default Users;  