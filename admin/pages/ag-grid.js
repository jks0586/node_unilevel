import React from 'react'
import {AgGridReact,AgGridColumn} from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
 
const rowData = [
    {
        id:"1",
        name:"Sonali",
        email:"Sonali@gmail.com",
        price:"55"
    },
    {
        id:"1",
        name:"Sonali",
        email:"Sonali@gmail.com",
        price:"55"
    },
    {
        id:"1",
        name:"Sonali",
        email:"Sonali@gmail.com",
        price:"55"
    },
    {
        id:"1",
        name:"Sonali",
        email:"Sonali@gmail.com",
        price:"55"
    },
];

const app = () => {
    
      
  return (
    <div className="App">
    <h2>Hello App</h2>
    <div className="ag-theme-alpine ag-style">
    <AgGridColumn  field="firstName">
    </AgGridColumn>
    </div>
    
    </div>
  )
}

export default app