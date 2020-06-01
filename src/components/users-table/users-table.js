import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, 
  TableContainer, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  Paper } from '@material-ui/core';

import { users } from '../data';

import './users-table.css';

const StyledTableCell = withStyles((theme) => ({  
  head: {
    fontSize: 15,
    backgroundColor: "#3f51b5",
    color: '#ffffff',
  },
  body: {
    fontSize: 14,
    maxWidth: 250,
    overflow: "hidden",
    wordWrap: "break-word"
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
    maxWidth: 1000,
    marginTop: 20,
    marginBottom: 30,
    overflow: "hidden",
  },
});

const UsersTable = () => {
  const classes = useStyles();
  const elements = addRowTable(users);
  
  return(
    <TableContainer align="center">
      <Paper elevation={10} className={classes.table} >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Номер</StyledTableCell>
              <StyledTableCell>Пользователь</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {elements}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

function addRowTable (arr) {
  return arr.map((user, i) =>
    <TableRow key={i}>
      <StyledTableCell>{user.id}</StyledTableCell>
      <StyledTableCell>{user.first_name}</StyledTableCell>
    </TableRow>
  )
}

export default UsersTable;