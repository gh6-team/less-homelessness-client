import ExtendableError from "./ExtendableError";

export default class UnauthenticatedError extends ExtendableError {
  constructor(message) {
    super(message);
  }
}
