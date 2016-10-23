import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import ACTION_TYPES from '../constants/actionTypes';

class ShelterStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      shelters: null,
      availableBeds: null,
      beds: null,
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

  handleBedsLoaded(action) {
    this.state.beds = action.beds;
    this.state.loading = false;
    this.emitChange();
  }

}

ShelterStore.dispatchToken = LHDispatcher.register(action => {
  "use strict";
  switch (action.type) {

    case ACTION_TYPES.SHELTER_REQUEST: {
      shelterStoreInstance.handleShelterLoaded(action);
      break;
    }

    case ACTION_TYPES.BED_REQUEST: {
      shelterStoreInstance.handleBedsLoaded(action);
      break;
    }

    default:
      return;
  }

});

const shelterStoreInstance = new ShelterStore();
export default shelterStoreInstance;
