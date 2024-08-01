import http from './http-commons';

class StuffDataService {

  getPortalPermissions(data) {
    return http.post("/portal/permission", data);
  }

}


const stuffDataServiceInstance = new StuffDataService();

export default stuffDataServiceInstance;