
// import field from './generateField.js';
import { COLS_COUNT, ROWS_COUNT, generateRows } from './generateField';


generateRows(ROWS_COUNT, COLS_COUNT);


let NomerHoda = 0;
let KtoHodit = 1;
const undoBtn = document.querySelector('.undo-btn');

// document.querySelector('.restart-btn');
const redoBtn = document.querySelector('.redo-btn');
const wonMessage = document.querySelector('.won-title');
const restartBtn = document.querySelector('.restart-btn');
const wonMessageWho = document.querySelector('.won-message');
let GameOver = false;
let hadUndo = false;


let pole = {};
let memory = {};
let copyMemory = {};
let poleCopy = {};
let maxHod = 0;


function writeToPoleById(id, whatToWrite, OBJ) {
  const temp = id.split('');
  if (temp[3] != null) {
    const ID = Number(temp[2] + temp[3]);
    OBJ[`stroka${Math.floor(ID / ROWS_COUNT) + 1}`][ID % ROWS_COUNT] = whatToWrite;
  } else {
    const ID = Number(temp[2]);
    OBJ[`stroka${Math.floor(ID / ROWS_COUNT) + 1}`][ID % ROWS_COUNT] = whatToWrite;
  }
}


function winChecker(whatToCheck) {
  let winCounter = 0;
  let winCells = [];
  for (let i = 0; i < ROWS_COUNT; i += 1) {
    winCells = [];
    winCounter = 0;
    for (let b = 0; b < COLS_COUNT; b += 1) {
      if (pole[`stroka${i + 1}`][b] == whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById(`c-${i * ROWS_COUNT + b}`));
      } else {
        winCounter = 0;
      }

      if (winCounter === 3) {
        if (whatToCheck == 'X') {
          wonMessageWho.textContent = 'Crosses won!';
        } else {
          wonMessageWho.textContent = 'Toes won!';
        }
        wonMessage.classList.remove('hidden');
        winCells.forEach((element) => {
          element.classList.add('win');
          element.classList.add('horizontal');
        });
        GameOver = true;
        undoBtn.disabled = true;
        redoBtn.disabled = true;
        return;
      }
    }
  }
  winCounter = 0;
  winCells = [];
  for (let i = 0; i < COLS_COUNT; i += 1) {
    winCounter = 0;
    winCells = [];
    for (let b = 0; b < ROWS_COUNT; b += 1) {
      if (pole[`stroka${b + 1}`][i] == whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById(`c-${b * ROWS_COUNT + i}`));
      } else {
        winCounter = 0;
      }

      if (winCounter === 3) {
        if (whatToCheck == 'X') {
          wonMessageWho.textContent = 'Crosses won!';
        } else {
          wonMessageWho.textContent = 'Toes won!';
        }
        wonMessage.classList.remove('hidden');
        winCells.forEach((element) => {
          element.classList.add('win');
          element.classList.add('vertical');
        });
        GameOver = true;
        undoBtn.disabled = true;
        redoBtn.disabled = true;
        return;
      }
    }
  }
  winCounter = 0;
  winCells = [];
  for (let i = 0; i < ROWS_COUNT; i += 1) {
    if (pole[`stroka${i + 1}`][COLS_COUNT - 1 - i] == whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById(`c-${i * ROWS_COUNT + (COLS_COUNT - 1 - i)}`));
    } else {
      winCounter = 0;
    }
    if (winCounter === 3) {
      if (whatToCheck == 'X') {
        wonMessageWho.textContent = 'Crosses won!';
      } else {
        wonMessageWho.textContent = 'Toes won!';
      }
      wonMessage.classList.remove('hidden');
      winCells.forEach((element) => {
        element.classList.add('win');
        element.classList.add('diagonal-left');
      });
      GameOver = true;
      undoBtn.disabled = true;
      redoBtn.disabled = true;
      return;
    }
  }
  winCounter = 0;
  winCells = [];
  for (let i = 0; i < ROWS_COUNT; i += 1) {
    if (pole[`stroka${i + 1}`][i] == whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById(`c-${i * ROWS_COUNT + i}`));
    } else {
      winCounter = 0;
    }
    if (winCounter === 3) {
      if (whatToCheck === 'X') {
        wonMessageWho.textContent = 'Crosses won!';
      } else {
        wonMessageWho.textContent = 'Toes won!';
      }
      winCells.forEach((element) => {
        element.classList.add('win');
        element.classList.add('diagonal-right');
      });
      GameOver = true;
      undoBtn.disabled = true;
      redoBtn.disabled = true;
      wonMessage.classList.remove('hidden');
      return;
    }
  }
  if (NomerHoda >= 9) {
    GameOver = true;
    undoBtn.disabled = true;
    redoBtn.disabled = true;
    wonMessage.classList.remove('hidden');
    wonMessageWho.textContent = "It's a draw!";
  }
}


function Hod(target, Igrok, komyHod, memoryObj, poleObj, tip) {
  console.log(NomerHoda);

  if (!GameOver) {
    KtoHodit = komyHod;
    writeToPoleById(`${target.id}`, Igrok, poleObj);
    writeToPoleById(`${target.id}`, NomerHoda, memoryObj);
    NomerHoda += 1;
    undoBtn.disabled = false;
    winChecker(Igrok);
    localStorage.setItem('objPole', JSON.stringify(poleObj));
    localStorage.setItem('objMemory', JSON.stringify(memoryObj));
    localStorage.setItem('NomerHoda', JSON.stringify(NomerHoda));
    target.classList.add(tip);
    
  }
}

