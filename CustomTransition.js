
import Highway from './highway.module.js';


class Overlap extends Highway.Transition {
  in({ from, to, trigger, done }) {
      
      from.style.position = 'absolute';
      to.style.animation = "overlapTest 1s";      
      
      let timeremove = setTimeout(() => from.remove(), 700)
      
      done();
  }

  out({ from, done }) {
    done();
    
  }
}

export default Overlap;
