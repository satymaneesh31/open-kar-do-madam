document.getElementById('loveButton').addEventListener('click', function() {
  window.location.href = '../index.html';
});

const envelope = document.querySelector('.envelope-wrapper');
const music = document.getElementById('bg-music');
const heartsContainer = document.querySelector('.floating-hearts');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');

  if (envelope.classList.contains('flap')) {
    music.play();
    startFloatingHearts();
  } else {
    music.pause();
    music.currentTime = 0;
    stopFloatingHearts();
  }
});

let heartInterval;

function startFloatingHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart-shape';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

function stopFloatingHearts() {
  clearInterval(heartInterval);
  heartsContainer.innerHTML = '';
}
