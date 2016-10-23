import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class ServiceStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      n: null,
      availableBeds: null,
      loading: false
    };
  }

  getState() {
    return this.state;
  }

  handleServiceLoaded(action) {
    this.state.shelters = action.shelters;
    this.state.availableBeds = action.availableBeds;
    this.state.loading = false;
    this.emitChange();
  }

}

ServiceStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  switch (action.type) {

    case ACTION_TYPES.SERVICE_REQUEST: {
      serviceStoreInstance.handleServiceLoaded(action);
      break;
    }

    default:
      return;
  }

});

const serviceStoreInstance = new ServiceStore();
export default serviceStoreInstance;
