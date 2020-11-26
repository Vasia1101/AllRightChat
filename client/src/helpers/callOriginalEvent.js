import { isFunctionType } from './isFunctionType.js'

export const callOriginalEvent = (originalHandler, event) => {
    isFunctionType(originalHandler) && originalHandler.call(event.target, event);
}