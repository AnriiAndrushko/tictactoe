/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generateField.js":
/*!******************************!*\
  !*** ./src/generateField.js ***!
  \******************************/
/*! exports provided: ROWS_COUNT, COLS_COUNT, generateRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS_COUNT", function() { return ROWS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS_COUNT", function() { return COLS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRows", function() { return generateRows; });
var ROWS_COUNT = 3;
var COLS_COUNT = 3;
var field = document.querySelector('.field');

function generateCols(row, colsCount, rowId) {
  for (var i = 0; i < colsCount; i++) {
    var id = rowId * colsCount + i;
    var col = document.createElement('div');
    col.id = "c-".concat(id);
    col.dataset.id = id;
    col.className = 'cell';
    row.appendChild(col);
  }
}

function generateRows(rowsCount, colsCount) {
  for (var i = 0; i < rowsCount; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.id = "r-".concat(i);
    generateCols(row, colsCount, i);
    field.appendChild(row);
  }
} //generateRows(ROWS_COUNT, COLS_COUNT);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateField */ "./src/generateField.js");
// import field from './generateField.js';

Object(_generateField__WEBPACK_IMPORTED_MODULE_0__["generateRows"])(_generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]);
var NomerHoda = 0;
var KtoHodit = 1;
var undoBtn = document.querySelector('.undo-btn');
var redoBtn = document.querySelector('.redo-btn');
var wonMessage = document.querySelector('.won-title');
var restartBtn = document.querySelector('.restart-btn');
var wonMessageWho = document.querySelector('.won-message');
var GameOver = false;
var hadUndo = false;
var memory = {};
var copyMemory = {};
var maxHod = 0;

function winChecker(whatToCheck) {
  var winCounter = 0;
  var winCells = [];

  for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
    winCells = [];
    winCounter = 0;

    for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
      if (memory["stroka".concat(i + 1)][b] % 2 === whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b)));
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
        winCells.forEach(function (element) {
          element.classList.add('win');
          element.classList.add('horizontal');
        });
        GameOver = true;
        undoBtn.disabled = true;
        redoBtn.disabled = true;
        localStorage.setItem('copyMemory', null);
        localStorage.setItem('objMemory', null);
        return;
      }
    }
  }

  winCounter = 0;
  winCells = [];

  for (var _i = 0; _i < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; _i += 1) {
    winCounter = 0;
    winCells = [];

    for (var _b = 0; _b < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; _b += 1) {
      if (memory["stroka".concat(_b + 1)][_i] % 2 === whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById("c-".concat(_b * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + _i)));
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
        winCells.forEach(function (element) {
          element.classList.add('win');
          element.classList.add('vertical');
        });
        GameOver = true;
        undoBtn.disabled = true;
        redoBtn.disabled = true;
        localStorage.setItem('copyMemory', null);
        localStorage.setItem('objMemory', null);
        return;
      }
    }
  }

  winCounter = 0;
  winCells = [];

  for (var _i2 = 0; _i2 < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; _i2 += 1) {
    if (memory["stroka".concat(_i2 + 1)][_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"] - 1 - _i2] % 2 === whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById("c-".concat(_i2 * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + (_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"] - 1 - _i2))));
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
      winCells.forEach(function (element) {
        element.classList.add('win');
        element.classList.add('diagonal-left');
      });
      GameOver = true;
      undoBtn.disabled = true;
      redoBtn.disabled = true;
      localStorage.setItem('copyMemory', null);
      localStorage.setItem('objMemory', null);
      return;
    }
  }

  winCounter = 0;
  winCells = [];

  for (var _i3 = 0; _i3 < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; _i3 += 1) {
    if (memory["stroka".concat(_i3 + 1)][_i3] % 2 === whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById("c-".concat(_i3 * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + _i3)));
    } else {
      winCounter = 0;
    }

    if (winCounter === 3) {
      if (whatToCheck === 0) {
        wonMessageWho.textContent = 'Crosses won!';
      } else {
        wonMessageWho.textContent = 'Toes won!';
      }

      winCells.forEach(function (element) {
        element.classList.add('win');
        element.classList.add('diagonal-right');
      });
      GameOver = true;
      undoBtn.disabled = true;
      redoBtn.disabled = true;
      localStorage.setItem('copyMemory', null);
      localStorage.setItem('objMemory', null);
      wonMessage.classList.remove('hidden');
      return;
    }
  }

  if (NomerHoda >= 9) {
    GameOver = true;
    undoBtn.disabled = true;
    redoBtn.disabled = true;
    localStorage.setItem('copyMemory', null);
    localStorage.setItem('objMemory', null);
    wonMessage.classList.remove('hidden');
    wonMessageWho.textContent = "It's a draw!";
  }
}

