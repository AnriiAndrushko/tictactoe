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
  copyMemory = JSON.parse(localStorage.getItem('objMemory')); //console.log(copyMemory);

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
  }
}

function Restart() {
  memory = writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwibWVtb3J5IiwiY29weU1lbW9yeSIsIm1heEhvZCIsIndpbkNoZWNrZXIiLCJ3aGF0VG9DaGVjayIsIndpbkNvdW50ZXIiLCJ3aW5DZWxscyIsImIiLCJwdXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkIiwiZGlzYWJsZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSG9kIiwidGFyZ2V0Iiwia29teUhvZCIsIm1lbW9yeU9iaiIsInRpcCIsInVuZG9PclJlYWwiLCJyZXR1cm5pbmdPQkoiLCJ0ZW1wIiwic3BsaXQiLCJJRCIsIk51bWJlciIsIk1hdGgiLCJmbG9vciIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWRvIiwicGFyc2UiLCJnZXRJdGVtIiwiVW5kbyIsIndyaXRlRmllbGRUb09iaiIsIlJPV1MiLCJDT0xTIiwiT0JKIiwibmFtZVN0ciIsImEiLCJuYW1lQ2VsbCIsIk9uU3RhcnQiLCJSZXN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNyZWF0ZUdhbWVFbGVtZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2VsbHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwid2luZG93Iiwib25mb2N1cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFVBQVUsR0FBRyxDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUNQLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLFNBQTNCLEVBQXNDQyxLQUF0QyxFQUE2QztBQUMzQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQXBCLEVBQStCRSxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQU1DLEVB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S0FBSyxDQUFsQixFQUFxQjtBQUNuQnVELFdBQU87QUFDUjtBQUNGLENBTEQ7O0FBT0FELE9BQU8sRyIsImZpbGUiOiJtYWluLmZjZDA4Yjg2YzE5NmUxMGRlN2I2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IFJPV1NfQ09VTlQgPSAzO1xuZXhwb3J0IGNvbnN0IENPTFNfQ09VTlQgPSAzO1xuY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb2xzKHJvdywgY29sc0NvdW50LCByb3dJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHNDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgaWQgPSByb3dJZCAqIGNvbHNDb3VudCArIGk7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sLmlkID0gYGMtJHtpZH1gO1xuICAgIGNvbC5kYXRhc2V0LmlkID0gaWQ7XG4gICAgY29sLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3dzKHJvd3NDb3VudCwgY29sc0NvdW50KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93c0NvdW50OyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XG4gICAgcm93LmlkID0gYHItJHtpfWA7XG4gICAgZ2VuZXJhdGVDb2xzKHJvdywgY29sc0NvdW50LCBpKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbi8vZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuIiwiLy8gaW1wb3J0IGZpZWxkIGZyb20gJy4vZ2VuZXJhdGVGaWVsZC5qcyc7XG5pbXBvcnQgeyBDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBnZW5lcmF0ZVJvd3MgfSBmcm9tICcuL2dlbmVyYXRlRmllbGQnO1xuXG5nZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7XG5cbmxldCBOb21lckhvZGEgPSAwO1xubGV0IEt0b0hvZGl0ID0gMTtcblxuY29uc3QgdW5kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bmRvLWJ0bicpO1xuY29uc3QgcmVkb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRvLWJ0bicpO1xuY29uc3Qgd29uTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b24tdGl0bGUnKTtcbmNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1idG4nKTtcbmNvbnN0IHdvbk1lc3NhZ2VXaG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLW1lc3NhZ2UnKTtcbmxldCBHYW1lT3ZlciA9IGZhbHNlO1xubGV0IGhhZFVuZG8gPSBmYWxzZTtcblxubGV0IG1lbW9yeSA9IHt9O1xubGV0IGNvcHlNZW1vcnkgPSB7fTtcbmxldCBtYXhIb2QgPSAwO1xuXG5mdW5jdGlvbiB3aW5DaGVja2VyKHdoYXRUb0NoZWNrKSB7XG4gIGxldCB3aW5Db3VudGVyID0gMDtcbiAgbGV0IHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgd2luQ2VsbHMgPSBbXTtcbiAgICB3aW5Db3VudGVyID0gMDtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSAlIDIgPT09IHdoYXRUb0NoZWNrKSB7XG4gICAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5Db3VudGVyID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgaWYgKHdoYXRUb0NoZWNrID09PSAwKSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgICAgfVxuICAgICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB3aW5DZWxscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcHlNZW1vcnknLCBudWxsKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdpbkNvdW50ZXIgPSAwO1xuICB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IENPTFNfQ09VTlQ7IGkgKz0gMSkge1xuICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIHdpbkNlbGxzID0gW107XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBST1dTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7YiArIDF9YF1baV0gJSAyID09PSB3aGF0VG9DaGVjaykge1xuICAgICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtiICogUk9XU19DT1VOVCArIGl9YCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICAgIGlmICh3aGF0VG9DaGVjayA9PT0gMCkge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICAgIH1cbiAgICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgd2luQ2VsbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29weU1lbW9yeScsIG51bGwpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgbnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtDT0xTX0NPVU5UIC0gMSAtIGldICUgMiA9PT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIChDT0xTX0NPVU5UIC0gMSAtIGkpfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgfVxuICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICBpZiAod2hhdFRvQ2hlY2sgPT09IDApIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgfVxuICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHdpbkNlbGxzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhZ29uYWwtbGVmdCcpO1xuICAgICAgfSk7XG4gICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcHlNZW1vcnknLCBudWxsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtpXSAlIDIgPT09IHdoYXRUb0NoZWNrKSB7XG4gICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBpfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgfVxuICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICBpZiAod2hhdFRvQ2hlY2sgPT09IDApIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgfVxuICAgICAgd2luQ2VsbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaWFnb25hbC1yaWdodCcpO1xuICAgICAgfSk7XG4gICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvcHlNZW1vcnknLCBudWxsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBudWxsKTtcbiAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChOb21lckhvZGEgPj0gOSkge1xuICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29weU1lbW9yeScsIG51bGwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBudWxsKTtcbiAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSBcIkl0J3MgYSBkcmF3IVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIEhvZCh0YXJnZXQsIGtvbXlIb2QsIG1lbW9yeU9iaiwgdGlwLCB1bmRvT3JSZWFsKSB7XG4gIC8vIGNvbnNvbGUubG9nKE5vbWVySG9kYSk7XG4gIGNvbnN0IHJldHVybmluZ09CSiA9IG1lbW9yeU9iajtcbiAgaWYgKCFHYW1lT3Zlcikge1xuICAgIEt0b0hvZGl0ID0ga29teUhvZDtcblxuICAgIGNvbnN0IHRlbXAgPSBgJHt0YXJnZXQuaWR9YC5zcGxpdCgnJyk7XG4gICAgaWYgKHRlbXBbM10gIT0gbnVsbCkge1xuICAgICAgY29uc3QgSUQgPSBOdW1iZXIodGVtcFsyXSArIHRlbXBbM10pO1xuICAgICAgcmV0dXJuaW5nT0JKW2BzdHJva2Eke01hdGguZmxvb3IoSUQgLyBST1dTX0NPVU5UKSArIDF9YF1bSUQgJSBST1dTX0NPVU5UXSA9IE5vbWVySG9kYTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgSUQgPSBOdW1iZXIodGVtcFsyXSk7XG4gICAgICByZXR1cm5pbmdPQkpbYHN0cm9rYSR7TWF0aC5mbG9vcihJRCAvIFJPV1NfQ09VTlQpICsgMX1gXVtJRCAlIFJPV1NfQ09VTlRdID0gTm9tZXJIb2RhO1xuICAgIH1cblxuICAgIE5vbWVySG9kYSArPSAxO1xuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB3aW5DaGVja2VyKGtvbXlIb2QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShyZXR1cm5pbmdPQkopKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG5cbiAgICBpZih1bmRvT3JSZWFsKXtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3B5TWVtb3J5JywgSlNPTi5zdHJpbmdpZnkocmV0dXJuaW5nT0JKKSk7XG4gICAgfVxuICAgIFxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQodGlwKTtcbiAgfVxuICByZXR1cm4gcmV0dXJuaW5nT0JKO1xufVxuXG5mdW5jdGlvbiBSZWRvKCkge1xuXG5tZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3B5TWVtb3J5JykpO1xuXG5jb3B5TWVtb3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2JqTWVtb3J5JykpO1xuXG4vL2NvbnNvbGUubG9nKGNvcHlNZW1vcnkpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PT0gTm9tZXJIb2RhKSB7XG4gICAgICAgICAgaWYgKChOb21lckhvZGEgKyAxKSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgICAgY29weU1lbW9yeSA9IEhvZCh0YXJnZXQsIDEsIGNvcHlNZW1vcnksICdyJyxmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgICAgY29weU1lbW9yeSA9IEhvZCh0YXJnZXQsIDAsIGNvcHlNZW1vcnksICdjaCcsZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoTm9tZXJIb2RhICUgMikge1xuICAgICAgICAgICAgS3RvSG9kaXQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXhIb2QgPT09IE5vbWVySG9kYSkge1xuICAgICAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gVW5kbygpIHtcbiAgaWYgKCFoYWRVbmRvKSB7XG4gICAgY29weU1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVtb3J5KSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29weU1lbW9yeScsIEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcblxuXG4gICAgbWF4SG9kID0gTm9tZXJIb2RhO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXhIb2QnLCBKU09OLnN0cmluZ2lmeShtYXhIb2QpKTtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobWF4SG9kID09PSBOb21lckhvZGEpIHtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKGNvcHlNZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT09IE5vbWVySG9kYSAtIDEpIHtcbiAgICAgICAgY29weU1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9ICdOJztcbiAgICAgICAgTm9tZXJIb2RhIC09IDE7XG4gICAgICAgIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncicpO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcblxuICAgICAgICBpZiAoTm9tZXJIb2RhICUgMikge1xuICAgICAgICAgIEt0b0hvZGl0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaGFkVW5kbyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHdyaXRlRmllbGRUb09iaihST1dTLCBDT0xTLCBPQkopIHtcbiAgY29uc3QgcmV0dXJuaW5nT0JKID0gT0JKO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1M7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5hbWVTdHIgPSBbYHN0cm9rYSR7aSArIDF9YF07XG4gICAgY29uc3QgYSA9IFtdO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MUzsgYiArPSAxKSB7XG4gICAgICBjb25zdCBuYW1lQ2VsbCA9ICdOJztcbiAgICAgIHJldHVybmluZ09CSltuYW1lU3RyXSA9IGEucHVzaChuYW1lQ2VsbCk7XG4gICAgfVxuICAgIHJldHVybmluZ09CSltuYW1lU3RyXSA9IGE7XG4gIH1cbiAgcmV0dXJuIHJldHVybmluZ09CSjtcbn1cbmZ1bmN0aW9uIE9uU3RhcnQoKSB7XG4gIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpNZW1vcnknKSkgIT0gbnVsbCkge1xuICAgIG1lbW9yeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29iak1lbW9yeScpKTtcbiAgICBOb21lckhvZGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOb21lckhvZGEnKSk7XG4gICAgbWF4SG9kID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWF4SG9kJykpO1xuICAgIGlmIChOb21lckhvZGEgJSAyID09PSAwKSB7XG4gICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIEt0b0hvZGl0ID0gMDtcbiAgICB9XG4gICAgaWYgKE5vbWVySG9kYSA9PT0gMCkge1xuXG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgaWYgKE5vbWVySG9kYTxtYXhIb2QpIHtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAoTm9tZXJIb2RhPG1heEhvZCkge1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdICUgMiA9PT0gMSkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdICUgMiA9PT0gMCkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaCcpO1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luQ2hlY2tlcigwKTtcbiAgICB3aW5DaGVja2VyKDEpO1xuICB9IGVsc2Uge1xuICAgIG1lbW9yeSA9IHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBtZW1vcnkpO1xuICB9XG59XG5mdW5jdGlvbiBSZXN0YXJ0KCkge1xuICBtZW1vcnkgPSB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd3aW4nKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFnb25hbC1sZWZ0Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlhZ29uYWwtcmlnaHQnKTtcbiAgICB9XG4gIH1cbiAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICcnO1xuICB3b25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBHYW1lT3ZlciA9IGZhbHNlO1xuICBOb21lckhvZGEgPSAwO1xuICBLdG9Ib2RpdCA9IDE7IC8vINC/0LXRgNCy0YvQuSDQstGB0LXQs9C00LAg0LrRgNC10YHRgtC40LpcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gIE9uU3RhcnQoKTtcbn1cblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlc3RhcnQpO1xuXG5mdW5jdGlvbiBDcmVhdGVHYW1lRWxlbWVudChldmVudCkge1xuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdrcmVzdCcpID09PSBudWxsICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3Rvcignbm9saWsnKSA9PT0gbnVsbCkge1xuICAgIGlmIChLdG9Ib2RpdCA9PT0gMSkge1xuICAgICAgaWYgKGhhZFVuZG8pIHtcbiAgICAgICAgbWVtb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGhhZFVuZG8gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbWVtb3J5ID0gSG9kKGV2ZW50LmN1cnJlbnRUYXJnZXQsIDAsIG1lbW9yeSwgJ2NoJyx0cnVlKTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFkVW5kbykge1xuICAgICAgICBtZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgaGFkVW5kbyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgbWVtb3J5ID0gSG9kKGV2ZW50LmN1cnJlbnRUYXJnZXQsIDEsIG1lbW9yeSwgJ3InLHRydWUpO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkgKz0gMSkge1xuICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENyZWF0ZUdhbWVFbGVtZW50LCBmYWxzZSk7XG59XG53aW5kb3cub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICBPblN0YXJ0KCk7XG4gIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICBSZXN0YXJ0KCk7XG4gIH1cbn07XG5cbk9uU3RhcnQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=