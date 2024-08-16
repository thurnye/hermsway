import http from './http-commons';

class StuffDataService {

  getPortalPermissions(data) {
    return http.post("/portal/permission", data);
  }

  postColorTheme(data) {
    return http.post("/colorTheme", data);
  }

}


const stuffDataServiceInstance = new StuffDataService();

export default stuffDataServiceInstance;