function Hod(target, komyHod, memoryObj, tip, undoOrReal) {
  // console.log(NomerHoda);
  var returningOBJ = memoryObj;

  if (!GameOver) {
    KtoHodit = komyHod;
    var temp = "".concat(target.id).split('');

    if (temp[3] != null) {
      var ID = Number(temp[2] + temp[3]);
      returningOBJ["stroka".concat(Math.floor(ID / _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]) + 1)][ID % _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]] = NomerHoda;
    } else {
      var _ID = Number(temp[2]);

      returningOBJ["stroka".concat(Math.floor(_ID / _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]) + 1)][_ID % _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]] = NomerHoda;
    }

    NomerHoda += 1;
    undoBtn.disabled = false;
    winChecker(komyHod);
    localStorage.setItem('objMemory', JSON.stringify(returningOBJ));
    localStorage.setItem('NomerHoda', JSON.stringify(NomerHoda));

    if (undoOrReal) {
      localStorage.setItem('copyMemory', JSON.stringify(returningOBJ));
    }

    target.classList.add(tip);
  }

  return returningOBJ;
}

function Redo() {
  memory = JSON.parse(localStorage.getItem('copyMemory'));
  copyMemory = JSON.parse(localStorage.getItem('objMemory')); // console.log(copyMemory);

  for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
    for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
      if (memory["stroka".concat(i + 1)][b] === NomerHoda) {
        if ((NomerHoda + 1) % 2 === 0) {
          var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));
          copyMemory = Hod(target, 1, copyMemory, 'r', false);
        } else {
          var _target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

          copyMemory = Hod(_target, 0, copyMemory, 'ch', false);
        }

        if (NomerHoda % 2) {
          KtoHodit = 0;
        } else {
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

function Undo() {
  if (!hadUndo) {
    copyMemory = JSON.parse(JSON.stringify(memory));
    localStorage.setItem('copyMemory', JSON.stringify(copyMemory));
    maxHod = NomerHoda;
    localStorage.setItem('maxHod', JSON.stringify(maxHod));
    redoBtn.disabled = false;
  } else if (maxHod === NomerHoda) {
    redoBtn.disabled = false;
  }

  for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
    for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
      if (copyMemory["stroka".concat(i + 1)][b] === NomerHoda - 1) {
        copyMemory["stroka".concat(i + 1)][b] = 'N';
        NomerHoda -= 1;

        if (NomerHoda === 0) {
          undoBtn.disabled = true;
        }

        localStorage.setItem('objMemory', JSON.stringify(copyMemory));
        localStorage.setItem('NomerHoda', JSON.stringify(NomerHoda));
        var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));
        target.classList.remove('r');
        target.classList.remove('ch');

        if (NomerHoda % 2) {
          KtoHodit = 0;
        } else {
          KtoHodit = 1;
        }

        hadUndo = true;
        return;
      }
    }
  }
}

function writeFieldToObj(ROWS, COLS, OBJ) {
  var returningOBJ = OBJ;

  for (var i = 0; i < ROWS; i += 1) {
    var nameStr = ["stroka".concat(i + 1)];
    var a = [];

    for (var b = 0; b < COLS; b += 1) {
      var nameCell = 'N';
      returningOBJ[nameStr] = a.push(nameCell);
    }

    returningOBJ[nameStr] = a;
  }

  return returningOBJ;
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

    if (NomerHoda === 0) {
      undoBtn.disabled = true;
      redoBtn.disabled = true;

      if (NomerHoda < maxHod) {
        redoBtn.disabled = false;
      }
    } else {
      undoBtn.disabled = false;

      if (NomerHoda < maxHod) {
        redoBtn.disabled = false;
      }
    }

    for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
      for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
        var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

        if (memory["stroka".concat(i + 1)][b] % 2 === 1) {
          target.classList.add('r');
        } else if (memory["stroka".concat(i + 1)][b] % 2 === 0) {
          target.classList.add('ch');
        } else {
          target.classList.remove('ch');
          target.classList.remove('r');
        }
      }
    }

    winChecker(0);
    winChecker(1);
  } else {
    memory = writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);
    copyMemory = writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);
    localStorage.setItem('objMemory', JSON.stringify(memory));
    localStorage.setItem('copyMemory', JSON.stringify(memory));
  }
}

