export function sortAscending(users) {
  return users.sort((a, b) => a.id > b.id ? 1 : -1);
}

export function sortDescending(users) {
  return users.sort((a, b) => a.id < b.id ? 1 : -1);
}

export function isUserValid(username) {
  let usernameValid = false;
  if(username.length > 0 && username.length < 151 && (/^[\w.@+-_]+$/.test(username))) {
    usernameValid = true;
  } 
  return usernameValid;
}

export function isPassValid(password) {
  let passwordValid = false;
  if(password.length > 0 && password.length < 129 && (/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password))) {
    passwordValid = true;
  }
  return passwordValid;
}

export function searchUsers(users, search) {
  if (search.length === 0) {
    return users;
  }

  return users.filter((user) => {
    return user.username.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
}