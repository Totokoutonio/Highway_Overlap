import Highway from './highway.module.js';

class Overlap extends Highway.Transition {
  in({ from, to, done }) {      
      let el = document.querySelector('body');
      el.classList.add('transitions-active');      
      to.style.animation = "overlapTest 1s";
      to.addEventListener('animationend', () => {
        from.remove();
        el.classList.remove('transitions-active');
      });
      done();
  }
  out({ from, done }) {
    done();
  }
}

export default Overlap;
