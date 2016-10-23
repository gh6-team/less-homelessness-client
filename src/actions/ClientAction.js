import LHDispatcher from '../dispatchers/LHDispatcher';
import ClientProxy from '../proxys/ClientProxy.js';
import ActionTypes from '../constants/actionTypes';

export default class ClientAction {

  static fetchClientById(clientId) {
    LHDispatcher.dispatch({
      type: ActionTypes.CLIENT_REQUEST_PENDING,
      clientId: clientId
    });

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

}