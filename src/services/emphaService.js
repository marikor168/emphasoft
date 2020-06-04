export default class EmphaService {

  _apiBase = 'http://emphasoft-test-assignment.herokuapp.com';

  getResource = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
        `, received ${res.status}`)
    }
    return await res.json();
  };


  getAllUsers = async () => {
    const res = await this.getResource('/api/v1/users/');
    return res.results;
  }

  getUser = async () => {
    const res = await this.getResource('/api/v1/users/{id}/');
    return res;
  }
}