function Redo() {
  if(hadUndo){
  for (let i = 0; i < ROWS_COUNT; i += 1) {
    for (let b = 0; b < COLS_COUNT; b += 1) {
      if (memory[`stroka${i + 1}`][b] == NomerHoda) {
        if ((NomerHoda + 1) % 2 === 0) {
          const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
          Hod(target, 'O', 1, copyMemory, poleCopy, 'r');
        } else {
          const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
          Hod(target, 'X', 0, copyMemory, poleCopy, 'ch');
        }
        if(NomerHoda%2){
          KtoHodit = 0;
        }else{
          KtoHodit = 1;
        }
        if (maxHod === NomerHoda) {
          redoBtn.disabled = true;
        }
        return;
      }
    }
  }
}
}

function Undo() {
  if (!hadUndo) {
    poleCopy = JSON.parse(JSON.stringify(pole));
    copyMemory = JSON.parse(JSON.stringify(memory));
    maxHod = NomerHoda;
    redoBtn.disabled = false;
  } else if (maxHod === NomerHoda) {
    redoBtn.disabled = false;
  }
  for (let i = 0; i < ROWS_COUNT; i += 1) {
    for (let b = 0; b < COLS_COUNT; b += 1) {
      if (copyMemory[`stroka${i + 1}`][b] == NomerHoda - 1) {
        copyMemory[`stroka${i + 1}`][b] = 'N';
        poleCopy[`stroka${i + 1}`][b] = 'N';
        NomerHoda -= 1;
        if (NomerHoda === 0) {
          undoBtn.disabled = true;
        }
        localStorage.setItem('objPole', JSON.stringify(poleCopy));
        localStorage.setItem('objMemory', JSON.stringify(copyMemory));
        localStorage.setItem('NomerHoda', JSON.stringify(NomerHoda));
        const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
        target.classList.remove('r');
        target.classList.remove('ch');

        if(NomerHoda%2){
          KtoHodit = 0;
        }else{
          KtoHodit = 1;
        }
        hadUndo = true;
        

        return;
      }
    }
  }
}
function writeFieldToObj(ROWS, COLS, OBJ) {
  for (let i = 0; i < ROWS; i += 1) {
    const nameStr = [`stroka${i + 1}`];
    const a = [];
    for (let b = 0; b < COLS; b += 1) {
      const nameCell = 'N';
      OBJ[nameStr] = a.push(nameCell);
    }
    OBJ[nameStr] = a;
  }
}
function OnStart() {
  if (JSON.parse(localStorage.getItem('objPole')) != null) {
    pole = JSON.parse(localStorage.getItem('objPole'));
    memory = JSON.parse(localStorage.getItem('objMemory'));
    NomerHoda = JSON.parse(localStorage.getItem('NomerHoda'));
    if (NomerHoda % 2 === 0) {
      KtoHodit = 1;
    } else {
      KtoHodit = 0;
    }
    if (NomerHoda !== 0) {
      undoBtn.disabled = false;
    }
    for (let i = 0; i < ROWS_COUNT; i += 1) {
      for (let b = 0; b < COLS_COUNT; b += 1) {
        const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
        if (pole[`stroka${i + 1}`][b] === 'O') {
          target.classList.add('r');
        } else if (pole[`stroka${i + 1}`][b] === 'X') {
          target.classList.add('ch');
        }
      }
      winChecker('X');
      winChecker('O');
    }
  } else {
    writeFieldToObj(COLS_COUNT, ROWS_COUNT, pole);
    writeFieldToObj(COLS_COUNT, ROWS_COUNT, memory);
  }
}
function Restart() {
  writeFieldToObj(COLS_COUNT, ROWS_COUNT, pole);
  writeFieldToObj(COLS_COUNT, ROWS_COUNT, memory);

  for (let i = 0; i < ROWS_COUNT; i += 1) {
    for (let b = 0; b < COLS_COUNT; b += 1) {
      const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
      target.classList.remove('r');
      target.classList.remove('ch');
      target.classList.remove('win');
      target.classList.remove('horizontal');
      target.classList.remove('vertical');
      target.classList.remove('diagonal-left');
      target.classList.remove('diagonal-right');
    }
  }
  wonMessageWho.textContent = '';
  wonMessage.classList.add('hidden');
  GameOver = false;
  NomerHoda = 0;
  KtoHodit = 1;// первый всегда крестик
  localStorage.setItem('objPole', JSON.stringify(pole));
  localStorage.setItem('objMemory', JSON.stringify(memory));
  localStorage.setItem('NomerHoda', JSON.stringify(NomerHoda));
  OnStart();
}

undoBtn.addEventListener('click', Undo);
redoBtn.addEventListener('click', Redo);
restartBtn.addEventListener('click', Restart);


function CreateGameElement(event) {
  if (event.currentTarget.querySelector('krest') === null && event.currentTarget.querySelector('nolik') === null) {
    if (KtoHodit === 1) {
      if (hadUndo) {
        pole = JSON.parse(JSON.stringify(poleCopy));
        memory = JSON.parse(JSON.stringify(copyMemory));
        hadUndo = false;
      }

      Hod(event.currentTarget, 'X', 0, memory, pole, 'ch');
      redoBtn.disabled = true;
    } else {
      if (hadUndo) {
        pole = JSON.parse(JSON.stringify(poleCopy));
        memory = JSON.parse(JSON.stringify(copyMemory));
        hadUndo = false;
      }
      Hod(event.currentTarget, 'O', 1, memory, pole, 'r');
      redoBtn.disabled = true;
    }
  }
}

const cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener('click', CreateGameElement, false);
}
window.onfocus = function() {
  OnStart();
  if (NomerHoda === 0) {
    Restart();
  }
};



OnStart();


