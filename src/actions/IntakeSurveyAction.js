import LHDispatcher from '../dispatchers/LHDispatcher';
import ActionTypes from '../constants/actionTypes';
import ClientProxy from "../proxys/ClientProxy";

export default class IntakeSurveyAction {

  static saveIntakeSurveyData(clientInfo) {

    let {needs, ...clientData} = clientInfo;

    ClientProxy.postClient(clientData).then(() => {
      LHDispatcher.dispatch({
        type: ActionTypes.INTAKE_POSTED
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.INTAKE_POSTED,
        error: error
      });
    });

    needs.forEach(need => {
      ClientProxy.postClientNeed(need).then(() => {
        LHDispatcher.dispatch({
          type: ActionTypes.NEED_CREATED
        });
      }).catch((error) => {
        LHDispatcher.dispatch({
          type: ActionTypes.API_REQUEST_FAILED,
          subType: ActionTypes.NEED_CREATED,
          error: error
        });
      });
    });
  }

}
