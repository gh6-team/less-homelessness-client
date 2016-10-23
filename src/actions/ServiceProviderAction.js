import LHDispatcher from '../dispatchers/LHDispatcher';
import ActionTypes from '../constants/actionTypes';
import ServiceProxy from "../proxys/ServiceProxy";

export default class ServiceProviderAction {

  static fetchAllServices() {

    ServiceProxy.getAllServices().then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.SERVICE_REQUEST,
        services: result
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.SERVICE_REQUEST,
        error: error
      });
    });
  }

  static saveServiceData(service) {

    let {...serviceData} = service;
    debugger;
    ServiceProxy.postService(serviceData).then((response) => {
      LHDispatcher.dispatch({
        type: ActionTypes.SERVICE_POSTED,
        serviceId: response.id
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.SERVICE_POSTED,
        error: error
      });
    });
  }
}
