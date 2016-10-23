import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class ShelterStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      shelters: null,
      availableBeds: null,
      loading: false
    };
  }

  getState() {
    return this.state;
  }

  handleShelterLoaded(action) {
    this.state.shelters = action.shelters;
    this.state.availableBeds = action.availableBeds;
    this.state.loading = false;
    this.emitChange();
  }

}

ShelterStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  console.log(action);
  switch (action.type) {

    case ACTION_TYPES.SHELTER_REQUEST: {
      shelterStoreInstance.handleShelterLoaded(action);
      break;
    }

    default:
      return;
  }

});

const shelterStoreInstance = new ShelterStore();
export default shelterStoreInstance;
