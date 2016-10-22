import BasicFluxStore from './BasicFluxStore';
import LHDispatcher from '../dispatchers/LHDispatcher';
import {ACTION_TYPES} from '../constants/actionTypes';

class ShelterStore extends BasicFluxStore {

  constructor() {
    super();
    this.state = {
      shelters: []
    };
  }

  getState() {
    return this.state;
  }

}

ShelterStore.dispatchToken = LHDispatcher.register( action => {
  "use strict";
  switch(action.type) {

    case ACTION_TYPES.LOAD_ORGANIZATIONS: {
      // console.log("load shelters action");
      this.state = {shelters: [Math.random().toString()]};
      this.emitChange();
      break;
    }

    default:
      return;
  }

});

const shelterStoreInstance = new ShelterStore();
export default shelterStoreInstance;
