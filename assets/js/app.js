const pinguim = document.querySelector('.pinguim');

function pinguimPular() {
  pinguim.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-5px)' },
    { transform: 'translateY(0)' },
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-2deg)' },
    { transform: 'rotate(0deg)' },
  ], {
    duration: 1000,
    iterations: Infinity
  });
}

pinguimPular();