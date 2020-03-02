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
  console.log(memory);
  console.log(pole);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwicG9sZSIsIm1lbW9yeSIsImNvcHlNZW1vcnkiLCJwb2xlQ29weSIsIm1heEhvZCIsIndyaXRlVG9Qb2xlQnlJZCIsIndoYXRUb1dyaXRlIiwiT0JKIiwidGVtcCIsInNwbGl0IiwiSUQiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJ3aW5DaGVja2VyIiwid2hhdFRvQ2hlY2siLCJ3aW5Db3VudGVyIiwid2luQ2VsbHMiLCJiIiwicHVzaCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZCIsImRpc2FibGVkIiwiSG9kIiwidGFyZ2V0IiwiSWdyb2siLCJrb215SG9kIiwibWVtb3J5T2JqIiwicG9sZU9iaiIsInRpcCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZG8iLCJVbmRvIiwicGFyc2UiLCJ3cml0ZUZpZWxkVG9PYmoiLCJST1dTIiwiQ09MUyIsIm5hbWVTdHIiLCJhIiwibmFtZUNlbGwiLCJPblN0YXJ0IiwiZ2V0SXRlbSIsIlJlc3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ3JlYXRlR2FtZUVsZW1lbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjZWxscyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JB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c0NELElBQXRDLEVBQTRDLEdBQTVDLENBQUg7QUFDQU4sYUFBTyxDQUFDaUMsUUFBUixHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxJQUFNOEIsS0FBSyxHQUFHakYsUUFBUSxDQUFDa0Ysc0JBQVQsQ0FBZ0MsTUFBaEMsQ0FBZDs7QUFDQSxLQUFLLElBQUk1RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkUsS0FBSyxDQUFDRSxNQUExQixFQUFrQzdFLENBQUMsSUFBSSxDQUF2QyxFQUEwQztBQUN4QzJFLE9BQUssQ0FBQzNFLENBQUQsQ0FBTCxDQUFTdUUsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNDLGlCQUFuQyxFQUFzRCxLQUF0RDtBQUNEOztBQUNETSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsWUFBVztBQUMxQlgsU0FBTzs7QUFDUCxNQUFJM0QsU0FBUyxLQUFLLENBQWxCLEVBQXFCO0FBQ25CNkQsV0FBTztBQUNSO0FBQ0YsQ0FMRDs7QUFTQUYsT0FBTyxHIiwiZmlsZSI6Im1haW4uODBlNTQ1NDlhMGRlN2U4NTM4ZjYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgUk9XU19DT1VOVCA9IDM7XHJcbmV4cG9ydCBjb25zdCBDT0xTX0NPVU5UID0gMztcclxuY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgcm93SWQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHNDb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBpZCA9IHJvd0lkICogMyArIGk7XHJcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbC5pZCA9IGBjLSR7aWR9YDtcclxuICAgIGNvbC5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICBjb2wuY2xhc3NOYW1lID0gJ2NlbGwnO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3dzKHJvd3NDb3VudCwgY29sc0NvdW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzQ291bnQ7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XHJcbiAgICByb3cuaWQgPSBgci0ke2l9YDtcclxuICAgIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgaSk7XHJcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuLy9nZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7XHJcbiIsIlxuLy8gaW1wb3J0IGZpZWxkIGZyb20gJy4vZ2VuZXJhdGVGaWVsZC5qcyc7XG5pbXBvcnQgeyBDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBnZW5lcmF0ZVJvd3MgfSBmcm9tICcuL2dlbmVyYXRlRmllbGQnO1xuXG5cbmdlbmVyYXRlUm93cyhST1dTX0NPVU5ULCBDT0xTX0NPVU5UKTtcblxuXG5sZXQgTm9tZXJIb2RhID0gMDtcbmxldCBLdG9Ib2RpdCA9IDE7XG5jb25zdCB1bmRvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnRuJyk7XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0LWJ0bicpO1xuY29uc3QgcmVkb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRvLWJ0bicpO1xuY29uc3Qgd29uTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b24tdGl0bGUnKTtcbmNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1idG4nKTtcbmNvbnN0IHdvbk1lc3NhZ2VXaG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLW1lc3NhZ2UnKTtcbmxldCBHYW1lT3ZlciA9IGZhbHNlO1xubGV0IGhhZFVuZG8gPSBmYWxzZTtcblxuXG5sZXQgcG9sZSA9IHt9O1xubGV0IG1lbW9yeSA9IHt9O1xubGV0IGNvcHlNZW1vcnkgPSB7fTtcbmxldCBwb2xlQ29weSA9IHt9O1xubGV0IG1heEhvZCA9IDA7XG5cblxuZnVuY3Rpb24gd3JpdGVUb1BvbGVCeUlkKGlkLCB3aGF0VG9Xcml0ZSwgT0JKKSB7XG4gIGNvbnN0IHRlbXAgPSBpZC5zcGxpdCgnJyk7XG4gIGlmICh0ZW1wWzNdICE9IG51bGwpIHtcbiAgICBjb25zdCBJRCA9IE51bWJlcih0ZW1wWzJdICsgdGVtcFszXSk7XG4gICAgT0JKW2BzdHJva2Eke01hdGguZmxvb3IoSUQgLyBST1dTX0NPVU5UKSArIDF9YF1bSUQgJSBST1dTX0NPVU5UXSA9IHdoYXRUb1dyaXRlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0pO1xuICAgIE9CSltgc3Ryb2thJHtNYXRoLmZsb29yKElEIC8gUk9XU19DT1VOVCkgKyAxfWBdW0lEICUgUk9XU19DT1VOVF0gPSB3aGF0VG9Xcml0ZTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHdpbkNoZWNrZXIod2hhdFRvQ2hlY2spIHtcbiAgbGV0IHdpbkNvdW50ZXIgPSAwO1xuICBsZXQgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICB3aW5DZWxscyA9IFtdO1xuICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAocG9sZVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PSB3aGF0VG9DaGVjaykge1xuICAgICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICAgIGlmICh3aGF0VG9DaGVjayA9PSAnWCcpIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgICB9XG4gICAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHdpbkNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQ09MU19DT1VOVDsgaSArPSAxKSB7XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgd2luQ2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IFJPV1NfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKHBvbGVbYHN0cm9rYSR7YiArIDF9YF1baV0gPT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7YiAqIFJPV1NfQ09VTlQgKyBpfWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgICBpZiAod2hhdFRvQ2hlY2sgPT0gJ1gnKSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgICAgfVxuICAgICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB3aW5DZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB3aW5Db3VudGVyID0gMDtcbiAgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBpZiAocG9sZVtgc3Ryb2thJHtpICsgMX1gXVtDT0xTX0NPVU5UIC0gMSAtIGldID09IHdoYXRUb0NoZWNrKSB7XG4gICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyAoQ09MU19DT1VOVCAtIDEgLSBpKX1gKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgaWYgKHdoYXRUb0NoZWNrID09ICdYJykge1xuICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICB9XG4gICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgd2luQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWdvbmFsLWxlZnQnKTtcbiAgICAgIH0pO1xuICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgaWYgKHBvbGVbYHN0cm9rYSR7aSArIDF9YF1baV0gPT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGl9YCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5Db3VudGVyID0gMDtcbiAgICB9XG4gICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgIGlmICh3aGF0VG9DaGVjayA9PT0gJ1gnKSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgIH1cbiAgICAgIHdpbkNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaWFnb25hbC1yaWdodCcpO1xuICAgICAgfSk7XG4gICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKE5vbWVySG9kYSA+PSA5KSB7XG4gICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9IFwiSXQncyBhIGRyYXchXCI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBIb2QodGFyZ2V0LCBJZ3Jvaywga29teUhvZCwgbWVtb3J5T2JqLCBwb2xlT2JqLCB0aXApIHtcbiAgY29uc29sZS5sb2cobWVtb3J5KTtcbiAgY29uc29sZS5sb2cocG9sZSk7XG4gIGlmICghR2FtZU92ZXIpIHtcbiAgICBLdG9Ib2RpdCA9IGtvbXlIb2Q7XG4gICAgd3JpdGVUb1BvbGVCeUlkKGAke3RhcmdldC5pZH1gLCBJZ3JvaywgcG9sZU9iaik7XG4gICAgd3JpdGVUb1BvbGVCeUlkKGAke3RhcmdldC5pZH1gLCBOb21lckhvZGEsIG1lbW9yeU9iaik7XG4gICAgTm9tZXJIb2RhICs9IDE7XG4gICAgdW5kb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHdpbkNoZWNrZXIoSWdyb2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpQb2xlJywgSlNPTi5zdHJpbmdpZnkocG9sZU9iaikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShtZW1vcnlPYmopKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQodGlwKTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBSZWRvKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID09IE5vbWVySG9kYSkge1xuICAgICAgICBpZiAoKE5vbWVySG9kYSArIDEpICUgMiA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgIEhvZCh0YXJnZXQsICdPJywgMSwgY29weU1lbW9yeSwgcG9sZUNvcHksICdyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgICAgSG9kKHRhcmdldCwgJ1gnLCAwLCBjb3B5TWVtb3J5LCBwb2xlQ29weSwgJ2NoJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heEhvZCA9PT0gTm9tZXJIb2RhKSB7XG4gICAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBVbmRvKCkge1xuICBpZiAoIWhhZFVuZG8pIHtcbiAgICBwb2xlQ29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9sZSkpO1xuICAgIGNvcHlNZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICAgIG1heEhvZCA9IE5vbWVySG9kYTtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobWF4SG9kID09PSBOb21lckhvZGEpIHtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKGNvcHlNZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT0gTm9tZXJIb2RhIC0gMSkge1xuICAgICAgICBjb3B5TWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID0gJ04nO1xuICAgICAgICBwb2xlQ29weVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9ICdOJztcbiAgICAgICAgTm9tZXJIb2RhIC09IDE7XG4gICAgICAgIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqUG9sZScsIEpTT04uc3RyaW5naWZ5KHBvbGVDb3B5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOb21lckhvZGEnLCBKU09OLnN0cmluZ2lmeShOb21lckhvZGEpKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgIGlmIChOb21lckhvZGEgJSAyKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBoYWRVbmRvID0gdHJ1ZTtcbiAgICAgICAgS3RvSG9kaXQgPSAhS3RvSG9kaXQ7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gd3JpdGVGaWVsZFRvT2JqKFJPV1MsIENPTFMsIE9CSikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1M7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5hbWVTdHIgPSBbYHN0cm9rYSR7aSArIDF9YF07XG4gICAgY29uc3QgYSA9IFtdO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MUzsgYiArPSAxKSB7XG4gICAgICBjb25zdCBuYW1lQ2VsbCA9ICdOJztcbiAgICAgIE9CSltuYW1lU3RyXSA9IGEucHVzaChuYW1lQ2VsbCk7XG4gICAgfVxuICAgIE9CSltuYW1lU3RyXSA9IGE7XG4gIH1cbn1cbmZ1bmN0aW9uIE9uU3RhcnQoKSB7XG4gIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpQb2xlJykpICE9IG51bGwpIHtcbiAgICBwb2xlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2JqUG9sZScpKTtcbiAgICBtZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpNZW1vcnknKSk7XG4gICAgTm9tZXJIb2RhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTm9tZXJIb2RhJykpO1xuICAgIGlmIChOb21lckhvZGEgJSAyID09PSAwKSB7XG4gICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIEt0b0hvZGl0ID0gMDtcbiAgICB9XG4gICAgaWYgKE5vbWVySG9kYSAhPT0gMCkge1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgIGlmIChwb2xlW2BzdHJva2Eke2kgKyAxfWBdW2JdID09PSAnTycpIHtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgncicpO1xuICAgICAgICB9IGVsc2UgaWYgKHBvbGVbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT09ICdYJykge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aW5DaGVja2VyKCdYJyk7XG4gICAgICB3aW5DaGVja2VyKCdPJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBwb2xlKTtcbiAgICB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcbiAgfVxufVxuZnVuY3Rpb24gUmVzdGFydCgpIHtcbiAgd3JpdGVGaWVsZFRvT2JqKENPTFNfQ09VTlQsIFJPV1NfQ09VTlQsIHBvbGUpO1xuICB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd3aW4nKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFnb25hbC1sZWZ0Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlhZ29uYWwtcmlnaHQnKTtcbiAgICB9XG4gIH1cbiAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICcnO1xuICB3b25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBHYW1lT3ZlciA9IGZhbHNlO1xuICBOb21lckhvZGEgPSAwO1xuICBLdG9Ib2RpdCA9IDE7Ly8g0L/QtdGA0LLRi9C5INCy0YHQtdCz0LTQsCDQutGA0LXRgdGC0LjQulxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqUG9sZScsIEpTT04uc3RyaW5naWZ5KHBvbGUpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gIE9uU3RhcnQoKTtcbn1cblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlc3RhcnQpO1xuXG5cbmZ1bmN0aW9uIENyZWF0ZUdhbWVFbGVtZW50KGV2ZW50KSB7XG4gIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2tyZXN0JykgPT09IG51bGwgJiYgZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdub2xpaycpID09PSBudWxsKSB7XG4gICAgaWYgKEt0b0hvZGl0ID09PSAxKSB7XG4gICAgICBpZiAoaGFkVW5kbykge1xuICAgICAgICBwb2xlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb2xlQ29weSkpO1xuICAgICAgICBtZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgaGFkVW5kbyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBIb2QoZXZlbnQuY3VycmVudFRhcmdldCwgJ1gnLCAwLCBtZW1vcnksIHBvbGUsICdjaCcpO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYWRVbmRvKSB7XG4gICAgICAgIHBvbGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvbGVDb3B5KSk7XG4gICAgICAgIG1lbW9yeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBoYWRVbmRvID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBIb2QoZXZlbnQuY3VycmVudFRhcmdldCwgJ08nLCAxLCBtZW1vcnksIHBvbGUsICdyJyk7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ3JlYXRlR2FtZUVsZW1lbnQsIGZhbHNlKTtcbn1cbndpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIE9uU3RhcnQoKTtcbiAgaWYgKE5vbWVySG9kYSA9PT0gMCkge1xuICAgIFJlc3RhcnQoKTtcbiAgfVxufTtcblxuXG5cbk9uU3RhcnQoKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9