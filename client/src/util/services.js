import http from './http-commons';

class StuffDataService {

  postUser(data) {
    return http.post("/admin", data);
  }

  postLogin(data) {
    return http.post(`/user/login`, data);
  }
  
  postGoogleLogin(data) {
    return http.post(`/client/google/login`, data);
  }
  
  postForgottenPassword(data) {
    return http.post(`/user/forgottenPassword/login`, data);
  }
  
  findAllUsers() {
    return http.get("/user");
  }

  findUserById(id) {
    return http.get(`/user/${id}`);
  }
  
  removeUser(id) {
    return http.post(`/user/delete/${id}`);
  }



}

export default new StuffDataService();