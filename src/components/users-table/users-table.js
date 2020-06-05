import React, { Component } from 'react';

import SearchPanel from '../search-panel';
import Spinner from '../spinner';

import { sortAscending, sortDescending, searchUsers } from '../../utils/utils.js';
import { fetchToken, fetchUsers } from '../../services/emphaService';

import { withStyles } from '@material-ui/core/styles';
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
    overflow: "hidden",
  },
  body: {
    fontSize: 14,
    minWidth: 97,
    maxWidth: 250,
    overflow: "auto",
    wordWrap: "break-word"
  },
}))(TableCell);

const tableStyle = {
  maxWidth: 1300,
  marginBottom: 30,
  marginLeft: 25,
  marginRight: 25,
  height: '77vh',
  minWidth: '80%',
  overflow: "auto",
}
export default class UsersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAscending: false,
      isDescending: false,
      search: '',
      users: []
    }
  }

  onSortAscending = () => {
    this.setState({
      isAscending: true,
      isDescending: false
    })
  }

  onSortDescending = () => {
    this.setState({
      isAscending: false,
      isDescending: true
    })
  }

  onSearchChange = (search) => {
    this.setState({ search });
  }  

  async componentDidMount() {
    let promise = await fetchToken();
    let data = await promise.json();
    let token = data.token;

    let userPromise = await fetchUsers(token);
    let users = await userPromise.json();

    this.setState({
      users: users, 
      isLoading: false
    });
  }

  render() {
    const { isAscending, isDescending, search, users } = this.state;
    const { onLogout } = this.props;

    if(this.state.isLoading !== false) {
      return <Spinner />
    } else {

      let sortUsers, sortArrows;
      const visibleUsers = searchUsers(users, search);
      
      // change sort arrows and sort visibleUsers
      if (isAscending === true) {
        sortUsers = sortAscending(visibleUsers);
        sortArrows =  <IconButton onClick={ this.onSortDescending }>
                    <ArrowDownwardIcon className="iconButton" />
                  </IconButton>
      } else if (isDescending === true) {
        sortUsers = sortDescending(visibleUsers);
        sortArrows =  <IconButton onClick={ this.onSortAscending }>
                    <ArrowUpwardIcon className="iconButton" />
                  </IconButton>
      } else {
        sortUsers = visibleUsers;
        sortArrows =  <IconButton onClick={ this.onSortAscending } >
                    <ArrowUpwardIcon className="iconButton" />
                  </IconButton>
      };

      const elements = addRowTable(sortUsers);

      return(
        <div className="table">
          <SearchPanel onLogout={ onLogout } onSearchChange={ this.onSearchChange }/>
            <TableContainer align="center" >
              <Paper elevation={10} style={tableStyle} >
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>
                        ID{ sortArrows }
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
  };
};

function addRowTable(arr) {
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