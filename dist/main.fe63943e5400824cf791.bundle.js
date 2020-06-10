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
    target.classList.add(tip);
  }

  return returningOBJ;
}

function Redo() {
  if (hadUndo) {
    for (var i = 0; i < _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"]; i += 1) {
      for (var b = 0; b < _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]; b += 1) {
        if (memory["stroka".concat(i + 1)][b] === NomerHoda) {
          if ((NomerHoda + 1) % 2 === 0) {
            var target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));
            copyMemory = Hod(target, 1, copyMemory, 'r');
          } else {
            var _target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

            copyMemory = Hod(_target, 0, copyMemory, 'ch');
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
    } else {
      undoBtn.disabled = false;

      if (hadUndo) {
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

      memory = Hod(event.currentTarget, 0, memory, 'ch');
      redoBtn.disabled = true;
    } else {
      if (hadUndo) {
        memory = JSON.parse(JSON.stringify(copyMemory));
        hadUndo = false;
      }

      memory = Hod(event.currentTarget, 1, memory, 'r');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwibWVtb3J5IiwiY29weU1lbW9yeSIsIm1heEhvZCIsIndpbkNoZWNrZXIiLCJ3aGF0VG9DaGVjayIsIndpbkNvdW50ZXIiLCJ3aW5DZWxscyIsImIiLCJwdXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkIiwiZGlzYWJsZWQiLCJIb2QiLCJ0YXJnZXQiLCJrb215SG9kIiwibWVtb3J5T2JqIiwidGlwIiwicmV0dXJuaW5nT0JKIiwidGVtcCIsInNwbGl0IiwiSUQiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZG8iLCJVbmRvIiwicGFyc2UiLCJ3cml0ZUZpZWxkVG9PYmoiLCJST1dTIiwiQ09MUyIsIk9CSiIsIm5hbWVTdHIiLCJhIiwibmFtZUNlbGwiLCJPblN0YXJ0IiwiZ2V0SXRlbSIsIlJlc3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ3JlYXRlR2FtZUVsZW1lbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjZWxscyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsU0FBcEIsRUFBK0JFLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsUUFBTUMsRUFBRSxHQUFHRixLQUFL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bWFpbi5mZTYzOTQzZTU0MDA4MjRjZjc5MS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBST1dTX0NPVU5UID0gMztcbmV4cG9ydCBjb25zdCBDT0xTX0NPVU5UID0gMztcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgcm93SWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGlkID0gcm93SWQgKiBjb2xzQ291bnQgKyBpO1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5pZCA9IGBjLSR7aWR9YDtcbiAgICBjb2wuZGF0YXNldC5pZCA9IGlkO1xuICAgIGNvbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93cyhyb3dzQ291bnQsIGNvbHNDb3VudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NDb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIHJvdy5pZCA9IGByLSR7aX1gO1xuICAgIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgaSk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG4vL2dlbmVyYXRlUm93cyhST1dTX0NPVU5ULCBDT0xTX0NPVU5UKTtcbiIsIi8vIGltcG9ydCBmaWVsZCBmcm9tICcuL2dlbmVyYXRlRmllbGQuanMnO1xuaW1wb3J0IHsgQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgZ2VuZXJhdGVSb3dzIH0gZnJvbSAnLi9nZW5lcmF0ZUZpZWxkJztcblxuZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuXG5sZXQgTm9tZXJIb2RhID0gMDtcbmxldCBLdG9Ib2RpdCA9IDE7XG5cbmNvbnN0IHVuZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idG4nKTtcbmNvbnN0IHJlZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkby1idG4nKTtcbmNvbnN0IHdvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLXRpdGxlJyk7XG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtYnRuJyk7XG5jb25zdCB3b25NZXNzYWdlV2hvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1tZXNzYWdlJyk7XG5sZXQgR2FtZU92ZXIgPSBmYWxzZTtcbmxldCBoYWRVbmRvID0gZmFsc2U7XG5cbmxldCBtZW1vcnkgPSB7fTtcbmxldCBjb3B5TWVtb3J5ID0ge307XG5sZXQgbWF4SG9kID0gMDtcblxuZnVuY3Rpb24gd2luQ2hlY2tlcih3aGF0VG9DaGVjaykge1xuICBsZXQgd2luQ291bnRlciA9IDA7XG4gIGxldCB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIHdpbkNlbGxzID0gW107XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gJSAyID09PSB3aGF0VG9DaGVjaykge1xuICAgICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICAgIGlmICh3aGF0VG9DaGVjayA9PT0gMCkge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICAgIH1cbiAgICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgd2luQ2VsbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQ09MU19DT1VOVDsgaSArPSAxKSB7XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgd2luQ2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IFJPV1NfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtiICsgMX1gXVtpXSAlIDIgPT09IHdoYXRUb0NoZWNrKSB7XG4gICAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgICAgd2luQ2VsbHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2IgKiBST1dTX0NPVU5UICsgaX1gKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5Db3VudGVyID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgICAgaWYgKHdoYXRUb0NoZWNrID09PSAwKSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgICAgfVxuICAgICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB3aW5DZWxscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtDT0xTX0NPVU5UIC0gMSAtIGldICUgMiA9PT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIChDT0xTX0NPVU5UIC0gMSAtIGkpfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgfVxuICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICBpZiAod2hhdFRvQ2hlY2sgPT09IDApIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgfVxuICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHdpbkNlbGxzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhZ29uYWwtbGVmdCcpO1xuICAgICAgfSk7XG4gICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB3aW5Db3VudGVyID0gMDtcbiAgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2ldICUgMiA9PT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgIHdpbkNvdW50ZXIgKz0gMTtcbiAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGl9YCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5Db3VudGVyID0gMDtcbiAgICB9XG4gICAgaWYgKHdpbkNvdW50ZXIgPT09IDMpIHtcbiAgICAgIGlmICh3aGF0VG9DaGVjayA9PT0gMCkge1xuICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICB9XG4gICAgICB3aW5DZWxscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWdvbmFsLXJpZ2h0Jyk7XG4gICAgICB9KTtcbiAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoTm9tZXJIb2RhID49IDkpIHtcbiAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gXCJJdCdzIGEgZHJhdyFcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBIb2QodGFyZ2V0LCBrb215SG9kLCBtZW1vcnlPYmosIHRpcCkge1xuICAvLyBjb25zb2xlLmxvZyhOb21lckhvZGEpO1xuICBjb25zdCByZXR1cm5pbmdPQkogPSBtZW1vcnlPYmo7XG4gIGlmICghR2FtZU92ZXIpIHtcbiAgICBLdG9Ib2RpdCA9IGtvbXlIb2Q7XG5cbiAgICBjb25zdCB0ZW1wID0gYCR7dGFyZ2V0LmlkfWAuc3BsaXQoJycpO1xuICAgIGlmICh0ZW1wWzNdICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0gKyB0ZW1wWzNdKTtcbiAgICAgIHJldHVybmluZ09CSltgc3Ryb2thJHtNYXRoLmZsb29yKElEIC8gUk9XU19DT1VOVCkgKyAxfWBdW0lEICUgUk9XU19DT1VOVF0gPSBOb21lckhvZGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0pO1xuICAgICAgcmV0dXJuaW5nT0JKW2BzdHJva2Eke01hdGguZmxvb3IoSUQgLyBST1dTX0NPVU5UKSArIDF9YF1bSUQgJSBST1dTX0NPVU5UXSA9IE5vbWVySG9kYTtcbiAgICB9XG5cbiAgICBOb21lckhvZGEgKz0gMTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2luQ2hlY2tlcihrb215SG9kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkocmV0dXJuaW5nT0JKKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05vbWVySG9kYScsIEpTT04uc3RyaW5naWZ5KE5vbWVySG9kYSkpO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHRpcCk7XG4gIH1cbiAgcmV0dXJuIHJldHVybmluZ09CSjtcbn1cblxuZnVuY3Rpb24gUmVkbygpIHtcbiAgaWYgKGhhZFVuZG8pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PT0gTm9tZXJIb2RhKSB7XG4gICAgICAgICAgaWYgKChOb21lckhvZGEgKyAxKSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgICAgY29weU1lbW9yeSA9IEhvZCh0YXJnZXQsIDEsIGNvcHlNZW1vcnksICdyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICAgICAgY29weU1lbW9yeSA9IEhvZCh0YXJnZXQsIDAsIGNvcHlNZW1vcnksICdjaCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoTm9tZXJIb2RhICUgMikge1xuICAgICAgICAgICAgS3RvSG9kaXQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXhIb2QgPT09IE5vbWVySG9kYSkge1xuICAgICAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBVbmRvKCkge1xuICBpZiAoIWhhZFVuZG8pIHtcbiAgICBjb3B5TWVtb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZW1vcnkpKTtcbiAgICBtYXhIb2QgPSBOb21lckhvZGE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21heEhvZCcsIEpTT04uc3RyaW5naWZ5KG1heEhvZCkpO1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChtYXhIb2QgPT09IE5vbWVySG9kYSkge1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBpZiAoY29weU1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9PT0gTm9tZXJIb2RhIC0gMSkge1xuICAgICAgICBjb3B5TWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID0gJ04nO1xuICAgICAgICBOb21lckhvZGEgLT0gMTtcbiAgICAgICAgaWYgKE5vbWVySG9kYSA9PT0gMCkge1xuICAgICAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvYmpNZW1vcnknLCBKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOb21lckhvZGEnLCBKU09OLnN0cmluZ2lmeShOb21lckhvZGEpKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaCcpO1xuXG4gICAgICAgIGlmIChOb21lckhvZGEgJSAyKSB7XG4gICAgICAgICAgS3RvSG9kaXQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEt0b0hvZGl0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBoYWRVbmRvID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gd3JpdGVGaWVsZFRvT2JqKFJPV1MsIENPTFMsIE9CSikge1xuICBjb25zdCByZXR1cm5pbmdPQkogPSBPQko7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XUzsgaSArPSAxKSB7XG4gICAgY29uc3QgbmFtZVN0ciA9IFtgc3Ryb2thJHtpICsgMX1gXTtcbiAgICBjb25zdCBhID0gW107XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTOyBiICs9IDEpIHtcbiAgICAgIGNvbnN0IG5hbWVDZWxsID0gJ04nO1xuICAgICAgcmV0dXJuaW5nT0JKW25hbWVTdHJdID0gYS5wdXNoKG5hbWVDZWxsKTtcbiAgICB9XG4gICAgcmV0dXJuaW5nT0JKW25hbWVTdHJdID0gYTtcbiAgfVxuICByZXR1cm4gcmV0dXJuaW5nT0JKO1xufVxuZnVuY3Rpb24gT25TdGFydCgpIHtcbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29iak1lbW9yeScpKSAhPSBudWxsKSB7XG4gICAgbWVtb3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2JqTWVtb3J5JykpO1xuICAgIE5vbWVySG9kYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ05vbWVySG9kYScpKTtcbiAgICBtYXhIb2QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXhIb2QnKSk7XG4gICAgaWYgKE5vbWVySG9kYSAlIDIgPT09IDApIHtcbiAgICAgIEt0b0hvZGl0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgS3RvSG9kaXQgPSAwO1xuICAgIH1cbiAgICBpZiAoTm9tZXJIb2RhID09PSAwKSB7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAoaGFkVW5kbykge1xuICAgICAgICByZWRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdICUgMiA9PT0gMSkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdICUgMiA9PT0gMCkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaCcpO1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luQ2hlY2tlcigwKTtcbiAgICB3aW5DaGVja2VyKDEpO1xuICB9IGVsc2Uge1xuICAgIG1lbW9yeSA9IHdyaXRlRmllbGRUb09iaihDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBtZW1vcnkpO1xuICB9XG59XG5mdW5jdGlvbiBSZXN0YXJ0KCkge1xuICBtZW1vcnkgPSB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgQ09MU19DT1VOVDsgYiArPSAxKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd3aW4nKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFnb25hbC1sZWZ0Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlhZ29uYWwtcmlnaHQnKTtcbiAgICB9XG4gIH1cbiAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICcnO1xuICB3b25NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBHYW1lT3ZlciA9IGZhbHNlO1xuICBOb21lckhvZGEgPSAwO1xuICBLdG9Ib2RpdCA9IDE7IC8vINC/0LXRgNCy0YvQuSDQstGB0LXQs9C00LAg0LrRgNC10YHRgtC40LpcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gIE9uU3RhcnQoKTtcbn1cblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlc3RhcnQpO1xuXG5mdW5jdGlvbiBDcmVhdGVHYW1lRWxlbWVudChldmVudCkge1xuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdrcmVzdCcpID09PSBudWxsICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3Rvcignbm9saWsnKSA9PT0gbnVsbCkge1xuICAgIGlmIChLdG9Ib2RpdCA9PT0gMSkge1xuICAgICAgaWYgKGhhZFVuZG8pIHtcbiAgICAgICAgbWVtb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGhhZFVuZG8gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbWVtb3J5ID0gSG9kKGV2ZW50LmN1cnJlbnRUYXJnZXQsIDAsIG1lbW9yeSwgJ2NoJyk7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhZFVuZG8pIHtcbiAgICAgICAgbWVtb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb3B5TWVtb3J5KSk7XG4gICAgICAgIGhhZFVuZG8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG1lbW9yeSA9IEhvZChldmVudC5jdXJyZW50VGFyZ2V0LCAxLCBtZW1vcnksICdyJyk7XG4gICAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ3JlYXRlR2FtZUVsZW1lbnQsIGZhbHNlKTtcbn1cbndpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIE9uU3RhcnQoKTtcbiAgaWYgKE5vbWVySG9kYSA9PT0gMCkge1xuICAgIFJlc3RhcnQoKTtcbiAgfVxufTtcblxuT25TdGFydCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==