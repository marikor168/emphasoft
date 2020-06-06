import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import { isUserValid, isPassValid, isFirstNameValid, isLastNameValid} from '../../utils/utils';

import './modal.css';

const styles = theme => ({
  marginLeft: {
    marginLeft: 0,
    marginTop: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(3),
  },
});

class Modal extends Component {

  constructor(props) {
    super(props);
    this.saveUser = this.props.saveUser;
    this.state = {
      is_active: undefined,
      is_superuser: false,     
      last_login: '',      
      usernameValid: true,
      passwordValid: true,
      firstNameValid: true,
      lastNameValid: true,
    }    
  }
  
  onSwitchChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.checked 
    });
  };

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      usernameValid: isUserValid(event.target.value),
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      passwordValid: isPassValid(event.target.value),
    });
  }  

  onFirstNameChange = (event) => {
    this.setState({
      first_name: event.target.value,
      firstNameValid: isFirstNameValid(event.target.value),
    });
  }

  onLastNameChange = (event) => {
    this.setState({
      last_name: event.target.value,
      lastNameValid: isLastNameValid(event.target.value),
    });
  }  

  onUserSubmit = (event) => {
    event.preventDefault();

    const { usernameValid, passwordValid, firstNameValid, lastNameValid } = this.state;


    console.log( usernameValid, passwordValid, firstNameValid, lastNameValid );
    if( !usernameValid || !passwordValid || !firstNameValid || !lastNameValid ) {
      return;
    }

    const newUser = {
      id: this.props.user.id,
      // date: setDate(), 
      username: this.state.username !== undefined ? this.state.username : this.props.user.username,
      first_name: this.state.first_name !== undefined ? this.state.first_name : this.props.user.first_name,
      last_name: this.state.last_name !== undefined ? this.state.last_name : this.props.user.last_name,
      password: this.state.password !== undefined ? this.state.password : this.props.user.password,

      last_login: this.state.last_login !== undefined ? this.state.last_login : this.props.user.last_login,
      is_active: this.state.is_active !== undefined ? this.state.is_active : this.props.user.is_active,
      is_superuser: this.state.is_superuser !== undefined ? this.state.is_superuser : this.props.user.is_superuser, 
    }

    this.saveUser(newUser);  
  }

  isCreateMode = () => {
    const { user } = this.props;
    return !(user && user.id);
  }

  render() {
    const { onToggleModal, open, user } = this.props;
    const { classes } = this.props;
    const { usernameValid, passwordValid, firstNameValid, lastNameValid } = this.state;
    const isCreate = this.isCreateMode();
    const title = user.id ? 'Edit' : 'Create';
    const isActive = this.state.is_active === undefined ? user.is_active: this.state.is_active;
    return (
      <Dialog open={open} onClose={ onToggleModal } aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title} User</DialogTitle>
        <DialogContent>
          <form onSubmit={ this.onUserSubmit }>
            {
              isCreate || <TextField type="text" name="id" label="ID" margin="dense" 
                disabled fullWidth defaultValue={user.id || this.state.id || ""}/>
            }
            
            <TextField autoFocus type="text" name="username" label="Username" margin="dense" 
              required fullWidth onChange= { this.onUsernameChange } defaultValue={user.username || this.state.username || ""} 
              error={ !usernameValid }
              helperText = { !usernameValid && 'Incorrect input'} />            
            <TextField type="text" name="first_name" label="First name" margin="dense"
              fullWidth onChange= { this.onFirstNameChange } defaultValue={user.first_name || this.state.first_name || ""} 
              error={ !firstNameValid }
              helperText = { !firstNameValid && 'Incorrect input'}/>
            <TextField type="text" name="last_name" label="Last name" margin="dense"
              fullWidth onChange= { this.onLastNameChange } defaultValue={user.last_name || this.state.last_name || ""} 
              error={ !lastNameValid }
              helperText = { !lastNameValid && 'Incorrect input'} />
            <TextField type="password" name="password" label="Password" margin="dense"
              required fullWidth onChange= { this.onPasswordChange } defaultValue={user.password || this.state.password || ""} 
              error = { !passwordValid }
              helperText = { !passwordValid && 'Incorrect input'} />   
            { 
            isCreate || <TextField type="text" name="last_login" label="Last login" margin="dense"
               disabled fullWidth defaultValue={user.last_login || this.state.last_login || ""} />}
              
            <FormControlLabel
              label="Active" labelPlacement="start" className={ classes.marginLeft }
              control={
              <Switch color="primary"  
              checked={  isActive || false } 
              onChange={this.onSwitchChange} 
              name="is_active"  
              />} 
              />   
              { 
                isCreate || <FormControlLabel
                label="Superuser status" labelPlacement="start" 
                className={ classes.margin } 
                control={
                <Switch color="primary" 
                checked={ this.props.user.is_superuser || this.state.is_superuser } 
                name="is_superuser"  
                />} />
              }         
            

        <DialogActions>
          <Button onClick={ onToggleModal } color="primary">
            Cancel
          </Button>
          <Button 
          color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
};

export default withStyles(styles)(Modal);