// 애니메이션이다, 처음 '/', './' 꼭 넣어야 됨. 
import anime from "https://cdn.jsdelivr.net/npm/animejs/lib/anime.es.js";

anime({
  targets: '.ui-content-inbox',
  translateY: [250, 0], // from 100 to 250
  duration: 800,
  opacity: [0, 1],
  rotate: [20, 0],
}); 
anime({
  targets: '.homehome',
  rotate: 360,
  loop: true
}); 