function Restart() {
  memory = writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);
  copyMemory = writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);
  localStorage.setItem('objMemory', JSON.stringify(memory));
  localStorage.setItem('copyMemory', JSON.stringify(memory));

  for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
    for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
      var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));
      target.classList.remove('r');
      target.classList.remove('ch');
      target.classList.remove('win');
      target.classList.remove('horizontal');
      target.classList.remove('vertical');
      target.classList.remove('diagonal-left');
      target.classList.remove('diagonal-right');
    }
  }

  maxHod = 0;
  localStorage.setItem('maxHod', JSON.stringify(memory));
  wonMessageWho.textContent = '';
  wonMessage.classList.add('hidden');
  GameOver = false;
  NomerHoda = 0;
  KtoHodit = 1; // первый всегда крестик

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

      memory = Hod(event.currentTarget, 0, memory, 'ch', true);
      redoBtn.disabled = true;
    } else {
      if (hadUndo) {
        memory = JSON.parse(JSON.stringify(copyMemory));
        hadUndo = false;
      }

      memory = Hod(event.currentTarget, 1, memory, 'r', true);
      redoBtn.disabled = true;
    }
  }
}

var cells = document.getElementsByClassName('cell');

for (var i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener('click', CreateGameElement, false);
}

window.onfocus = function () {
  OnStart();

  if (NomerHoda === 0) {
    Restart();
  }
};

