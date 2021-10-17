const PLAYER_1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [],
  attack: function() {
    console.log(this.name + 'Fight...');
  }
}

const PLAYER_2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: [],
  attack: function() {
    console.log(this.name + 'Fight...');
  }
}

const ROOT = document.querySelector('.root');
const ARENAS = ROOT.querySelector('.arenas');
const RANDOM_BUTTON = ARENAS.querySelector('.button');

function createElement(tag, className) {
  const TAG = document.createElement(tag);
  if (className) {
    TAG.classList.add(className);
  }

  return TAG; 
}

function createPlayer(charachter) {
  const player = createElement('div', 'player' + charachter.player);
  const progressBar = createElement('div', 'progressbar');
  player.appendChild(progressBar);

  const life = createElement('div', 'life');
  life.style.width = charachter.hp + '%';
  progressBar.appendChild(life);

  const name = createElement('div', 'name');
  name.innerText = charachter.name;
  progressBar.appendChild(name);

  const character = createElement('div', 'character');
  player.appendChild(character);

  const img = createElement('img');
  img.src = charachter.img;
  character.appendChild(img);

  return player;
}

function changeHP(player) {
  const PLAYER_LIFE = document.querySelector('.player' + player.player + ' .life');
  player.hp -= randomNumber();
  PLAYER_LIFE.style.width = player.hp + '%';

  if (player.hp <= 0) {
    player.hp = 0;
    RANDOM_BUTTON.disabled = true;
    ARENAS.appendChild(playerLose(player.name));
  }
}

function playerLose(name) {
  const LOOSE_TITLE = createElement('div', 'loseTitle');
  LOOSE_TITLE.innerText = name + ' lose';

  return LOOSE_TITLE;
}

function randomNumber() {
  return Math.floor(Math.random() * 20);
}

RANDOM_BUTTON.addEventListener('click', () => {
  changeHP(PLAYER_1);
  changeHP(PLAYER_2)
});

ARENAS.appendChild(createPlayer(PLAYER_1));
ARENAS.appendChild(createPlayer(PLAYER_2));


