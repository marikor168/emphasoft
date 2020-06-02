import React from 'react';
import { Redirect } from 'react-router-dom'; 

import SearchPanel from '../search-panel';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, 
  TableContainer, 
  TableHead, 
  TableBody, 
  TableCell, 
  TableRow, 
  Paper } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';

import './users-table.css';

const StyledTableCell = withStyles((theme) => ({  
  head: {
    fontSize: 15,
    textTransform: "uppercase",
    backgroundColor: "#3f51b5",
    color: '#ffffff',
    paddingTop: 5,
    paddingBottom: 5,
  },
  body: {
    fontSize: 14,
    minWidth: 97,
    maxWidth: 250,
    overflow: "hidden",
    wordWrap: "break-word"
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 800,
    maxWidth: 1300,
    marginBottom: 30,
    overflow: "hidden",
  },
  iconButton: {
    color: '#ffffff'
  }
});

const UsersTable = ({ 
  isLoggedIn, 
  onLogout, 
  onSearchChange, 
  onSortAsсending,
  onSortDescending,
  users }) => {
  const classes = useStyles();
  const elements = addRowTable(users);

  console.log('users', users);
  console.log(onSortAsсending);

  if(isLoggedIn) {
    return(
      <div>
        <SearchPanel onLogout={ onLogout } onSearchChange={ onSearchChange }/>
        <TableContainer align="center">
          <Paper elevation={10} className={classes.table} >
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    ID
                    <IconButton onClick={ console.log('hello') } >
                      <ArrowUpwardIcon className={classes.iconButton}/>
                    </IconButton>
                    <IconButton onClick={ console.log('bye') }>
                      <ArrowDownwardIcon className={classes.iconButton}/>
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell>First name</StyledTableCell>
                  <StyledTableCell>Last name</StyledTableCell>
                  <StyledTableCell>Active</StyledTableCell>
                  <StyledTableCell>Last login</StyledTableCell>
                  <StyledTableCell>Superuser status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {elements}
              </TableBody>
            </Table>
          </Paper>
        </TableContainer>
      </div>
    );
  }
  
  return <Redirect to="/login" />;
  
};

function addRowTable (arr) {
  return arr.map((user, i) =>
    <TableRow key={i}>
      <StyledTableCell>{user.id}</StyledTableCell>
      <StyledTableCell>{user.username}</StyledTableCell>
      <StyledTableCell>{user.first_name}</StyledTableCell>
      <StyledTableCell>{user.last_name}</StyledTableCell>
      <StyledTableCell>{(user.is_active) && <CheckIcon color="primary"/>}</StyledTableCell>
      <StyledTableCell>{user.last_login}</StyledTableCell>
      <StyledTableCell>{(user.is_superuser) && <CheckIcon color="primary"/>}</StyledTableCell>
    </TableRow>
  )
}

export default UsersTable;