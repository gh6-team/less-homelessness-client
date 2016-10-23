import LHDispatcher from '../dispatchers/LHDispatcher';
import ShelterProxy from '../proxys/ShelterProxy.js';
import ActionTypes from '../constants/actionTypes';

export default class ShelterAction {

  static fetchAllShelters() {
    LHDispatcher.dispatch({
      type: ActionTypes.SHELTER_REQUEST_PENDING,
    });

    ShelterProxy.getAllShelters().then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.SHELTER_REQUEST,
        shelters: result.shelters
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.SHELTER_REQUEST,
        error: error
      });
    });
  }

}
