"use client"

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


async function fetchTools() { 
  try {
    const res = await fetch('http://localhost:3000/api/Tools');
    if (res.ok) {
      return res.json();
    }
    
  
  } catch (error) {
    console.error(error);
  }

}



const columns = [
    {
      key: "brand",
      label: "brand",
    },
    {
      key: "model",
      label: "model",
    },
    {
      key: "serial",
      label: "serial",
    },
];


function Tabless() {
  const [tools, setTools] = useState([]);
   fetchTools();


  return (
    <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody>
        {tools.map((tool) => (
            <TableRow key={tool.id}>
               <TableCell>{getKeyValue(tools, columnKey)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
  );
}
      

export default Tabless