import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class UserStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = this.getClearedState();
  }

  getState() {
    return this.state;
  }

  handleLoginCompleted(action) {
    this.state.username = action.username;
    this.state.userRole = action.userRole;
    this.state.organizationName = action.organizationName;
    this.state.loading = false;
    this.emitChange();
  }

  handleLogout() {
    this.state = this.getClearedState();
    this.emitChange();
  }

  getClearedState() {
    return {
      username: null,
      userRole: null,
      organizationName: null,
      loading: false
    };
  }

}

UserStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  switch(action.type) {

    case ACTION_TYPES.LOGIN_REQUEST: {
      userStoreInstance.handleLoginCompleted(action);
      break;
    }

    case ACTION_TYPES.LOGOUT: {
      userStoreInstance.handleLogout();
      break;
    }

    default:
      return;
  }

});

const userStoreInstance = new UserStore();
export default userStoreInstance;
