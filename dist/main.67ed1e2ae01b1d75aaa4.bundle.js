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
  console.log(NomerHoda);

  if (!GameOver) {
    KtoHodit = komyHod;
    writeToPoleById("".concat(target.id), NomerHoda, memoryObj);
    NomerHoda += 1;
    undoBtn.disabled = false;
    winChecker(komyHod);
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
            Hod(target, 1, copyMemory, 'r');
          } else {
            var _target = document.getElementById("c-".concat(i * _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"] + b));

            Hod(_target, 0, copyMemory, 'ch');
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
      if (copyMemory["stroka".concat(i + 1)][b] == NomerHoda - 1) {
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
    writeFieldToObj(_generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], memory);
  }
}

function Restart() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJOb21lckhvZGEiLCJLdG9Ib2RpdCIsInVuZG9CdG4iLCJyZWRvQnRuIiwid29uTWVzc2FnZSIsInJlc3RhcnRCdG4iLCJ3b25NZXNzYWdlV2hvIiwiR2FtZU92ZXIiLCJoYWRVbmRvIiwibWVtb3J5IiwiY29weU1lbW9yeSIsIm1heEhvZCIsIndyaXRlVG9Qb2xlQnlJZCIsIndoYXRUb1dyaXRlIiwiT0JKIiwidGVtcCIsInNwbGl0IiwiSUQiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJ3aW5DaGVja2VyIiwid2hhdFRvQ2hlY2siLCJ3aW5Db3VudGVyIiwid2luQ2VsbHMiLCJiIiwicHVzaCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZCIsImRpc2FibGVkIiwiSG9kIiwidGFyZ2V0Iiwia29teUhvZCIsIm1lbW9yeU9iaiIsInRpcCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZG8iLCJVbmRvIiwicGFyc2UiLCJ3cml0ZUZpZWxkVG9PYmoiLCJST1dTIiwiQ09MUyIsIm5hbWVTdHIiLCJhIiwibmFtZUNlbGwiLCJPblN0YXJ0IiwiZ2V0SXRlbSIsIlJlc3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ3JlYXRlR2FtZUVsZW1lbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjZWxscyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsU0FBcEIsRUFBK0JFLENBQUMsRUFBaEMs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LENBTEQ7O0FBU0FGLE9BQU8sRyIsImZpbGUiOiJtYWluLjY3ZWQxZTJhZTAxYjFkNzVhYWE0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IFJPV1NfQ09VTlQgPSAzO1xyXG5leHBvcnQgY29uc3QgQ09MU19DT1VOVCA9IDM7XHJcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIHJvd0lkKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzQ291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgaWQgPSByb3dJZCAqIGNvbHNDb3VudCArIGk7XHJcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbC5pZCA9IGBjLSR7aWR9YDtcclxuICAgIGNvbC5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICBjb2wuY2xhc3NOYW1lID0gJ2NlbGwnO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3dzKHJvd3NDb3VudCwgY29sc0NvdW50KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzQ291bnQ7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XHJcbiAgICByb3cuaWQgPSBgci0ke2l9YDtcclxuICAgIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgaSk7XHJcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuLy9nZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7XHJcbiIsIlxuLy8gaW1wb3J0IGZpZWxkIGZyb20gJy4vZ2VuZXJhdGVGaWVsZC5qcyc7XG5pbXBvcnQgeyBDT0xTX0NPVU5ULCBST1dTX0NPVU5ULCBnZW5lcmF0ZVJvd3MgfSBmcm9tICcuL2dlbmVyYXRlRmllbGQnO1xuXG5cbmdlbmVyYXRlUm93cyhST1dTX0NPVU5ULCBDT0xTX0NPVU5UKTtcblxuXG5sZXQgTm9tZXJIb2RhID0gMDtcbmxldCBLdG9Ib2RpdCA9IDE7XG5cbmNvbnN0IHVuZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idG4nKTtcbmNvbnN0IHJlZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkby1idG4nKTtcbmNvbnN0IHdvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLXRpdGxlJyk7XG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtYnRuJyk7XG5jb25zdCB3b25NZXNzYWdlV2hvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1tZXNzYWdlJyk7XG5sZXQgR2FtZU92ZXIgPSBmYWxzZTtcbmxldCBoYWRVbmRvID0gZmFsc2U7XG5cbmxldCBtZW1vcnkgPSB7fTtcbmxldCBjb3B5TWVtb3J5ID0ge307XG5sZXQgbWF4SG9kID0gMDtcblxuXG5mdW5jdGlvbiB3cml0ZVRvUG9sZUJ5SWQoaWQsIHdoYXRUb1dyaXRlLCBPQkopIHtcbiAgY29uc3QgdGVtcCA9IGlkLnNwbGl0KCcnKTtcbiAgaWYgKHRlbXBbM10gIT0gbnVsbCkge1xuICAgIGNvbnN0IElEID0gTnVtYmVyKHRlbXBbMl0gKyB0ZW1wWzNdKTtcbiAgICBPQkpbYHN0cm9rYSR7TWF0aC5mbG9vcihJRCAvIFJPV1NfQ09VTlQpICsgMX1gXVtJRCAlIFJPV1NfQ09VTlRdID0gd2hhdFRvV3JpdGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgSUQgPSBOdW1iZXIodGVtcFsyXSk7XG4gICAgT0JKW2BzdHJva2Eke01hdGguZmxvb3IoSUQgLyBST1dTX0NPVU5UKSArIDF9YF1bSUQgJSBST1dTX0NPVU5UXSA9IHdoYXRUb1dyaXRlO1xuICB9XG59XG5cblxuZnVuY3Rpb24gd2luQ2hlY2tlcih3aGF0VG9DaGVjaykge1xuICBsZXQgd2luQ291bnRlciA9IDA7XG4gIGxldCB3aW5DZWxscyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1NfQ09VTlQ7IGkgKz0gMSkge1xuICAgIHdpbkNlbGxzID0gW107XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0lMiA9PT0gd2hhdFRvQ2hlY2spIHtcbiAgICAgICAgd2luQ291bnRlciArPSAxO1xuICAgICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgICBpZiAod2hhdFRvQ2hlY2sgPT09IDApIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ0Nyb3NzZXMgd29uISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgICB9XG4gICAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHdpbkNlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgQ09MU19DT1VOVDsgaSArPSAxKSB7XG4gICAgd2luQ291bnRlciA9IDA7XG4gICAgd2luQ2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IFJPV1NfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtiICsgMX1gXVtpXSUyID09PSB3aGF0VG9DaGVjaykge1xuICAgICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICAgIHdpbkNlbGxzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtiICogUk9XU19DT1VOVCArIGl9YCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICAgIGlmICh3aGF0VG9DaGVjayA9PT0gMCkge1xuICAgICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gJ1RvZXMgd29uISc7XG4gICAgICAgIH1cbiAgICAgICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgd2luQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luQ291bnRlciA9IDA7XG4gIHdpbkNlbGxzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtDT0xTX0NPVU5UIC0gMSAtIGldJTIgPT09IHdoYXRUb0NoZWNrKSB7XG4gICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyAoQ09MU19DT1VOVCAtIDEgLSBpKX1gKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbkNvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBpZiAod2luQ291bnRlciA9PT0gMykge1xuICAgICAgaWYgKHdoYXRUb0NoZWNrID09PSAwKSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnQ3Jvc3NlcyB3b24hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnVG9lcyB3b24hJztcbiAgICAgIH1cbiAgICAgIHdvbk1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB3aW5DZWxscy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlhZ29uYWwtbGVmdCcpO1xuICAgICAgfSk7XG4gICAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB3aW5Db3VudGVyID0gMDtcbiAgd2luQ2VsbHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBpZiAobWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2ldJTIgPT09IHdoYXRUb0NoZWNrKSB7XG4gICAgICB3aW5Db3VudGVyICs9IDE7XG4gICAgICB3aW5DZWxscy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBpfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luQ291bnRlciA9IDA7XG4gICAgfVxuICAgIGlmICh3aW5Db3VudGVyID09PSAzKSB7XG4gICAgICBpZiAod2hhdFRvQ2hlY2sgPT09IDApIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdDcm9zc2VzIHdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29uTWVzc2FnZVdoby50ZXh0Q29udGVudCA9ICdUb2VzIHdvbiEnO1xuICAgICAgfVxuICAgICAgd2luQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWdvbmFsLXJpZ2h0Jyk7XG4gICAgICB9KTtcbiAgICAgIEdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB3b25NZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoTm9tZXJIb2RhID49IDkpIHtcbiAgICBHYW1lT3ZlciA9IHRydWU7XG4gICAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgd29uTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB3b25NZXNzYWdlV2hvLnRleHRDb250ZW50ID0gXCJJdCdzIGEgZHJhdyFcIjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIEhvZCh0YXJnZXQsIGtvbXlIb2QsIG1lbW9yeU9iaiwgdGlwKSB7XG4gIGNvbnNvbGUubG9nKE5vbWVySG9kYSk7XG5cbiAgaWYgKCFHYW1lT3Zlcikge1xuICAgIEt0b0hvZGl0ID0ga29teUhvZDtcbiAgICB3cml0ZVRvUG9sZUJ5SWQoYCR7dGFyZ2V0LmlkfWAsIE5vbWVySG9kYSwgbWVtb3J5T2JqKTtcbiAgICBOb21lckhvZGEgKz0gMTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2luQ2hlY2tlcihrb215SG9kKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkobWVtb3J5T2JqKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05vbWVySG9kYScsIEpTT04uc3RyaW5naWZ5KE5vbWVySG9kYSkpO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHRpcCk7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gUmVkbygpIHtcbiAgaWYoaGFkVW5kbyl7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0gPT0gTm9tZXJIb2RhKSB7XG4gICAgICAgIGlmICgoTm9tZXJIb2RhICsgMSkgJSAyID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICAgICAgSG9kKHRhcmdldCwgMSwgY29weU1lbW9yeSwgJ3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgICAgICBIb2QodGFyZ2V0LCAwLCBjb3B5TWVtb3J5LCAnY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihOb21lckhvZGElMil7XG4gICAgICAgICAgS3RvSG9kaXQgPSAwO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heEhvZCA9PT0gTm9tZXJIb2RhKSB7XG4gICAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxufVxuXG5mdW5jdGlvbiBVbmRvKCkge1xuICBpZiAoIWhhZFVuZG8pIHtcbiAgICBjb3B5TWVtb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZW1vcnkpKTtcbiAgICBtYXhIb2QgPSBOb21lckhvZGE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21heEhvZCcsIEpTT04uc3RyaW5naWZ5KG1heEhvZCkpOyAgICAgXG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKG1heEhvZCA9PT0gTm9tZXJIb2RhKSB7XG4gICAgcmVkb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBDT0xTX0NPVU5UOyBiICs9IDEpIHtcbiAgICAgIGlmIChjb3B5TWVtb3J5W2BzdHJva2Eke2kgKyAxfWBdW2JdID09IE5vbWVySG9kYSAtIDEpIHtcbiAgICAgICAgY29weU1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSA9ICdOJztcbiAgICAgICAgTm9tZXJIb2RhIC09IDE7XG4gICAgICAgIGlmIChOb21lckhvZGEgPT09IDApIHtcbiAgICAgICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2JqTWVtb3J5JywgSlNPTi5zdHJpbmdpZnkoY29weU1lbW9yeSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7aSAqIFJPV1NfQ09VTlQgKyBifWApO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncicpO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcblxuICAgICAgICBpZihOb21lckhvZGElMil7XG4gICAgICAgICAgS3RvSG9kaXQgPSAwO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBLdG9Ib2RpdCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaGFkVW5kbyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHdyaXRlRmllbGRUb09iaihST1dTLCBDT0xTLCBPQkopIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTOyBpICs9IDEpIHtcbiAgICBjb25zdCBuYW1lU3RyID0gW2BzdHJva2Eke2kgKyAxfWBdO1xuICAgIGNvbnN0IGEgPSBbXTtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFM7IGIgKz0gMSkge1xuICAgICAgY29uc3QgbmFtZUNlbGwgPSAnTic7XG4gICAgICBPQkpbbmFtZVN0cl0gPSBhLnB1c2gobmFtZUNlbGwpO1xuICAgIH1cbiAgICBPQkpbbmFtZVN0cl0gPSBhO1xuICB9XG59XG5mdW5jdGlvbiBPblN0YXJ0KCkge1xuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb2JqTWVtb3J5JykpICE9IG51bGwpIHtcbiAgICBtZW1vcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYmpNZW1vcnknKSk7XG4gICAgTm9tZXJIb2RhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTm9tZXJIb2RhJykpO1xuICAgIG1heEhvZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21heEhvZCcpKTtcbiAgICBpZiAoTm9tZXJIb2RhICUgMiA9PT0gMCkge1xuICAgICAgS3RvSG9kaXQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBLdG9Ib2RpdCA9IDA7XG4gICAgfVxuICAgIGlmKE5vbWVySG9kYSA9PT0gMCl7XG4gICAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgdW5kb0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgaWYoaGFkVW5kbyl7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XU19DT1VOVDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYy0ke2kgKiBST1dTX0NPVU5UICsgYn1gKTtcbiAgICAgICAgaWYgKG1lbW9yeVtgc3Ryb2thJHtpICsgMX1gXVtiXSUyID09PSAxKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3InKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZW1vcnlbYHN0cm9rYSR7aSArIDF9YF1bYl0lMiA9PT0gMCkge1xuICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaCcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2gnKTtcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdpbkNoZWNrZXIoMCk7XG4gICAgd2luQ2hlY2tlcigxKTtcbiAgfSBlbHNlIHtcbiAgICB3cml0ZUZpZWxkVG9PYmooQ09MU19DT1VOVCwgUk9XU19DT1VOVCwgbWVtb3J5KTtcbiAgfVxufVxuZnVuY3Rpb24gUmVzdGFydCgpIHtcbiAgd3JpdGVGaWVsZFRvT2JqKENPTFNfQ09VTlQsIFJPV1NfQ09VTlQsIG1lbW9yeSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTX0NPVU5UOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IENPTFNfQ09VTlQ7IGIgKz0gMSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtpICogUk9XU19DT1VOVCArIGJ9YCk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncicpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnd2luJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlhZ29uYWwtbGVmdCcpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RpYWdvbmFsLXJpZ2h0Jyk7XG4gICAgfVxuICB9XG4gIHdvbk1lc3NhZ2VXaG8udGV4dENvbnRlbnQgPSAnJztcbiAgd29uTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgR2FtZU92ZXIgPSBmYWxzZTtcbiAgTm9tZXJIb2RhID0gMDtcbiAgS3RvSG9kaXQgPSAxOy8vINC/0LXRgNCy0YvQuSDQstGB0LXQs9C00LAg0LrRgNC10YHRgtC40LpcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29iak1lbW9yeScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTm9tZXJIb2RhJywgSlNPTi5zdHJpbmdpZnkoTm9tZXJIb2RhKSk7XG4gIE9uU3RhcnQoKTtcbn1cblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlc3RhcnQpO1xuXG5cbmZ1bmN0aW9uIENyZWF0ZUdhbWVFbGVtZW50KGV2ZW50KSB7XG4gIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2tyZXN0JykgPT09IG51bGwgJiYgZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdub2xpaycpID09PSBudWxsKSB7XG4gICAgaWYgKEt0b0hvZGl0ID09PSAxKSB7XG4gICAgICBpZiAoaGFkVW5kbykge1xuICAgICAgICBtZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgaGFkVW5kbyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBIb2QoZXZlbnQuY3VycmVudFRhcmdldCwgMCwgbWVtb3J5LCAnY2gnKTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFkVW5kbykge1xuICAgICAgICBtZW1vcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvcHlNZW1vcnkpKTtcbiAgICAgICAgaGFkVW5kbyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgSG9kKGV2ZW50LmN1cnJlbnRUYXJnZXQsIDEsIG1lbW9yeSwgJ3InKTtcbiAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwnKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDcmVhdGVHYW1lRWxlbWVudCwgZmFsc2UpO1xufVxud2luZG93Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgT25TdGFydCgpO1xuICBpZiAoTm9tZXJIb2RhID09PSAwKSB7XG4gICAgUmVzdGFydCgpO1xuICB9XG59O1xuXG5cblxuT25TdGFydCgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=