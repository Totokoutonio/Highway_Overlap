import Highway from './highway.module.js';
import Overlap from './CustomTransition.js';

(() => {
  const H = new Highway.Core({
    transitions: {
      default: Overlap
    }
  });
})();
