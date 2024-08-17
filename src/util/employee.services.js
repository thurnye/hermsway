import http from './http-commons';

class StuffDataService {

  postEmployee(data) {
    return http.post("/employee", data);
  }

  postLoginEmployee(data) {
    return http.post(`/employee/login`, data);
  }
  
  postForgottenPassword(data) {
    return http.post(`/employee/forgottenPassword/login`, data);
  }
  
  findAllEmployees(data) {
    return http.post("/employee/all", data);
  }

  findEmployeeById(employeeId, data) {
    return http.post(`/employee/${employeeId}`, data);
  }
  
  removeEmployee(id) {
    return http.post(`/employee/delete/${id}`);
  }
}

const stuffDataServiceInstance = new StuffDataService();

export default stuffDataServiceInstance;