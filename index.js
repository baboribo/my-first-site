// 애니메이션이다, 처음 '/', './' 꼭 넣어야 됨. 
import anime from '/node_modules/animejs/lib/anime.es.js';

anime({
  targets: '.ui-content-inbox',
  translateY: [250, 0], // from 100 to 250
  duration: 800,
  easing: 'spring(1, 50, 10, 0)'
}); 