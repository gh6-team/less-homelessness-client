import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class UserStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      username: null,
      userRole: null,
      userOrganization: null,
      loading: false
    };
  }

  getState() {
    return this.state;
  }

}

UserStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  switch(action.type) {

    case ACTION_TYPES.LOGIN_REQUEST: {
      this.state.username = action.username;
      this.state.userRole = action.userRole;
      this.state.userOrganization = action.userOrganization;
      this.state.loading = false;
      this.emitChange();
      break;
    }

    default:
      return;
  }

});

const userStoreInstance = new UserStore();
export default userStoreInstance;
