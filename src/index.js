
// import field from './generateField.js';
import { COLS_COUNT, ROWS_COUNT, generateRows } from './generateField';


generateRows(ROWS_COUNT, COLS_COUNT);


let NomerHoda = 0;
let KtoHodit = 1;

const undoBtn = document.querySelector('.undo-btn');
const redoBtn = document.querySelector('.redo-btn');
const wonMessage = document.querySelector('.won-title');
const restartBtn = document.querySelector('.restart-btn');
const wonMessageWho = document.querySelector('.won-message');
let GameOver = false;
let hadUndo = false;

let memory = {};
let copyMemory = {};
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
      if (memory[`stroka${i + 1}`][b]%2 === whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById(`c-${i * ROWS_COUNT + b}`));
      } else {
        winCounter = 0;
      }

      if (winCounter === 3) {
        if (whatToCheck === 0) {
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
      if (memory[`stroka${b + 1}`][i]%2 === whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById(`c-${b * ROWS_COUNT + i}`));
      } else {
        winCounter = 0;
      }

      if (winCounter === 3) {
        if (whatToCheck === 0) {
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
    if (memory[`stroka${i + 1}`][COLS_COUNT - 1 - i]%2 === whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById(`c-${i * ROWS_COUNT + (COLS_COUNT - 1 - i)}`));
    } else {
      winCounter = 0;
    }
    if (winCounter === 3) {
      if (whatToCheck === 0) {
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
    if (memory[`stroka${i + 1}`][i]%2 === whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById(`c-${i * ROWS_COUNT + i}`));
    } else {
      winCounter = 0;
    }
    if (winCounter === 3) {
      if (whatToCheck === 0) {
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


function Hod(target, komyHod, memoryObj, tip) {
  console.log(NomerHoda);

  if (!GameOver) {
    KtoHodit = komyHod;
    writeToPoleById(`${target.id}`, NomerHoda, memoryObj);
    NomerHoda += 1;
    undoBtn.disabled = false;
    winChecker(komyHod);
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
          Hod(target, 1, copyMemory, 'r');
        } else {
          const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
          Hod(target, 0, copyMemory, 'ch');
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
    copyMemory = JSON.parse(JSON.stringify(memory));
    maxHod = NomerHoda;
    localStorage.setItem('maxHod', JSON.stringify(maxHod));     
    redoBtn.disabled = false;
  } else if (maxHod === NomerHoda) {
    redoBtn.disabled = false;
  }
  for (let i = 0; i < ROWS_COUNT; i += 1) {
    for (let b = 0; b < COLS_COUNT; b += 1) {
      if (copyMemory[`stroka${i + 1}`][b] == NomerHoda - 1) {
        copyMemory[`stroka${i + 1}`][b] = 'N';
        NomerHoda -= 1;
        if (NomerHoda === 0) {
          undoBtn.disabled = true;
        }
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
  if (JSON.parse(localStorage.getItem('objMemory')) != null) {
    memory = JSON.parse(localStorage.getItem('objMemory'));
    NomerHoda = JSON.parse(localStorage.getItem('NomerHoda'));
    maxHod = JSON.parse(localStorage.getItem('maxHod'));
    if (NomerHoda % 2 === 0) {
      KtoHodit = 1;
    } else {
      KtoHodit = 0;
    }
    if(NomerHoda === 0){
      undoBtn.disabled = true;
      redoBtn.disabled = true;
    }else{
      undoBtn.disabled = false;
      if(hadUndo){
        redoBtn.disabled = false;
      }
      
    }
      
    for (let i = 0; i < ROWS_COUNT; i += 1) {
      for (let b = 0; b < COLS_COUNT; b += 1) {
        const target = document.getElementById(`c-${i * ROWS_COUNT + b}`);
        if (memory[`stroka${i + 1}`][b]%2 === 1) {
          target.classList.add('r');
        } else if (memory[`stroka${i + 1}`][b]%2 === 0) {
          target.classList.add('ch');
        }else{
          target.classList.remove('ch');
          target.classList.remove('r');
        }
      }
    }
    winChecker(0);
    winChecker(1);
  } else {
    writeFieldToObj(COLS_COUNT, ROWS_COUNT, memory);
  }
}
function Restart() {
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
        memory = JSON.parse(JSON.stringify(copyMemory));
        hadUndo = false;
      }

      Hod(event.currentTarget, 0, memory, 'ch');
      redoBtn.disabled = true;
    } else {
      if (hadUndo) {
        memory = JSON.parse(JSON.stringify(copyMemory));
        hadUndo = false;
      }
      Hod(event.currentTarget, 1, memory, 'r');
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


