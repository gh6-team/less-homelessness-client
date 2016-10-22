import WebProxy from "./WebProxy";

import UnauthenticatedError from "../errors/UnauthenticatedError";

class UserProxy {

  constructor() {
    this.usersURI = "/user/login";
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

  login(userData) {
    let request = WebProxy.buildPostRequest(this.usersURI);
    return WebProxy.send(request, JSON.stringify(userData))
      .then(this._handleJSONResponse);
  }
}

const userProxyInstance = new UserProxy();
export default userProxyInstance;
