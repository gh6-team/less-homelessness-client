import LHDispatcher from '../dispatchers/LHDispatcher';
import ShelterProxy from '../proxys/ShelterProxy.js';
import ActionTypes from '../constants/actionTypes';

export default class ShelterAction {

  static fetchAllShelters() {
    ShelterProxy.getAllShelters().then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.SHELTER_REQUEST,
        shelters: result.shelters,
        availableBeds: result.availableBeds
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.SHELTER_REQUEST,
        error: error
      });
    });
  }

  static fetchBedAssignments(shelterId) {
    ShelterProxy.findShelterBedAssignments(shelterId).then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.BED_REQUEST,
        beds: result.shelterBeds,
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.BED_REQUEST,
        error: error
      });
    });
  }

}
