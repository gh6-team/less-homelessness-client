import LHDispatcher from '../dispatchers/LHDispatcher';
import UserProxy from '../proxys/UserProxy';
import ActionTypes from '../constants/actionTypes';

export default class LoginAction {

  static performLogin(userCredentials) {

    UserProxy.login(userCredentials).then((result) => {
      LHDispatcher.dispatch({
        type: ActionTypes.LOGIN_REQUEST,
        username: result.name,
        userRole: result.roleName,
        organizationName: result.organizationName
      });
    }).catch((error) => {
      LHDispatcher.dispatch({
        type: ActionTypes.API_REQUEST_FAILED,
        subType: ActionTypes.LOGIN_REQUEST,
        error: error
      });
    });
  }

  static performLogout() {
    LHDispatcher.dispatch({
      type: ActionTypes.LOGOUT
    });
  }

}
