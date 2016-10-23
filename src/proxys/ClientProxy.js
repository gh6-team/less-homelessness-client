import WebProxy from "./WebProxy";

import UnauthenticatedError from "../errors/UnauthenticatedError";

class ClientProxy {

  constructor() {
    this.clientURI = "/client";
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

  getClient(clientId) {
    let request = WebProxy.buildGetRequest(this.clientURI + "/" + clientId);
    return WebProxy.send(request)
      .then(this._handleJSONResponse);
  }

  getClients() {
    let request = WebProxy.buildGetRequest(this.clientURI);
    return WebProxy.send(request)
      .then(this._handleJSONResponse);
  }

  postAnswers(client) {
    let request = WebProxy.buildPostRequest(this.clientURI + "/saveAnswers");
    return WebProxy.send(request, JSON.stringify(client))
      .then(this._handleJSONResponse);
  }
}

const clientProxyInstance = new ClientProxy();
export default clientProxyInstance;
