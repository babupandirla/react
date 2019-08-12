import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

function Users(){
    const columns=[
        {
            Header: "Index",
            accessor: "index",
            sortable:false
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
            accessor: "id"
        },
        {
            Header: "Actions",
            accessor: "actions",
            sortable:false,
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
            >
            </ReactTable>
        </div>
    );
}
export default Users;  