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
            Hod(target, 'O', 0, copyMemory, poleCopy, 'r');
          } else {
            var _target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

            Hod(_target, 'X', 1, copyMemory, poleCopy, 'ch');
          } //KtoHodit = !KtoHodit;


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

        if (NomerHoda % 2) {
          target.classList.remove('r');
        } else {
          target.classList.remove('ch');
        }

        hadUndo = true;
        KtoHodit = !KtoHodit;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwicG9sZSIsIm1lbW9yeSIsImNvcHlNZW1vcnkiLCJwb2xlQ29weSIsIm1heEhvZCIsIndyaXRlVG9Qb2xlQnlJZCIsIndoYXRUb1dyaXRlIiwiT0JKIiwidGVtcCIsInNwbGl0IiwiSUQiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJ3aW5DaGVja2VyIiwid2hhdFRvQ2hlY2siLCJ3aW5Db3VudGVyIiwid2luQ2VsbHMiLCJiIiwicHVzaCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZCIsImRpc2FibGVkIiwiSG9kIiwidGFyZ2V0IiwiSWdyb2siLCJrb215SG9kIiwibWVtb3J5T2JqIiwicG9sZU9iaiIsInRpcCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZG8iLCJVbmRvIiwicGFyc2UiLCJ3cml0ZUZpZWxkVG9PYmoiLCJST1dTIiwiQ09MUyIsIm5hbWVTdHIiLCJhIiwibmFtZUNlbGwiLCJPblN0YXJ0IiwiZ2V0SXRlbSIsIlJlc3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ3JlYXRlR2FtZUVsZW1lbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjZWxscyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JB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QTlCLEVBQXNDRCxJQUF0QyxFQUE0QyxHQUE1QyxDQUFIO0FBQ0FOLGFBQU8sQ0FBQ2lDLFFBQVIsR0FBbUIsSUFBbkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsSUFBTThCLEtBQUssR0FBR2pGLFFBQVEsQ0FBQ2tGLHNCQUFULENBQWdDLE1BQWhDLENBQWQ7O0FBQ0EsS0FBSyxJQUFJNUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJFLEtBQUssQ0FBQ0UsTUFBMUIsRUFBa0M3RSxDQUFDLElBQUksQ0FBdkMsRUFBMEM7QUFDeEMyRSxPQUFLLENBQUMzRSxDQUFELENBQUwsQ0FBU3VFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DQyxpQkFBbkMsRUFBc0QsS0FBdEQ7QUFDRDs7QUFDRE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFlBQVc7QUFDMUJYLFNBQU87O0FBQ1AsTUFBSTNELFNBQVMsS0FBSyxDQUFsQixFQUFxQjtBQUNuQjZELFdBQU87QUFDUjtBQUNGLENBTEQ7O0FBU0FGLE9BQU8sRyIsImZpbGUiOiJtYWluLjRiNjQwY2Q2MzVmNzU2OTQyZGYzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IFJPV1NfQ09VTlQgPSAzO1xyXG5leHBvcnQgY29uc3QgQ09MU19DT1VOVCA9IDM7XHJcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIHJvd0lkKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzQ291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgaWQgPSByb3dJZCAqIDMgKyBpO1xyXG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb2wuaWQgPSBgYy0ke2lkfWA7XHJcbiAgICBjb2wuZGF0YXNldC5pZCA9IGlkO1xyXG4gICAgY29sLmNsYXNzTmFtZSA9ICdjZWxsJztcclxuICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93cyhyb3dzQ291bnQsIGNvbHNDb3VudCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93c0NvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xyXG4gICAgcm93LmlkID0gYHItJHtpfWA7XHJcbiAgICBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIGkpO1xyXG4gICAgZmllbGQuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9XHJcbn1cclxuXHJcbi8vZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xyXG4iLCJcbi8vIGltcG9ydCBmaWVsZCBmcm9tICcuL2dlbmVyYXRlRmllbGQuanMnO1xuaW1wb3J0IHsgQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgZ2VuZXJhdGVSb3dzIH0gZnJvbSAnLi9nZW5lcmF0ZUZpZWxkJztcblxuXG5nZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7XG5cblxubGV0IE5vbWVySG9kYSA9IDA7XG5sZXQgS3RvSG9kaXQgPSAxO1xuY29uc3QgdW5kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bmRvLWJ0bicpO1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1idG4nKTtcbmNvbnN0IHJlZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkby1idG4nKTtcbmNvbnN0IHdvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLXRpdGxlJyk7XG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtYnRuJyk7XG5jb25zdCB3b25NZXNzYWdlV2hvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1tZXNzYWdlJyk7XG5sZXQgR2FtZU92ZXIgPSBmYWxzZTtcbmxldCBoYWRVbmRvID0gZmFsc2U7XG5cblxubGV0IHBvbGUgPSB7fTtcbmxldCBtZW1vcnkgPSB7fTtcbmxldCBjb3B5TWVtb3J5ID0ge307XG5sZXQgcG9sZUNvcHkgPSB7fTtcbmxldCBtYXhIb2QgPSAwO1xuXG5cbmZ1bmN0aW9uIHdyaXRlVG9Qb2xlQnlJZChpZCwgd2hhdFRvV3JpdGUsIE9CSikge1xuICBjb25zdCB0ZW1wID0gaWQuc3BsaXQoJycpO1xuICBpZiAodGVtcFszXSAhPSBudWxsKSB7XG4gICAgY29uc3QgSUQgPSBOdW1iZXIodGVtcFsyXSArIHRlbXBbM10pO1xuICAgIE9CSltgc3Ryb2thJHtNYXRoLmZsb29yKElEIC8gUk9XU19DT1VOVCkgKyAxfWBdW0lEICUgUk9XU19DT1VOVF0gPSB3aGF0VG9Xcml0ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBJRCA9IE51bWJlcih0ZW1wWzJdKTtcbiAgICBPQkpbYHN0cm9rYSR7TWF0aC5mbG9vcihJRCAvIFJPV1NfQ09VTlQpICsgMX1gXVtJRCAlIFJPV1NfQ09VTlRdID0gd2hhdFRvV3JpdGU7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiB3aW5DaGVja2VyKHdoYXRUb0NoZWNrKSB7XG4gIGxldCB3aW5Db3VudGVyID0gMDtcbiAgbGV0IHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgd2luQ2VsbHMgPSBbXTtcbiAgICB3aW5Db3VudGVyID0gMDtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKHBvbGVbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgICBpZiAod2hhdFRvQ2hlY2sgPT0gJ1gnKSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgICAgfVxuICAgICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB3aW5DZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdpbkNvdW50ZXIgPSAwO1xuICB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IENPTFNfQ09VTlQ7IGkgKz0gMSkge1xuICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIHdpbkNlbGxzID0gW107XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBST1dTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChwb2xlW2BzdHJva2Eke2IgKyAxfWBdW2ldID09IHdoYXRUb0NoZWNrKSB7XG4gICAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2IgKiBST1dTX0NPVU5UICsgaX1gKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5Db3VudGVyID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgaWYgKHdoYXRUb0NoZWNrID09ICdYJykge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICAgIH1cbiAgICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgd2luQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgaWYgKHBvbGVbYHN0cm9rYSR7aSArIDF9YF1bQ09MU19DT1VOVCAtIDEgLSBpXSA9PSB3aGF0VG9DaGVjaykge1xuICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgKENPTFNfQ09VTlQgLSAxIC0gaSl9YCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5Db3VudGVyID0gMDtcbiAgICB9XG4gICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgIGlmICh3aGF0VG9DaGVjayA9PSAnWCcpIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgfVxuICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHdpbkNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaWFnb25hbC1sZWZ0Jyk7XG4gICAgICB9KTtcbiAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHdpbkNvdW50ZXIgPSAwO1xuICB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGlmIChwb2xlW2BzdHJva2Eke2kgKyAxfWBdW2ldID09IHdoYXRUb0NoZWNrKSB7XG4gICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBpfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgfVxuICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICBpZiAod2hhdFRvQ2hlY2sgPT09ICdYJykge1xuICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICB9XG4gICAgICB3aW5DZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhZ29uYWwtcmlnaHQnKTtcbiAgICAgIH0pO1xuICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChOb21lckhvZGEgPj0gOSkge1xuICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSBcIkl0J3MgYSBkcmF3IVwiO1xuICB9XG59XG5cblxuZnVuY3Rpb24gSG9kKHRhcmdldCwgSWdyb2ssIGtvbXlIb2QsIG1lbW9yeU9iaiwgcG9sZU9iaiwgdGlwKSB7XG4gIGNvbnNvbGUubG9nKE5vbWVySG9kYSk7XG5cbiAgaWYgKCFHYW1lT3Zlcikge1xuICAgIEt0b0hvZGl0ID0ga29teUhvZDtcbiAgICB3cml0ZVRvUG9sZUJ5SWQoYCR7dGFyZ2V0LmlkfWAsIElncm9rLCBwb2xlT2JqKTtcbiAgICB3cml0ZVRvUG9sZUJ5SWQoYCR7dGFyZ2V0LmlkfWAsIE5vbWVySG9kYSwgbWVtb3J5T2JqKTtcbiAgICBOb21lckhvZGEgKz0gMTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2luQ2hlY2tlcihJZ3Jvayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29ialBvbGUnLCBKU09OLnN0cmluZ2lmeShwb2xlT2JqKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeU9iaikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOb21lckhvZGEnLCBKU09OLnN0cmluZ2lmeShOb21lckhvZGEpKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCh0aXApO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIFJlZG8oKSB7XG4gIGlmKGhhZFVuZG8pe1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID09IE5vbWVySG9kYSkge1xuICAgICAgICBpZiAoKE5vbWVySG9kYSArIDEpICUgMiA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgIEhvZCh0YXJnZXQsICdPJywgMCwgY29weU1lbW9yeSwgcG9sZUNvcHksICdyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgICAgSG9kKHRhcmdldCwgJ1gnLCAxLCBjb3B5TWVtb3J5LCBwb2xlQ29weSwgJ2NoJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy9LdG9Ib2RpdCA9ICFLdG9Ib2RpdDtcbiAgICAgICAgaWYgKG1heEhvZCA9PT0gTm9tZXJIb2RhKSB7XG4gICAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxufVxuXG5mdW5jdGlvbiBVbmRvKCkge1xuICBpZiAoIWhhZFVuZG8pIHtcbiAgICBwb2xlQ29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9sZSkpO1xuICAgIGNvcHlNZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICAgIG1heEhvZCA9IE5vbWVySG9kYTtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobWF4SG9kID09PSBOb21lckhvZGEpIHtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKGNvcHlNZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT0gTm9tZXJIb2RhIC0gMSkge1xuICAgICAgICBjb3B5TWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID0gJ04nO1xuICAgICAgICBwb2xlQ29weVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9ICdOJztcbiAgICAgICAgTm9tZXJIb2RhIC09IDE7XG4gICAgICAgIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqUG9sZScsIEpTT04uc3RyaW5naWZ5KHBvbGVDb3B5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOb21lckhvZGEnLCBKU09OLnN0cmluZ2lmeShOb21lckhvZGEpKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgIGlmIChOb21lckhvZGEgJSAyKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBoYWRVbmRvID0gdHJ1ZTtcbiAgICAgICAgS3RvSG9kaXQgPSAhS3RvSG9kaXQ7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gd3JpdGVGaWVsZFRvT2JqKFJPV1MsIENPTFMsIE9CSikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1M7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5hbWVTdHIgPSBbYHN0cm9rYSR7aSArIDF9YF07XG4gICAgY29uc3QgYSA9IFtdO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MUzsgYiArPSAxKSB7XG4gICAgICBjb25zdCBuYW1lQ2VsbCA9ICdOJztcbiAgICAgIE9CSltuYW1lU3RyXSA9IGEucHVzaChuYW1lQ2VsbCk7XG4gICAgfVxuICAgIE9CSltuYW1lU3RyXSA9IGE7XG4gIH1cbn1cbmZ1bmN0aW9uIE9uU3RhcnQoKSB7XG4gIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpQb2xlJykpICE9IG51bGwpIHtcbiAgICBwb2xlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2JqUG9sZScpKTtcbiAgICBtZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpNZW1vcnknKSk7XG4gICAgTm9tZXJIb2RhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTm9tZXJIb2RhJykpO1xuICAgIGlmIChOb21lckhvZGEgJSAyID09PSAwKSB7XG4gICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIEt0b0hvZGl0ID0gMDtcbiAgICB9XG4gICAgaWYgKE5vbWVySG9kYSAhPT0gMCkge1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgIGlmIChwb2xlW2BzdHJva2Eke2kgKyAxfWBdW2JdID09PSAnTycpIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgncicpO1xuICAgICAgICB9IGVsc2UgaWYgKHBvbGVbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT09ICdYJykge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aW5DaGVja2VyKCdYJyk7XG4gICAgICB3aW5DaGVja2VyKCdPJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBwb2xlKTtcbiAgICB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcbiAgfVxufVxuZnVuY3Rpb24gUmVzdGFydCgpIHtcbiAgd3JpdGVGaWVsZFRvT2JqKENPTFNfQ09VTlQsIFJPV1NfQ09VTlQsIHBvbGUpO1xuICB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd3aW4nKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFnb25hbC1sZWZ0Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlhZ29uYWwtcmlnaHQnKTtcbiAgICB9XG4gIH1cbiAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICcnO1xuICB3b25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBHYW1lT3ZlciA9IGZhbHNlO1xuICBOb21lckhvZGEgPSAwO1xuICBLdG9Ib2RpdCA9IDE7Ly8g0L/QtdGA0LLRi9C5INCy0YHQtdCz0LTQsCDQutGA0LXRgdGC0LjQulxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqUG9sZScsIEpTT04uc3RyaW5naWZ5KHBvbGUpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gIE9uU3RhcnQoKTtcbn1cblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlc3RhcnQpO1xuXG5cbmZ1bmN0aW9uIENyZWF0ZUdhbWVFbGVtZW50KGV2ZW50KSB7XG4gIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2tyZXN0JykgPT09IG51bGwgJiYgZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdub2xpaycpID09PSBudWxsKSB7XG4gICAgaWYgKEt0b0hvZGl0ID09PSAxKSB7XG4gICAgICBpZiAoaGFkVW5kbykge1xuICAgICAgICBwb2xlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb2xlQ29weSkpO1xuICAgICAgICBtZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgaGFkVW5kbyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBIb2QoZXZlbnQuY3VycmVudFRhcmdldCwgJ1gnLCAwLCBtZW1vcnksIHBvbGUsICdjaCcpO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYWRVbmRvKSB7XG4gICAgICAgIHBvbGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvbGVDb3B5KSk7XG4gICAgICAgIG1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBoYWRVbmRvID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBIb2QoZXZlbnQuY3VycmVudFRhcmdldCwgJ08nLCAxLCBtZW1vcnksIHBvbGUsICdyJyk7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ3JlYXRlR2FtZUVsZW1lbnQsIGZhbHNlKTtcbn1cbndpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIE9uU3RhcnQoKTtcbiAgaWYgKE5vbWVySG9kYSA9PT0gMCkge1xuICAgIFJlc3RhcnQoKTtcbiAgfVxufTtcblxuXG5cbk9uU3RhcnQoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9