import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class ServiceStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      n: null,
      services: null,
      loading: false
    };
  }

  getState() {
    return this.state;
  }

  handleServiceLoaded(action) {
    this.state.services = action;
    this.state.loading = false;
    this.emitChange();
  }

}

ServiceStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  switch (action.type) {

    case ACTION_TYPES.SERVICE_REQUEST: {
      console.log(action);
      serviceStoreInstance.handleServiceLoaded(action);
      break;
    }

    default:
      return;
  }

});

const serviceStoreInstance = new ServiceStore();
export default serviceStoreInstance;
