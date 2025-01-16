import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DataTable = () => {
  return (
    <div>
         
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Salary</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            </TableRow>
        </TableBody>
        </Table>

    </div>
  )
}

export default DataTable