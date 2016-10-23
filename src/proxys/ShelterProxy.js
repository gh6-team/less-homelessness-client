import WebProxy from "./WebProxy";

import UnauthenticatedError from "../errors/UnauthenticatedError";

class ShelterProxy {

  constructor() {
    this.shelterURI = "/shelters";
  }

  _handleJSONResponse(request) {
    if (request.status === 200 || request.status === 304) {
      return JSON.parse(request.responseText);
    }
    else if (request.status === 401) {
      throw new UnauthenticatedError(request.responseText);
    }
    else {
      throw new Error(request.status + " : " + request.responseText);
    }
  }

  getAllShelters() {
    let request = WebProxy.buildGetRequest(this.shelterURI + "/");
    return WebProxy.send(request).then(this._handleJSONResponse);
  }

  findShelterBedAssignments(shelterId) {
    let request = WebProxy.buildGetRequest(this.shelterURI + "/" + shelterId + "/bed_assignments");
    return WebProxy.send(request).then(this._handleJSONResponse);
  }

}

const shelterProxyInstance = new ShelterProxy();
export default shelterProxyInstance;