OnStart();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwibWVtb3J5IiwiY29weU1lbW9yeSIsIm1heEhvZCIsIndpbkNoZWNrZXIiLCJ3aGF0VG9DaGVjayIsIndpbkNvdW50ZXIiLCJ3aW5DZWxscyIsImIiLCJwdXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkIiwiZGlzYWJsZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSG9kIiwidGFyZ2V0Iiwia29teUhvZCIsIm1lbW9yeU9iaiIsInRpcCIsInVuZG9PclJlYWwiLCJyZXR1cm5pbmdPQkoiLCJ0ZW1wIiwic3BsaXQiLCJJRCIsIk51bWJlciIsIk1hdGgiLCJmbG9vciIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWRvIiwicGFyc2UiLCJnZXRJdGVtIiwiVW5kbyIsIndyaXRlRmllbGRUb09iaiIsIlJPV1MiLCJDT0xTIiwiT0JKIiwibmFtZVN0ciIsImEiLCJuYW1lQ2VsbCIsIk9uU3RhcnQiLCJSZXN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNyZWF0ZUdhbWVFbGVtZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2VsbHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwid2luZG93Iiwib25mb2N1cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUNQLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLFNBQTNCLEVBQXNDQyxLQUF0QyxFQUE2QztBQUMzQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQXBCLEVBQStCRSxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQU1DLEVB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RyxLQUFMLENBQVdILElBQUksQ0FBQ0MsU0FBTCxDQUFlaEMsVUFBZixDQUFYLENBQVQ7QUFDQUYsZUFBTyxHQUFHLEtBQVY7QUFDRDs7QUFDREMsWUFBTSxHQUFHbUIsR0FBRyxDQUFDOEIsS0FBSyxDQUFDQyxhQUFQLEVBQXNCLENBQXRCLEVBQXlCbEQsTUFBekIsRUFBaUMsR0FBakMsRUFBc0MsSUFBdEMsQ0FBWjtBQUNBTixhQUFPLENBQUNzQixRQUFSLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELElBQU1tQyxLQUFLLEdBQUczRSxRQUFRLENBQUM0RSxzQkFBVCxDQUFnQyxNQUFoQyxDQUFkOztBQUNBLEtBQUssSUFBSXRFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxRSxLQUFLLENBQUNFLE1BQTFCLEVBQWtDdkUsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0FBQ3hDcUUsT0FBSyxDQUFDckUsQ0FBRCxDQUFMLENBQVNpRSxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsaUJBQW5DLEVBQXNELEtBQXREO0FBQ0Q7O0FBQ0RNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCVixTQUFPOztBQUNQLE1BQUl0RCxTQUFTLEtBQUssQ0FBbEIsRUFBcUI7QUFDbkJ1RCxXQUFPO0FBQ1I7QUFDRixDQUxEOztBQU9BRCxPQUFPLEciLCJmaWxlIjoibWFpbi4xNGJjZDI3MDljMzBkZTM0OTZiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBST1dTX0NPVU5UID0gMztcbmV4cG9ydCBjb25zdCBDT0xTX0NPVU5UID0gMztcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgcm93SWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGlkID0gcm93SWQgKiBjb2xzQ291bnQgKyBpO1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5pZCA9IGBjLSR7aWR9YDtcbiAgICBjb2wuZGF0YXNldC5pZCA9IGlkO1xuICAgIGNvbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93cyhyb3dzQ291bnQsIGNvbHNDb3VudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NDb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIHJvdy5pZCA9IGByLSR7aX1gO1xuICAgIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgaSk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG4vL2dlbmVyYXRlUm93cyhST1dTX0NPVU5ULCBDT0xTX0NPVU5UKTtcbiIsIi8vIGltcG9ydCBmaWVsZCBmcm9tICcuL2dlbmVyYXRlRmllbGQuanMnO1xuaW1wb3J0IHsgQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgZ2VuZXJhdGVSb3dzIH0gZnJvbSAnLi9nZW5lcmF0ZUZpZWxkJztcblxuZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuXG5sZXQgTm9tZXJIb2RhID0gMDtcbmxldCBLdG9Ib2RpdCA9IDE7XG5cbmNvbnN0IHVuZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idG4nKTtcbmNvbnN0IHJlZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkby1idG4nKTtcbmNvbnN0IHdvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLXRpdGxlJyk7XG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtYnRuJyk7XG5jb25zdCB3b25NZXNzYWdlV2hvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1tZXNzYWdlJyk7XG5sZXQgR2FtZU92ZXIgPSBmYWxzZTtcbmxldCBoYWRVbmRvID0gZmFsc2U7XG5cbmxldCBtZW1vcnkgPSB7fTtcbmxldCBjb3B5TWVtb3J5ID0ge307XG5sZXQgbWF4SG9kID0gMDtcblxuZnVuY3Rpb24gd2luQ2hlY2tlcih3aGF0VG9DaGVjaykge1xuICBsZXQgd2luQ291bnRlciA9IDA7XG4gIGxldCB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIHdpbkNlbGxzID0gW107XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gJSAyID09PSB3aGF0VG9DaGVjaykge1xuICAgICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICAgIGlmICh3aGF0VG9DaGVjayA9PT0gMCkge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICAgIH1cbiAgICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgd2luQ2VsbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3B5TWVtb3J5JywgbnVsbCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB3aW5Db3VudGVyID0gMDtcbiAgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT0xTX0NPVU5UOyBpICs9IDEpIHtcbiAgICB3aW5Db3VudGVyID0gMDtcbiAgICB3aW5DZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgUk9XU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAobWVtb3J5W2BzdHJva2Eke2IgKyAxfWBdW2ldICUgMiA9PT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7YiAqIFJPV1NfQ09VTlQgKyBpfWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgICBpZiAod2hhdFRvQ2hlY2sgPT09IDApIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgICB9XG4gICAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHdpbkNlbGxzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcHlNZW1vcnknLCBudWxsKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdpbkNvdW50ZXIgPSAwO1xuICB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bQ09MU19DT1VOVCAtIDEgLSBpXSAlIDIgPT09IHdoYXRUb0NoZWNrKSB7XG4gICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyAoQ09MU19DT1VOVCAtIDEgLSBpKX1gKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgaWYgKHdoYXRUb0NoZWNrID09PSAwKSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgIH1cbiAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB3aW5DZWxscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWdvbmFsLWxlZnQnKTtcbiAgICAgIH0pO1xuICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3B5TWVtb3J5JywgbnVsbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgbnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHdpbkNvdW50ZXIgPSAwO1xuICB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1baV0gJSAyID09PSB3aGF0VG9DaGVjaykge1xuICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgaX1gKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgaWYgKHdoYXRUb0NoZWNrID09PSAwKSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgIH1cbiAgICAgIHdpbkNlbGxzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhZ29uYWwtcmlnaHQnKTtcbiAgICAgIH0pO1xuICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3B5TWVtb3J5JywgbnVsbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgbnVsbCk7XG4gICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoTm9tZXJIb2RhID49IDkpIHtcbiAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcHlNZW1vcnknLCBudWxsKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgbnVsbCk7XG4gICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gXCJJdCdzIGEgZHJhdyFcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBIb2QodGFyZ2V0LCBrb215SG9kLCBtZW1vcnlPYmosIHRpcCwgdW5kb09yUmVhbCkge1xuICAvLyBjb25zb2xlLmxvZyhOb21lckhvZGEpO1xuICBjb25zdCByZXR1cm5pbmdPQkogPSBtZW1vcnlPYmo7XG4gIGlmICghR2FtZU92ZXIpIHtcbiAgICBLdG9Ib2RpdCA9IGtvbXlIb2Q7XG5cbiAgICBjb25zdCB0ZW1wID0gYCR7dGFyZ2V0LmlkfWAuc3BsaXQoJycpO1xuICAgIGlmICh0ZW1wWzNdICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0gKyB0ZW1wWzNdKTtcbiAgICAgIHJldHVybmluZ09CSltgc3Ryb2thJHtNYXRoLmZsb29yKElEIC8gUk9XU19DT1VOVCkgKyAxfWBdW0lEICUgUk9XU19DT1VOVF0gPSBOb21lckhvZGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0pO1xuICAgICAgcmV0dXJuaW5nT0JKW2BzdHJva2Eke01hdGguZmxvb3IoSUQgLyBST1dTX0NPVU5UKSArIDF9YF1bSUQgJSBST1dTX0NPVU5UXSA9IE5vbWVySG9kYTtcbiAgICB9XG5cbiAgICBOb21lckhvZGEgKz0gMTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2luQ2hlY2tlcihrb215SG9kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkocmV0dXJuaW5nT0JKKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05vbWVySG9kYScsIEpTT04uc3RyaW5naWZ5KE5vbWVySG9kYSkpO1xuXG4gICAgaWYgKHVuZG9PclJlYWwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3B5TWVtb3J5JywgSlNPTi5zdHJpbmdpZnkocmV0dXJuaW5nT0JKKSk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQodGlwKTtcbiAgfVxuICByZXR1cm4gcmV0dXJuaW5nT0JKO1xufVxuXG5mdW5jdGlvbiBSZWRvKCkge1xuICBtZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3B5TWVtb3J5JykpO1xuXG4gIGNvcHlNZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpNZW1vcnknKSk7XG5cbiAgLy8gY29uc29sZS5sb2coY29weU1lbW9yeSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PT0gTm9tZXJIb2RhKSB7XG4gICAgICAgIGlmICgoTm9tZXJIb2RhICsgMSkgJSAyID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgICAgY29weU1lbW9yeSA9IEhvZCh0YXJnZXQsIDEsIGNvcHlNZW1vcnksICdyJywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgIGNvcHlNZW1vcnkgPSBIb2QodGFyZ2V0LCAwLCBjb3B5TWVtb3J5LCAnY2gnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE5vbWVySG9kYSAlIDIpIHtcbiAgICAgICAgICBLdG9Ib2RpdCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgS3RvSG9kaXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhIb2QgPT09IE5vbWVySG9kYSkge1xuICAgICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gVW5kbygpIHtcbiAgaWYgKCFoYWRVbmRvKSB7XG4gICAgY29weU1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVtb3J5KSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29weU1lbW9yeScsIEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcblxuICAgIG1heEhvZCA9IE5vbWVySG9kYTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWF4SG9kJywgSlNPTi5zdHJpbmdpZnkobWF4SG9kKSk7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKG1heEhvZCA9PT0gTm9tZXJIb2RhKSB7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChjb3B5TWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID09PSBOb21lckhvZGEgLSAxKSB7XG4gICAgICAgIGNvcHlNZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gPSAnTic7XG4gICAgICAgIE5vbWVySG9kYSAtPSAxO1xuICAgICAgICBpZiAoTm9tZXJIb2RhID09PSAwKSB7XG4gICAgICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05vbWVySG9kYScsIEpTT04uc3RyaW5naWZ5KE5vbWVySG9kYSkpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3InKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoJyk7XG5cbiAgICAgICAgaWYgKE5vbWVySG9kYSAlIDIpIHtcbiAgICAgICAgICBLdG9Ib2RpdCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgS3RvSG9kaXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGhhZFVuZG8gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB3cml0ZUZpZWxkVG9PYmooUk9XUywgQ09MUywgT0JKKSB7XG4gIGNvbnN0IHJldHVybmluZ09CSiA9IE9CSjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTOyBpICs9IDEpIHtcbiAgICBjb25zdCBuYW1lU3RyID0gW2BzdHJva2Eke2kgKyAxfWBdO1xuICAgIGNvbnN0IGEgPSBbXTtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFM7IGIgKz0gMSkge1xuICAgICAgY29uc3QgbmFtZUNlbGwgPSAnTic7XG4gICAgICByZXR1cm5pbmdPQkpbbmFtZVN0cl0gPSBhLnB1c2gobmFtZUNlbGwpO1xuICAgIH1cbiAgICByZXR1cm5pbmdPQkpbbmFtZVN0cl0gPSBhO1xuICB9XG4gIHJldHVybiByZXR1cm5pbmdPQko7XG59XG5mdW5jdGlvbiBPblN0YXJ0KCkge1xuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2JqTWVtb3J5JykpICE9IG51bGwpIHtcbiAgICBtZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpNZW1vcnknKSk7XG4gICAgTm9tZXJIb2RhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTm9tZXJIb2RhJykpO1xuICAgIG1heEhvZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21heEhvZCcpKTtcbiAgICBpZiAoTm9tZXJIb2RhICUgMiA9PT0gMCkge1xuICAgICAgS3RvSG9kaXQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBLdG9Ib2RpdCA9IDA7XG4gICAgfVxuICAgIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBpZiAoTm9tZXJIb2RhIDwgbWF4SG9kKSB7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgaWYgKE5vbWVySG9kYSA8IG1heEhvZCkge1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdICUgMiA9PT0gMSkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdICUgMiA9PT0gMCkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaCcpO1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luQ2hlY2tlcigwKTtcbiAgICB3aW5DaGVja2VyKDEpO1xuICB9IGVsc2Uge1xuICAgIG1lbW9yeSA9IHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBtZW1vcnkpO1xuICAgIGNvcHlNZW1vcnkgPSB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkobWVtb3J5KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcHlNZW1vcnknLCBKU09OLnN0cmluZ2lmeShtZW1vcnkpKTtcbiAgfVxufVxuZnVuY3Rpb24gUmVzdGFydCgpIHtcbiAgbWVtb3J5ID0gd3JpdGVGaWVsZFRvT2JqKENPTFNfQ09VTlQsIFJPV1NfQ09VTlQsIG1lbW9yeSk7XG4gIGNvcHlNZW1vcnkgPSB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29weU1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3InKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaCcpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RpYWdvbmFsLWxlZnQnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFnb25hbC1yaWdodCcpO1xuICAgIH1cbiAgfVxuICBtYXhIb2QgPSAwO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWF4SG9kJywgSlNPTi5zdHJpbmdpZnkobWVtb3J5KSk7XG4gIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnJztcbiAgd29uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgR2FtZU92ZXIgPSBmYWxzZTtcbiAgTm9tZXJIb2RhID0gMDtcbiAgS3RvSG9kaXQgPSAxOyAvLyDQv9C10YDQstGL0Lkg0LLRgdC10LPQtNCwINC60YDQtdGB0YLQuNC6XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShtZW1vcnkpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05vbWVySG9kYScsIEpTT04uc3RyaW5naWZ5KE5vbWVySG9kYSkpO1xuICBPblN0YXJ0KCk7XG59XG5cbnVuZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVbmRvKTtcbnJlZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZWRvKTtcbnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZXN0YXJ0KTtcblxuZnVuY3Rpb24gQ3JlYXRlR2FtZUVsZW1lbnQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3Rvcigna3Jlc3QnKSA9PT0gbnVsbCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ25vbGlrJykgPT09IG51bGwpIHtcbiAgICBpZiAoS3RvSG9kaXQgPT09IDEpIHtcbiAgICAgIGlmIChoYWRVbmRvKSB7XG4gICAgICAgIG1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBoYWRVbmRvID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG1lbW9yeSA9IEhvZChldmVudC5jdXJyZW50VGFyZ2V0LCAwLCBtZW1vcnksICdjaCcsIHRydWUpO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYWRVbmRvKSB7XG4gICAgICAgIG1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBoYWRVbmRvID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBtZW1vcnkgPSBIb2QoZXZlbnQuY3VycmVudFRhcmdldCwgMSwgbWVtb3J5LCAncicsIHRydWUpO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkgKz0gMSkge1xuICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENyZWF0ZUdhbWVFbGVtZW50LCBmYWxzZSk7XG59XG53aW5kb3cub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICBPblN0YXJ0KCk7XG4gIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICBSZXN0YXJ0KCk7XG4gIH1cbn07XG5cbk9uU3RhcnQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=