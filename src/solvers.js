/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};

window.findNRooksSolution = function(n) {
  var newBoard = window.makeEmptyMatrix(n);
  for (var i = 0; i < newBoard.length; i++) {
    newBoard[i][i] = 1;
  }
  return newBoard;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  return factorial(n);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   //recursive function ( parameters)
//   var solution;
//   var gridLoop = function(start, x, y) {
//     console.log(newBoard);
//     var newBoard = new Board({'n': n});
//   // var counter
//     var counter = 0;
//   // if n = 0, return. 
//     if ( n !== 0 && start === n) {
//       console.log('start === n', start);
//       var newerBoard = new Board({'n': 0});
//       solution = newerBoard.rows();
//       return;
//     }
//     // create a for-loop for x
//     for (var y = 0; y < n; y++) {
//       for (var x = 0; x < n; x++) {
//         if ( x === 0 && y === 0) {
//           x = x + start;
//         }

//         newBoard.togglePiece(x, y);
//         // if toggled point fails test, untoggle (and move onto the next row?)
//         if (newBoard.hasAnyQueenConflictsOn(x, y)) {
//           newBoard.togglePiece(x, y);
//         } else {
//         //else increase counter
//           counter++;
//         }
//       }
//     }    
//     // at end - if counter equals n, store this solution
//     if (counter === n) {
//       solution = newBoard.rows();
//       return; 
//     } else {
//     //else recurse with changed starting position (n-1)
//       // console.log('start: ', start);
//       return gridLoop(start + 1);
//     }
//   };
//   gridLoop(0);
//   // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   console.log('solution: ', solution, 'n:', n);
//   return solution;
// };

window.findNQueensSolution = function(n) {
  var solution;

  var gridLoop = function(boardObj, counter, x, y) {
    var boardObj = boardObj || new Board({'n': n});
    var boardValue = boardObj.rows();
    var counter = counter || 0;
    // var clean = new Board({'n': n});
    var x = x || 0;
    var y = y || 0;

    if (n === counter || n === 0) {
      return boardValue;
    }
    
    for (var i = y; i < boardValue.length; i++) {
      for (var j = x; j < boardValue.length; j++) {
        boardObj.togglePiece(j, i);
        if (boardObj.hasAnyQueenConflictsOn(j, i)) {
          boardObj.togglePiece(j, i);
        } 
        if (j > board.length) {
          solution = gridLoop(boardObj, counter, 0, i + 1);
        } else {
          solution = gridLoop(boardObj, counter, j + 1, i);
        }
        
        if (solution !== false) {
          return solution;
        }
      }
    }
    return false;
  };

  gridLoop(0);
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  console.log('solution: ', solution, 'n:', n);
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
