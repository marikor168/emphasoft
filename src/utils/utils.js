export function sortAscending(users) {
  return users.sort((a, b) => a.id > b.id ? 1 : -1);
}

export function sortDescending(users) {
  return users.sort((a, b) => a.id < b.id ? 1 : -1);
}

// validation 
export function isValid(value, name) {
  switch(name) {
    case 'username':
      return (value.length > 0) && (value.length < 151) && (/^[\w.@+-_]+$/.test(value));
    case 'password':
      return (value.length > 0) && (value.length < 129) && (/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value));
    case 'first_name':
      return (value.length < 31);
    case 'last_name':
      return (value.length < 151);
    default:
      return false;
  }
}

export function searchUsers(users, search) {
  if (search.length === 0) {
    return users;
  }

  return users.filter((user) => {
    return user.username.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
}