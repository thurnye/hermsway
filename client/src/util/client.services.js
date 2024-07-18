import http from './http-commons';

class StuffDataService {

  postClient(data) {
    return http.post("/client", data);
  }

  postClientLogin(data) {
    return http.post(`/client/login`, data);
  }
  
  postGoogleLogin(data) {
    return http.post(`/client/google/login`, data);
  }
  
  postForgottenPassword(data) {
    return http.post(`/client/forgottenPassword/login`, data);
  }
  
  findAllClients() {
    return http.get("/client");
  }

  findClientById(id) {
    return http.get(`/client/${id}`);
  }
  
  removeClient(id) {
    return http.post(`/client/delete/${id}`);
  }
}

const stuffDataServiceInstance = new StuffDataService();

export default stuffDataServiceInstance;