class WebProxy {

  constructor() {
    this.baseURL = "/api";
    // this.baseURL = "http://localhost:8080/api";
  }

  static formatParams(params) {
    return "?" + Object
        .keys(params)
        .map(function(key){
          return key + "=" + params[key];
        })
        .join("&");
  }

  setJSONHeaders(request) {
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
  }

  send(request, data) {
    return new Promise((resolve, reject) => {
      request.onload = () => resolve(request);
      request.onerror = (e) => reject(new Error(e, "Unhandled Network Error"));
      request.send(data);
    });
  }

  buildGetRequest(uri, params) {
    let request = new XMLHttpRequest();
    const url = this.baseURL + uri + (params ? WebProxy.formatParams(params) : "");
    request.open("get", url);
    this.setJSONHeaders(request);
    return request;
  }

  buildPostRequest(uri) {
    let request = new XMLHttpRequest();
    request.open("post", this.baseURL + uri);
    this.setJSONHeaders(request);
    return request;
  }

  buildPutRequest(uri) {
    let request = new XMLHttpRequest();
    request.open("put", this.baseURL + uri);
    this.setJSONHeaders(request);
    return request;
  }

  buildDeleteRequest(uri) {
    let request = new XMLHttpRequest();
    request.open("delete", this.baseURL + uri);
    this.setJSONHeaders(request);
    return request;
  }

  handleJSONResponse(request) {
    if (request.status === 200 || request.status === 304) {
      return JSON.parse(request.responseText);
    }
  }
}
const webProxyInstance = new WebProxy();
export default webProxyInstance;
