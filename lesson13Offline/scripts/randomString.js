import { generateString } from './stringGenerator.js';
import * as generateStringModule from './stringGenerator.js'; // ესეც იმუშავებს.

document.getElementById('btn').addEventListener('click', () => {
    let res = document.getElementById("res");
    res.innerText = `Here goes some random data: ${generateString(36)}`;
});
