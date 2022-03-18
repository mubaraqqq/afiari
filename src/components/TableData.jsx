import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from '@mui/material';

const TableData = ({ entries }) => {

  
  return (
    <Card className='table'>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Email</TableCell>
              <TableCell align='center'>Country</TableCell>
              <TableCell align='center'>State</TableCell>
              <TableCell align='center'>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell align='center'>{entry.email}</TableCell>
                <TableCell align='center'>{entry.country}</TableCell>
                <TableCell align='center'>{entry.state}</TableCell>
                <TableCell align='center'>{entry.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
  
}

export default TableData