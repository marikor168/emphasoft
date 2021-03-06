export function fetchToken() {
  return fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
    method: "POST",
    body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    });
}

export function fetchUsers(token) {
  return fetch("https://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
    method: "GET",
    headers: {
          'Authorization': `Token ${token}`,
        },
    });
}

export function fetchPostUser(token, user) {
  return fetch("https://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Authorization': `Token ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

export function fetchEditUser(token, user) {
  return fetch(`https://emphasoft-test-assignment.herokuapp.com/api/v1/users/${user.id}/`, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      'Authorization': `Token ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
