import { diceAnimation, getNode } from './lib/index.js';

const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');

const handlerRollingDice = () => {};

rollingDiceButton.addEventListener('click', handlerRollingDice);
