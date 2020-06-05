export default class EmphaService {

  _apiBase = 'http://emphasoft-test-assignment.herokuapp.com';

  getAllUsers = async () => {
    await  fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
      method: "POST",
      body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      }).then(response => response.json())
      .then(data => fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
        method: "GET",
        headers: {
              'Authorization': `Token ${data.token}`,
            },
        }).then(response => response.json())
          .then(data => { this.users = data})
      );

      console.log('this.users', this.users);
      return this.users;
  }

  users = this.getAllUsers(); 
}

// fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
//       method: "POST",
//       body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
//       headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//       }).then(response => response.json())
//       .then(data => fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
//         method: "GET",
//         headers: {
//               'Authorization': `Token ${data.token}`,
//             },
//         }).then(response => response.json())
//           .then(data => {
//             // this.setState({users: data, isLoading: false})
//           })
//       );