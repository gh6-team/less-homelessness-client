import WebProxy from "./WebProxy";

import UnauthenticatedError from "../errors/UnauthenticatedError";

class ServiceProxy {

  constructor() {
    this.serviceURI = "/service-offering";
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

  getAllServices() {
    let request = WebProxy.buildGetRequest(this.serviceURI + "/");
    return WebProxy.send(request).then(this._handleJSONResponse);
  }
}

const serviceProxyInstance = new ServiceProxy();
export default serviceProxyInstance;
