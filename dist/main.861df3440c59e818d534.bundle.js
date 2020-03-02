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
    var id = rowId * 3 + i;
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
var undoBtn = document.querySelector('.undo-btn'); // document.querySelector('.restart-btn');

var redoBtn = document.querySelector('.redo-btn');
var wonMessage = document.querySelector('.won-title');
var restartBtn = document.querySelector('.restart-btn');
var wonMessageWho = document.querySelector('.won-message');
var GameOver = false;
var hadUndo = false;
var pole = {};
var memory = {};
var copyMemory = {};
var poleCopy = {};
var maxHod = 0;

function writeToPoleById(id, whatToWrite, OBJ) {
  var temp = id.split('');

  if (temp[3] != null) {
    var ID = Number(temp[2] + temp[3]);
    OBJ["stroka".concat(Math.floor(ID / _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]) + 1)][ID % _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]] = whatToWrite;
  } else {
    var _ID = Number(temp[2]);

    OBJ["stroka".concat(Math.floor(_ID / _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]) + 1)][_ID % _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]] = whatToWrite;
  }
}

function winChecker(whatToCheck) {
  var winCounter = 0;
  var winCells = [];

  for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
    winCells = [];
    winCounter = 0;

    for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
      if (pole["stroka".concat(i + 1)][b] == whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b)));
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
        winCells.forEach(function (element) {
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

  for (var _i = 0; _i < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; _i += 1) {
    winCounter = 0;
    winCells = [];

    for (var _b = 0; _b < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; _b += 1) {
      if (pole["stroka".concat(_b + 1)][_i] == whatToCheck) {
        winCounter += 1;
        winCells.push(document.getElementById("c-".concat(_b * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + _i)));
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
        winCells.forEach(function (element) {
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

  for (var _i2 = 0; _i2 < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; _i2 += 1) {
    if (pole["stroka".concat(_i2 + 1)][_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"] - 1 - _i2] == whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById("c-".concat(_i2 * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + (_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"] - 1 - _i2))));
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
      winCells.forEach(function (element) {
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

  for (var _i3 = 0; _i3 < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; _i3 += 1) {
    if (pole["stroka".concat(_i3 + 1)][_i3] == whatToCheck) {
      winCounter += 1;
      winCells.push(document.getElementById("c-".concat(_i3 * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + _i3)));
    } else {
      winCounter = 0;
    }

    if (winCounter === 3) {
      if (whatToCheck === 'X') {
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
    writeToPoleById("".concat(target.id), Igrok, poleObj);
    writeToPoleById("".concat(target.id), NomerHoda, memoryObj);
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
  if (hadUndo) {
    for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
      for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
        if (memory["stroka".concat(i + 1)][b] == NomerHoda) {
          if ((NomerHoda + 1) % 2 === 0) {
            var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));
            Hod(target, 'O', 1, copyMemory, poleCopy, 'r');
          } else {
            var _target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

            Hod(_target, 'X', 0, copyMemory, poleCopy, 'ch');
          }

          KtoHodit = !KtoHodit;

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

  for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
    for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
      if (copyMemory["stroka".concat(i + 1)][b] == NomerHoda - 1) {
        copyMemory["stroka".concat(i + 1)][b] = 'N';
        poleCopy["stroka".concat(i + 1)][b] = 'N';
        NomerHoda -= 1;

        if (NomerHoda === 0) {
          undoBtn.disabled = true;
        }

        localStorage.setItem('objPole', JSON.stringify(poleCopy));
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
  for (var i = 0; i < ROWS; i += 1) {
    var nameStr = ["stroka".concat(i + 1)];
    var a = [];

    for (var b = 0; b < COLS; b += 1) {
      var nameCell = 'N';
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

    for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
      for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
        var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

        if (pole["stroka".concat(i + 1)][b] === 'O') {
          target.classList.add('r');
        } else if (pole["stroka".concat(i + 1)][b] === 'X') {
          target.classList.add('ch');
        }
      }

      winChecker('X');
      winChecker('O');
    }
  } else {
    writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], pole);
    writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);
  }
}

function Restart() {
  writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], pole);
  writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwicG9sZSIsIm1lbW9yeSIsImNvcHlNZW1vcnkiLCJwb2xlQ29weSIsIm1heEhvZCIsIndyaXRlVG9Qb2xlQnlJZCIsIndoYXRUb1dyaXRlIiwiT0JKIiwidGVtcCIsInNwbGl0IiwiSUQiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJ3aW5DaGVja2VyIiwid2hhdFRvQ2hlY2siLCJ3aW5Db3VudGVyIiwid2luQ2VsbHMiLCJiIiwicHVzaCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZCIsImRpc2FibGVkIiwiSG9kIiwidGFyZ2V0IiwiSWdyb2siLCJrb215SG9kIiwibWVtb3J5T2JqIiwicG9sZU9iaiIsInRpcCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZG8iLCJVbmRvIiwicGFyc2UiLCJ3cml0ZUZpZWxkVG9PYmoiLCJST1dTIiwiQ09MUyIsIm5hbWVTdHIiLCJhIiwibmFtZUNlbGwiLCJPblN0YXJ0IiwiZ2V0SXRlbSIsIlJlc3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ3JlYXRlR2FtZUVsZW1lbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjZWxscyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JB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dEIsRUFBMkIsQ0FBM0IsRUFBOEJ2RCxNQUE5QixFQUFzQ0QsSUFBdEMsRUFBNEMsR0FBNUMsQ0FBSDtBQUNBTixhQUFPLENBQUNpQyxRQUFSLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELElBQU04QixLQUFLLEdBQUdqRixRQUFRLENBQUNrRixzQkFBVCxDQUFnQyxNQUFoQyxDQUFkOztBQUNBLEtBQUssSUFBSTVFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyRSxLQUFLLENBQUNFLE1BQTFCLEVBQWtDN0UsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0FBQ3hDMkUsT0FBSyxDQUFDM0UsQ0FBRCxDQUFMLENBQVN1RSxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsaUJBQW5DLEVBQXNELEtBQXREO0FBQ0Q7O0FBQ0RNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCWCxTQUFPOztBQUNQLE1BQUkzRCxTQUFTLEtBQUssQ0FBbEIsRUFBcUI7QUFDbkI2RCxXQUFPO0FBQ1I7QUFDRixDQUxEOztBQVNBRixPQUFPLEciLCJmaWxlIjoibWFpbi44NjFkZjM0NDBjNTllODE4ZDUzNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBST1dTX0NPVU5UID0gMztcclxuZXhwb3J0IGNvbnN0IENPTFNfQ09VTlQgPSAzO1xyXG5jb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZCcpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVDb2xzKHJvdywgY29sc0NvdW50LCByb3dJZCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sc0NvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGlkID0gcm93SWQgKiAzICsgaTtcclxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sLmlkID0gYGMtJHtpZH1gO1xyXG4gICAgY29sLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgIGNvbC5jbGFzc05hbWUgPSAnY2VsbCc7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd3Mocm93c0NvdW50LCBjb2xzQ291bnQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NDb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcclxuICAgIHJvdy5pZCA9IGByLSR7aX1gO1xyXG4gICAgZ2VuZXJhdGVDb2xzKHJvdywgY29sc0NvdW50LCBpKTtcclxuICAgIGZpZWxkLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2dlbmVyYXRlUm93cyhST1dTX0NPVU5ULCBDT0xTX0NPVU5UKTtcclxuIiwiXG4vLyBpbXBvcnQgZmllbGQgZnJvbSAnLi9nZW5lcmF0ZUZpZWxkLmpzJztcbmltcG9ydCB7IENPTFNfQ09VTlQsIFJPV1NfQ09VTlQsIGdlbmVyYXRlUm93cyB9IGZyb20gJy4vZ2VuZXJhdGVGaWVsZCc7XG5cblxuZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuXG5cbmxldCBOb21lckhvZGEgPSAwO1xubGV0IEt0b0hvZGl0ID0gMTtcbmNvbnN0IHVuZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idG4nKTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtYnRuJyk7XG5jb25zdCByZWRvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZG8tYnRuJyk7XG5jb25zdCB3b25NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi10aXRsZScpO1xuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0LWJ0bicpO1xuY29uc3Qgd29uTWVzc2FnZVdobyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b24tbWVzc2FnZScpO1xubGV0IEdhbWVPdmVyID0gZmFsc2U7XG5sZXQgaGFkVW5kbyA9IGZhbHNlO1xuXG5cbmxldCBwb2xlID0ge307XG5sZXQgbWVtb3J5ID0ge307XG5sZXQgY29weU1lbW9yeSA9IHt9O1xubGV0IHBvbGVDb3B5ID0ge307XG5sZXQgbWF4SG9kID0gMDtcblxuXG5mdW5jdGlvbiB3cml0ZVRvUG9sZUJ5SWQoaWQsIHdoYXRUb1dyaXRlLCBPQkopIHtcbiAgY29uc3QgdGVtcCA9IGlkLnNwbGl0KCcnKTtcbiAgaWYgKHRlbXBbM10gIT0gbnVsbCkge1xuICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0gKyB0ZW1wWzNdKTtcbiAgICBPQkpbYHN0cm9rYSR7TWF0aC5mbG9vcihJRCAvIFJPV1NfQ09VTlQpICsgMX1gXVtJRCAlIFJPV1NfQ09VTlRdID0gd2hhdFRvV3JpdGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgSUQgPSBOdW1iZXIodGVtcFsyXSk7XG4gICAgT0JKW2BzdHJva2Eke01hdGguZmxvb3IoSUQgLyBST1dTX0NPVU5UKSArIDF9YF1bSUQgJSBST1dTX0NPVU5UXSA9IHdoYXRUb1dyaXRlO1xuICB9XG59XG5cblxuZnVuY3Rpb24gd2luQ2hlY2tlcih3aGF0VG9DaGVjaykge1xuICBsZXQgd2luQ291bnRlciA9IDA7XG4gIGxldCB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIHdpbkNlbGxzID0gW107XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChwb2xlW2BzdHJva2Eke2kgKyAxfWBdW2JdID09IHdoYXRUb0NoZWNrKSB7XG4gICAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5Db3VudGVyID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgaWYgKHdoYXRUb0NoZWNrID09ICdYJykge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICAgIH1cbiAgICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgd2luQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB3aW5Db3VudGVyID0gMDtcbiAgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT0xTX0NPVU5UOyBpICs9IDEpIHtcbiAgICB3aW5Db3VudGVyID0gMDtcbiAgICB3aW5DZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgUk9XU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAocG9sZVtgc3Ryb2thJHtiICsgMX1gXVtpXSA9PSB3aGF0VG9DaGVjaykge1xuICAgICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtiICogUk9XU19DT1VOVCArIGl9YCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICAgIGlmICh3aGF0VG9DaGVjayA9PSAnWCcpIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgICB9XG4gICAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHdpbkNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdpbkNvdW50ZXIgPSAwO1xuICB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGlmIChwb2xlW2BzdHJva2Eke2kgKyAxfWBdW0NPTFNfQ09VTlQgLSAxIC0gaV0gPT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIChDT0xTX0NPVU5UIC0gMSAtIGkpfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgfVxuICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICBpZiAod2hhdFRvQ2hlY2sgPT0gJ1gnKSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgIH1cbiAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB3aW5DZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhZ29uYWwtbGVmdCcpO1xuICAgICAgfSk7XG4gICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB3aW5Db3VudGVyID0gMDtcbiAgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBpZiAocG9sZVtgc3Ryb2thJHtpICsgMX1gXVtpXSA9PSB3aGF0VG9DaGVjaykge1xuICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgaX1gKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgaWYgKHdoYXRUb0NoZWNrID09PSAnWCcpIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgfVxuICAgICAgd2luQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWdvbmFsLXJpZ2h0Jyk7XG4gICAgICB9KTtcbiAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoTm9tZXJIb2RhID49IDkpIHtcbiAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gXCJJdCdzIGEgZHJhdyFcIjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIEhvZCh0YXJnZXQsIElncm9rLCBrb215SG9kLCBtZW1vcnlPYmosIHBvbGVPYmosIHRpcCkge1xuICBjb25zb2xlLmxvZyhOb21lckhvZGEpO1xuXG4gIGlmICghR2FtZU92ZXIpIHtcbiAgICBLdG9Ib2RpdCA9IGtvbXlIb2Q7XG4gICAgd3JpdGVUb1BvbGVCeUlkKGAke3RhcmdldC5pZH1gLCBJZ3JvaywgcG9sZU9iaik7XG4gICAgd3JpdGVUb1BvbGVCeUlkKGAke3RhcmdldC5pZH1gLCBOb21lckhvZGEsIG1lbW9yeU9iaik7XG4gICAgTm9tZXJIb2RhICs9IDE7XG4gICAgdW5kb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHdpbkNoZWNrZXIoSWdyb2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpQb2xlJywgSlNPTi5zdHJpbmdpZnkocG9sZU9iaikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShtZW1vcnlPYmopKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQodGlwKTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBSZWRvKCkge1xuICBpZihoYWRVbmRvKXtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PSBOb21lckhvZGEpIHtcbiAgICAgICAgaWYgKChOb21lckhvZGEgKyAxKSAlIDIgPT09IDApIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgICAgICBIb2QodGFyZ2V0LCAnTycsIDEsIGNvcHlNZW1vcnksIHBvbGVDb3B5LCAncicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgIEhvZCh0YXJnZXQsICdYJywgMCwgY29weU1lbW9yeSwgcG9sZUNvcHksICdjaCcpO1xuICAgICAgICB9XG4gICAgICAgIEt0b0hvZGl0ID0gIUt0b0hvZGl0O1xuICAgICAgICBpZiAobWF4SG9kID09PSBOb21lckhvZGEpIHtcbiAgICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG59XG5cbmZ1bmN0aW9uIFVuZG8oKSB7XG4gIGlmICghaGFkVW5kbykge1xuICAgIHBvbGVDb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb2xlKSk7XG4gICAgY29weU1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVtb3J5KSk7XG4gICAgbWF4SG9kID0gTm9tZXJIb2RhO1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChtYXhIb2QgPT09IE5vbWVySG9kYSkge1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAoY29weU1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PSBOb21lckhvZGEgLSAxKSB7XG4gICAgICAgIGNvcHlNZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gPSAnTic7XG4gICAgICAgIHBvbGVDb3B5W2BzdHJva2Eke2kgKyAxfWBdW2JdID0gJ04nO1xuICAgICAgICBOb21lckhvZGEgLT0gMTtcbiAgICAgICAgaWYgKE5vbWVySG9kYSA9PT0gMCkge1xuICAgICAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpQb2xlJywgSlNPTi5zdHJpbmdpZnkocG9sZUNvcHkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05vbWVySG9kYScsIEpTT04uc3RyaW5naWZ5KE5vbWVySG9kYSkpO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3InKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoJyk7XG5cbiAgICAgICAgaWYoTm9tZXJIb2RhJTIpe1xuICAgICAgICAgIEt0b0hvZGl0ID0gMDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgS3RvSG9kaXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGhhZFVuZG8gPSB0cnVlO1xuICAgICAgICBcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB3cml0ZUZpZWxkVG9PYmooUk9XUywgQ09MUywgT0JKKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XUzsgaSArPSAxKSB7XG4gICAgY29uc3QgbmFtZVN0ciA9IFtgc3Ryb2thJHtpICsgMX1gXTtcbiAgICBjb25zdCBhID0gW107XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTOyBiICs9IDEpIHtcbiAgICAgIGNvbnN0IG5hbWVDZWxsID0gJ04nO1xuICAgICAgT0JKW25hbWVTdHJdID0gYS5wdXNoKG5hbWVDZWxsKTtcbiAgICB9XG4gICAgT0JKW25hbWVTdHJdID0gYTtcbiAgfVxufVxuZnVuY3Rpb24gT25TdGFydCgpIHtcbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29ialBvbGUnKSkgIT0gbnVsbCkge1xuICAgIHBvbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpQb2xlJykpO1xuICAgIG1lbW9yeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29iak1lbW9yeScpKTtcbiAgICBOb21lckhvZGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOb21lckhvZGEnKSk7XG4gICAgaWYgKE5vbWVySG9kYSAlIDIgPT09IDApIHtcbiAgICAgIEt0b0hvZGl0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgS3RvSG9kaXQgPSAwO1xuICAgIH1cbiAgICBpZiAoTm9tZXJIb2RhICE9PSAwKSB7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgICAgaWYgKHBvbGVbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT09ICdPJykge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9sZVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PT0gJ1gnKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NoJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdpbkNoZWNrZXIoJ1gnKTtcbiAgICAgIHdpbkNoZWNrZXIoJ08nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd3JpdGVGaWVsZFRvT2JqKENPTFNfQ09VTlQsIFJPV1NfQ09VTlQsIHBvbGUpO1xuICAgIHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBtZW1vcnkpO1xuICB9XG59XG5mdW5jdGlvbiBSZXN0YXJ0KCkge1xuICB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgcG9sZSk7XG4gIHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBtZW1vcnkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3InKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaCcpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RpYWdvbmFsLWxlZnQnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFnb25hbC1yaWdodCcpO1xuICAgIH1cbiAgfVxuICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJyc7XG4gIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIEdhbWVPdmVyID0gZmFsc2U7XG4gIE5vbWVySG9kYSA9IDA7XG4gIEt0b0hvZGl0ID0gMTsvLyDQv9C10YDQstGL0Lkg0LLRgdC10LPQtNCwINC60YDQtdGB0YLQuNC6XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpQb2xlJywgSlNPTi5zdHJpbmdpZnkocG9sZSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkobWVtb3J5KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOb21lckhvZGEnLCBKU09OLnN0cmluZ2lmeShOb21lckhvZGEpKTtcbiAgT25TdGFydCgpO1xufVxuXG51bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVW5kbyk7XG5yZWRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVkbyk7XG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVzdGFydCk7XG5cblxuZnVuY3Rpb24gQ3JlYXRlR2FtZUVsZW1lbnQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3Rvcigna3Jlc3QnKSA9PT0gbnVsbCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ25vbGlrJykgPT09IG51bGwpIHtcbiAgICBpZiAoS3RvSG9kaXQgPT09IDEpIHtcbiAgICAgIGlmIChoYWRVbmRvKSB7XG4gICAgICAgIHBvbGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvbGVDb3B5KSk7XG4gICAgICAgIG1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBoYWRVbmRvID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIEhvZChldmVudC5jdXJyZW50VGFyZ2V0LCAnWCcsIDAsIG1lbW9yeSwgcG9sZSwgJ2NoJyk7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhZFVuZG8pIHtcbiAgICAgICAgcG9sZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9sZUNvcHkpKTtcbiAgICAgICAgbWVtb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGhhZFVuZG8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIEhvZChldmVudC5jdXJyZW50VGFyZ2V0LCAnTycsIDEsIG1lbW9yeSwgcG9sZSwgJ3InKTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwnKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDcmVhdGVHYW1lRWxlbWVudCwgZmFsc2UpO1xufVxud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgT25TdGFydCgpO1xuICBpZiAoTm9tZXJIb2RhID09PSAwKSB7XG4gICAgUmVzdGFydCgpO1xuICB9XG59O1xuXG5cblxuT25TdGFydCgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=