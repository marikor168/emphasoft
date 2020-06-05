export default class EmphaService {

  _apiBase = 'http://emphasoft-test-assignment.herokuapp.com';
  
  // getResource = async(url) => {
  //   const res = await fetch(`${this._apiBase}${url}`);

  //   if(!res.ok) {
  //     throw new Error(`Could not fetch ${url}` + 
  //       `, received ${res.status}`)
  //   }
  //   return await res.json();
  // };


  // getAllUsers = async () => {
  //   const res = await this.getResource('/api/v1/users/');
  //   return res.results;
  // }

  // getUser = async () => {
  //   const res = await this.getResource('/api/v1/users/{id}/');
  //   return res;
  // }




  // getResource = async() => {
  //   const res = await fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
  //     method: "POST",
  //     body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
  //     headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //     }).then(response => response.json())
  //     .then(data => fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
  //       method: "GET",
  //       headers: {
  //             'Authorization': `Token ${data.token}`,
  //           },
  //       }))

  //   if(!res.ok) {
  //     throw new Error(`Could not fetch` + 
  //       `, received ${res.status}`)
  //   }
  //   return await res.json();
  // };

  // getAllUsers = async () => {
  //   const res = await this.getResource()
  //   .then(data => this.users = data);
  //   return res.results;
  // }

  getAllUsers = async () => {
    // const res = 
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
              .then(data => { this.users = data
                // this.setState({users: data, isLoading: false})
              })
          );

          console.log('this.users', this.users);
          return this.users;
          // return res.results;
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