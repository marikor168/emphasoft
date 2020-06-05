export function fetchToken() {
  return fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
    method: "POST",
    body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    });
}

export function fetchUsers(token) {
  return fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
    method: "GET",
    headers: {
          'Authorization': `Token ${token}`,
        },
    });
}