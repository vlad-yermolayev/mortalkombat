const PLAYER_1 = {
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [],
  attack: function() {
    console.log(this.name + 'Fight...');
  }
}

const PLAYER_2 = {
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
function createPlayer(className, charachter) {
  const player = document.createElement('div');
  player.classList.add(className);

  const progressBar = document.createElement('div');
  progressBar.classList.add('progressbar');
  player.appendChild(progressBar);

  const life = document.createElement('div');
  life.classList.add('life');
  life.style.width = charachter.hp;
  progressBar.appendChild(life);

  const name = document.createElement('div');
  name.classList.add('name');
  name.innerText = charachter.name;
  progressBar.appendChild(name);

  const character = document.createElement('div');
  character.classList.add('character');
  player.appendChild(character);

  const img = document.createElement('img');
  img.src = charachter.img;
  character.appendChild(img);

  ARENAS.appendChild(player);
}

createPlayer('player1', PLAYER_1);
createPlayer('player2', PLAYER_2);


