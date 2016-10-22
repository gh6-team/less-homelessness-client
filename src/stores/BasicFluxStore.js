import EventEmitter from 'events';

const CHANGE_EVENT = 'CHANGE_EVENT';

class BasicFluxStore extends EventEmitter {

  constructor() {
    super();
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(handler) {
    this.on(CHANGE_EVENT, handler);
  }

  removeChangeListener(handler) {
    this.removeListener(CHANGE_EVENT, handler);
  }

}

BasicFluxStore.dispatchToken = null;

export default BasicFluxStore;
