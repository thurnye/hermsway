import http from './http-commons';

class StuffDataService {

  postAdmin(data) {
    return http.post("/admin", data);
  }

  postLoginAdmin(data) {
    return http.post(`/admin/login`, data);
  }
  

  postForgottenPassword(data) {
    return http.post(`/admin/forgottenPassword/login`, data);
  }
  
  findAllAdmins() {
    return http.get("/admin");
  }

  findAdminById(id) {
    return http.get(`/admin/${id}`);
  }
  
  removeAdmin(id) {
    return http.post(`/admin/delete/${id}`);
  }
}


const stuffDataServiceInstance = new StuffDataService();

export default stuffDataServiceInstance;