import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { renderMenuButtons } from './src/presentation/menu-buttons/render-menu-buttons';
import { renderGame } from './src/presentation/game/render-game';

document.querySelector('#app').innerHTML = `
  <div class="app">
    <div class="game">

    </div>
    <div class="menu-buttons">
    </div>
    <div class="powered">
      <h3>Powered by</h3>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
  </div>
`;

const menuButtons = document.querySelector('.menu-buttons');
const divGame = document.querySelector('.game');
renderMenuButtons(menuButtons);
renderGame(divGame);