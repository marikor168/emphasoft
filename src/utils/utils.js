export function sortAscending(users) {
  return users.sort((a, b) => a.id > b.id ? 1 : -1);
}

export function sortDescending(users) {
  return users.sort((a, b) => a.id < b.id ? 1 : -1);
}

// validation username
export function isUserValid(username) {
  let usernameValid = false;
  if(username.length > 0 && username.length < 151 && (/^[\w.@+-_]+$/.test(username))) {
    usernameValid = true;
  } 
  return usernameValid;
}

// validation password
export function isPassValid(password) {
  let passwordValid = false;
  if(password.length > 0 && password.length < 129 && (/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password))) {
    passwordValid = true;
  }
  return passwordValid;
}

//validation firstName
export function isFirstNameValid(firstName) {
  let firstNameValid = false;
  if(firstName.length > 0 && firstName.length < 31) {
    firstNameValid = true;
  } 
  return firstNameValid;
}

// validation lastName
export function isLastNameValid(lastName) {
  let lastNameValid = false;
  if(lastName.length > 0 && lastName.length < 31) {
    lastNameValid = true;
  } 
  return lastNameValid;
}

export function searchUsers(users, search) {
  if (search.length === 0) {
    return users;
  }

  return users.filter((user) => {
    return user.username.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
}

// The function of creating and forming a date, returns a string
export function setDate() {
  const date = new Date();
  return date.toISOString();
};

// The function that determines the maximum id of existing errors in localStorage
export function findMaxId(users) {
  let usersId = users.map((user) => {
    return user.id;
  });  
  const maxId = usersId.length === 0 ? 1 : Math.max(...usersId);
  return maxId;
};