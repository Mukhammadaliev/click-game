const elStartGame = document.querySelector('.game-btn');
const elContentGame = document.querySelector('.game-content');
const elGame = document.querySelector('.game');
const elResult = document.querySelector('.result')
const elTime = document.querySelector('.time')
const elInputValue = document.querySelector('.timing-game');




let isStartGame = false;
let resultNum = 0;






const show = (el) => {
  el.classList.remove('hide')
}
const hide = (el) => {
  el.classList.add('hide')
}




const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const startGame = () => {
  resultNum = 0
  let time = elInputValue.value;
  isStartGame = true;
  document.querySelector('.game-time').style.opacity = '1';
  elInputValue.setAttribute('disabled', 'true');
  elContentGame.style.backgroundColor = '#fff';
  elTime.textContent = time;
  hide(elStartGame);

  const interval = setInterval(() => {
    time--;
    elTime.textContent = time;
    if (time <= 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
  renderImage();
  console.log(elStartGame);
}

const renderImage = () => {

  elGame.innerHTML = '';
  const box = document.createElement('div')
  const elGameImage = document.createElement('img')



  let boxSize = getRandom(70, 120);
  let gameSize = elContentGame.getBoundingClientRect();
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;

  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.top = `${getRandom(maxTop, 0)}px`;
  box.style.left = `${getRandom(maxLeft, 0)}px`;

  box.classList.add('game-box');
  elGameImage.src = 'img/roach.png';
  elGameImage.classList.add('game-img')

  elResult.textContent = resultNum

  box.appendChild(elGameImage)
  elGame.appendChild(box)
  resultNum++
}

const endGame = () => {
  isStartGame = false;
  elInputValue.removeAttribute('disabled')
  elGame.innerHTML = ''
  document.querySelector('.game-time').style.opacity = '0';
  elContentGame.style.backgroundColor = 'bisque'
  show(elStartGame)
}







elContentGame.addEventListener('click', (e) => {
  if (!isStartGame) {
    return
  }

  if (e.target.matches(".game-img")) {
    renderImage();
  }
})

elStartGame.addEventListener('click', startGame)
