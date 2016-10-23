import LHDispatcher from '../dispatchers/LHDispatcher';
import ActionTypes from '../constants/actionTypes';
//import ClientProxy from "../proxys/ClientProxy";

export default class IntakeSurveyAction {

  static saveIntakeSurveyData(clientInfo) {
    LHDispatcher.dispatch({
      type: ActionTypes.INTAKE_SURVEY_SAVE_PENDING,
      clientInfo: clientInfo
    });
    /*
    ClientProxy.login(userCredentials).then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.LOGIN_REQUEST,
        username: result.name,
        userRole: result.roleName,
        userOrganization: result.organization
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.LOGIN_REQUEST,
        error: error
      });
    });
    */
  }

}
