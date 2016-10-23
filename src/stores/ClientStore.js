import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class ClientStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      client: null,
      loading: false
    };
  }

  getState() {
    return this.state;
  }

  handleClientLoaded(action) {
  this.state.client = action.client;
  this.state.loading = false;
  this.emitChange();
}

}

ClientStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  console.log(action);
  switch(action.type) {

    case ACTION_TYPES.CLIENT_REQUEST: {
      clientStoreInstance.handleClientLoaded(action);
      break;
    }

    default:
      return;
  }

});

const clientStoreInstance = new ClientStore();
export default clientStoreInstance;