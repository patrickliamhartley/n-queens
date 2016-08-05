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
 

};


window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  
  
  // console.log(board.rows());

  var solver = function(row) { 
    
  
    for (var i = 0; i < n; i++) {
      if (row === n - 1 && !board.hasAnyRooksConflicts()) {
        solutionCount++;
        return;
      }
      board.togglePiece(row, i);
      // console.log(board.rows());
     
      if (!board.hasAnyRooksConflicts()) {

        solver(row + 1);
      }
      board.togglePiece(row, i);
    }

  

  };
  solver(0);
  return solutionCount;
};



window.findNQueensSolution = function(n) {
};

window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  
 
  // console.log(board.rows());

  var solver = function(row) {  
    if (row === n) {
      solutionCount++;
      return;
    }
    
  
    for (var i = 0; i < n; i++) {
      
      board.togglePiece(row, i);
      // console.log(board.rows());

     
      if (!board.hasAnyQueensConflicts()) {

        solver(row + 1);
      }
      board.togglePiece(row, i);
    }

  

  };
  solver(0);
  return solutionCount;




  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var factorial = function(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   };
//   return factorial(n);
// };

// window.findNRooksSolution = function(n) {
//   var newBoard = window.makeEmptyMatrix(n);
//   for (var i = 0; i < newBoard.length; i++) {
//     newBoard[i][i] = 1;
//   }
//   return newBoard;

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   //recursive function ( parameters)
//   var solution;
//   var placePiece = function(start, x, y) {
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
//       return placePiece(start + 1);
//     }
//   };
//   placePiece(0);
//   // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   console.log('solution: ', solution, 'n:', n);
//   return solution;
// };

// window.findNQueensSolution = function(n) {
//   console.log('n: ', n);
//   var solution;
//   if (n === 0) {
//     console.log ('n is zero');
//     return [];
//   }

//   var placePiece = function(boardObj, counter, x, y) {
//     var boardObj = boardObj || new Board({'n': n});
//     var boardValue = boardObj.rows();
//     var counter = counter || 0;
//     // var clean = new Board({'n': n});
//     var x = x || 0;
//     var y = y || 0;

//     if (n === counter || n === 0) {
//       return boardValue;
//     }
    
//     for (var i = y; i < boardValue.length; i++) {
//       for (var j = x; j < boardValue.length; j++) {
//         boardObj.togglePiece(j, i);
//         counter++;
//         if (boardObj.hasAnyQueenConflictsOn(j, i)) {
//           boardObj.togglePiece(j, i);
//           counter--;
//         } 

//         // increase i or j
//         if (j === boardValue.length - 1) {
//           solution = placePiece(boardObj, counter, 0, i + 1);
//         } else {
//           solution = placePiece(boardObj, counter, j + 1, i);
//         }

//         if (solution === false) {
//           if (j === 0) {
//             solution = placePiece(boardObj, counter, j, i - 1);
//           } else {
//             solution = placePiece(boardObj, counter, j - 1, i);
//           }

          
//           // boardObj.togglePiece(j, i);
//           // counter--;
//           // placePiece(boardObj, counter, j + 1, i);
//         }
        
//         // if (solution !== false) {
//         //   return solution;
//         // }
//       }
//     }
//     return false;
//   };




//   placePiece();
//   // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   console.log('solution: ', solution, 'n:', n);
//   return solution;
// };


// ////alternate solution idea/////
// window.findNQueensSolution = function(n) {
//   var size = n;
//   var boardObj = new Board({"n": size});
//   console.log("size" + size);
//   console.log(boardObj.rows());


//   pieceThere = function (x, y) {
//     if (boardObj.get(x)[y] === 1) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   forwardSearch = function (x, y, board, counter, forward) {
//     // var boardObj = board || new Board({n: size});
//     // console.log("fsearch board"+boardObj.rows());
//     var boardValue = boardObj.rows();
//     var counter = counter || 0;
//     var x = x || 0;
//     var y = y || 0;
//     var forward = forward || true;
//     // console.log(x,y);


//     boardObj.togglePiece(x, y);
//     counter++;
//     if (boardObj.hasAnyQueenConflictsOn(x, y)) {
//       boardObj.togglePiece(x, y);
//       counter--;
//     }   
//     if (counter !== 0 && counter === n) {
//       console.log(boardObj.rows() + "IS A SOLUTION");
//       return boardValue;

//     } 

//     if (x === boardValue.length - 1 && y < boardValue.length-1 ) {
//       // console.log("down");
//       // console.log(boardObj.rows());
//       return forwardSearch(0, y + 1, boardObj, counter, forward);
//     } else if (x < boardValue.length - 1 ) {
//       // console.log("right");
//       // console.log(boardObj.rows());
//       return forwardSearch(x + 1, y, boardObj, counter, forward);
//     }

    

//     if (x === boardValue.length - 1 && y === boardValue.length - 1 && counter !== n) {
//       console.log("COMMENCE BACKTRACING");
//       // console.log(boardObj.rows());
//       return backSearch(x, y, boardObj, counter, false);
      
//     }

//     // if (forward === false) {
//     //   backSearch(x, y, board, counter, forward);
//     //   console.log(boardValue);
//     // }
//   };

//   backSearch = function(x, y, board, counter, forward) {
//     var boardObj = board || new Board({n: size});
//     var boardValue = boardObj.rows();
//     var counter = counter || 0;
//     var x = x || 0;
//     var y = y || 0;
//     // console.log("back", x, y);

//     if ( x < 0 ) {
//       x = 0;
//     }
//     if ( y < 0) {
//       y = 0;
//     }


//     if (pieceThere(x, y)) {
//       boardObj.togglePiece(x, y);
//       counter--;
//       // console.log("piece removed");
//       if (x === boardValue.length - 1 && y < boardValue.length - 1 ) {
//         return forwardSearch(x, y + 1, boardObj, counter, true);
//       } else if (x < boardValue.length - 1 ) {
//         return forwardSearch(x + 1, y, boardObj, counter, true);
//       } else {
//         return backSearch( x - 1, y, boardObj, counter, forward);
//       }

//     } else if ( x === 0 && y === 0) {
//       return forwardSearch(x + Math.ceil(Math.random() * n), boardObj, counter, true);
//     } else {
//       if (x === 0) {
//         // console.log("boardValue.length - 1" + boardValue.length - 1);
//         return backSearch(boardValue.length - 1, y - 1, boardObj, counter, forward);
//       } else {
//         return backSearch(x - 1, y, boardObj, counter, forward);
//       }    
//     }
//   };
  
//   if (size !== 0) {
//     console.log("initated");
//     return forwardSearch(0, 0, boardObj, 0, true);
//   } else {
//     return [];
//   }
// };
// /////////end alt solution////

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
