import LHDispatcher from '../dispatchers/LHDispatcher';
import ClientProxy from '../proxys/ClientProxy.js';
import ActionTypes from '../constants/actionTypes';

export default class ClientAction {

  static fetchClientById(clientId) {
    ClientProxy.getClient(clientId).then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.CLIENT_REQUEST,
        client: result
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.CLIENT_REQUEST,
        error: error
      });
    });

  }

  static fetchClientSpdatById(clientId) {
    ClientProxy.getClientSpdat(clientId).then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.CLIENT_SPDAT_REQUEST,
        spdat: result
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.CLIENT_SPDAT_REQUEST,
        error: error
      });
    });

  }

  static fetchClientList() {
    ClientProxy.getClients().then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.ALL_CLIENTS_REQUEST,
        clients: result
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.ALL_CLIENTS_REQUEST,
        error: error
      });
    });

  }

  static postAnswers(client) {
    ClientProxy.postAnswers(client).then(() => {
      LHDispatcher.dispatch({
        type: ActionTypes.CLIENT_REQUEST
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.CLIENT_REQUEST,
        error: error
      });
    });
  }

}
