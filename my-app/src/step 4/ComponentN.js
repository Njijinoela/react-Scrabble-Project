// import React, { useState, useEffect } from "react";

// const generateBoard = () => {
//     let board = [];
//     for (let r = 1; r < 16; r++) {
//       let row = [];
//       for (let c = 1; c < 16; c++) {
//         let tile = {
//           row: r,
//           col: c,
//           tileType: getTileType(r, c),
//         };
//         row.push(tile);
//       }
//       board.push(row);
//     }
//     return board;
//   };
// const ComponentN = () => {
//   const [score, setScore] = useState(0);
//   const [currentLetterIndexCAT, setCurrentLetterIndexCAT] = useState(0);
//   const [currentLetterIndexTASK, setCurrentLetterIndexTASK] = useState(0);
//   const [lettersCAT, setLettersCAT] = useState(['C', 'A', 'T']);
//   const [lettersTASK, setLettersTASK] = useState(['A', 'S', 'K']);
//   const [board, setBoard] = useState(generateBoard());

//   const letterScores = {
//     'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1,
//     'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8,
//     'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1,
//     'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1,
//     'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4,
//     'Z': 10
//   };

//   const targetPositionsCAT = [
//     { row: 8, col: 8 },  // C
//     { row: 8, col: 9 },  // A
//     { row: 8, col: 10 }  // T
//   ];
//   const targetPositionsTASK = [
//     { row: 9, col: 10 },  // A
//     { row: 10, col: 10 }, // S
//     { row: 11, col: 10 }  // K
//   ];

//   // Bonus points for the tiles
//   const bonuspoints = {
//     DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
//     TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
//     DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
//     TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
//   };

// //   const generateBoard = () => {
// //     let board = [];
// //     for (let r = 1; r < 16; r++) {
// //       let row = [];
// //       for (let c = 1; c < 16; c++) {
// //         let tile = {
// //           row: r,
// //           col: c,
// //           tileType: getTileType(r, c),
// //         };
// //         row.push(tile);
// //       }
// //       board.push(row);
// //     }
// //     return board;
// //   };

//   const getTileType = (r, c) => {
//     if (bonuspoints.DL.includes(`${r},${c}`)) return "DL";
//     if (bonuspoints.DW.includes(`${r},${c}`)) return "DW";
//     if (bonuspoints.TL.includes(`${r},${c}`)) return "TL";
//     if (bonuspoints.TW.includes(`${r},${c}`)) return "TW";
//     return "normal";
//   };

//   const moveLetterToBoard = (letter, targetRow, targetCol) => {
//     setBoard(prevBoard => {
//       const updatedBoard = [...prevBoard];
//       updatedBoard[targetRow - 1][targetCol - 1].letter = letter; // Set the letter on the board
//       return updatedBoard;
//     });
//   };

//   const calculateScore = (letters, targetPositions) => {
//     let score = 0;
//     let wordMultiplier = 1;

//     letters.forEach((letter, index) => {
//       const { row, col } = targetPositions[index];
//       const position = `${row},${col}`;

//       if (bonuspoints.DL.includes(position)) {
//         score += (letterScores[letter] || 0) * 2; // Double Letter Score
//       } else if (bonuspoints.TL.includes(position)) {
//         score += (letterScores[letter] || 0) * 3; // Triple Letter Score
//       } else if (bonuspoints.DW.includes(position)) {
//         score += letterScores[letter] || 0;
//         wordMultiplier *= 2; // Double Word Score
//       } else if (bonuspoints.TW.includes(position)) {
//         score += letterScores[letter] || 0;
//         wordMultiplier *= 3; // Triple Word Score
//       } else {
//         score += letterScores[letter] || 0; // Regular score
//       }
//     });

//     score *= wordMultiplier;
//     return score;
//   };

//   useEffect(() => {
//     if (currentLetterIndexCAT < lettersCAT.length) {
//       const letter = lettersCAT[currentLetterIndexCAT];
//       const { row, col } = targetPositionsCAT[currentLetterIndexCAT];
//       moveLetterToBoard(letter, row, col);
//       setCurrentLetterIndexCAT(prev => prev + 1);
//     } else {
//       const scoreCAT = calculateScore(lettersCAT, targetPositionsCAT);
//       setScore(prev => prev + scoreCAT);
//     }
//   }, [currentLetterIndexCAT]);

//   useEffect(() => {
//     if (currentLetterIndexTASK < lettersTASK.length) {
//       const letter = lettersTASK[currentLetterIndexTASK];
//       const { row, col } = targetPositionsTASK[currentLetterIndexTASK];
//       moveLetterToBoard(letter, row, col);
//       setCurrentLetterIndexTASK(prev => prev + 1);
//     } else {
//       const scoreTASK = calculateScore(lettersTASK, targetPositionsTASK);
//       setScore(prev => prev + scoreTASK);
//     }
//   }, [currentLetterIndexTASK]);

//   return (
//     <div>
//       <h2>Score: {score}</h2>
//       <div className="board">
//         {board.map((row, rowIndex) => (
//           <div key={rowIndex} style={{ display: "flex" }}>
//             {row.map((tile, colIndex) => (
//               <div
//                 key={`${tile.row}-${tile.col}`}
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   border: "2px solid grey",
//                   position: "relative",
//                   backgroundColor: getTileBackgroundColor(tile.tileType),
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <p>{tile.letter || ""}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const getTileBackgroundColor = (tileType) => {
//   switch (tileType) {
//     case "DL":
//       return "lightblue";
//     case "DW":
//       return "pink";
//     case "TL":
//       return "royalblue";
//     case "TW":
//       return "red";
//     default:
//       return "beige";
//   }
// };

// export default ComponentN;

import React, { useState, useEffect } from "react";

// Generate the board with tile types
const generateBoard = () => {
  let board = [];
  for (let r = 1; r < 16; r++) {
    let row = [];
    for (let c = 1; c < 16; c++) {
      let tile = {
        row: r,
        col: c,
        tileType: getTileType(r, c),
      };
      row.push(tile);
    }
    board.push(row);
  }
  return board;
};

// Component to render the game board
const ComponentN = () => {
  const [score, setScore] = useState(0);
  const [currentLetterIndexCAT, setCurrentLetterIndexCAT] = useState(0);
  const [currentLetterIndexTASK, setCurrentLetterIndexTASK] = useState(0);
  const [lettersCAT, setLettersCAT] = useState(['C', 'A', 'T']);
  const [lettersTASK, setLettersTASK] = useState(['A', 'S', 'K']);
  const [board, setBoard] = useState(generateBoard());

  const letterScores = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1,
    'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8,
    'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1,
    'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1,
    'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4,
    'Z': 10
  };

  const targetPositionsCAT = [
    { row: 8, col: 8 },  // C
    { row: 8, col: 9 },  // A
    { row: 8, col: 10 }  // T
  ];
  const targetPositionsTASK = [
    { row: 9, col: 10 },  // A
    { row: 10, col: 10 }, // S
    { row: 11, col: 10 }  // K
  ];

  // Bonus points for the tiles
  const bonuspoints = {
    DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
    TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
    DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
    TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
  };

  // Get tile type based on position
  const getTileType = (r, c) => {
    const position = `${r},${c}`; // Correct string interpolation
    if (bonuspoints.DL.includes(position)) return "DL";
    if (bonuspoints.DW.includes(position)) return "DW";
    if (bonuspoints.TL.includes(position)) return "TL";
    if (bonuspoints.TW.includes(position)) return "TW";
    return "normal";
  };

  // Move letter to the board
  const moveLetterToBoard = (letter, targetRow, targetCol) => {
    setBoard(prevBoard => {
      const updatedBoard = [...prevBoard];
      updatedBoard[targetRow - 1][targetCol - 1].letter = letter; // Set the letter on the board
      return updatedBoard;
    });
  };

  // Calculate score based on letter and tile bonuses
  const calculateScore = (letters, targetPositions) => {
    let score = 0;
    let wordMultiplier = 1;

    letters.forEach((letter, index) => {
      const { row, col } = targetPositions[index];
      const position = `${row},${col}`;

      if (bonuspoints.DL.includes(position)) {
        score += (letterScores[letter] || 0) * 2; // Double Letter Score
      } else if (bonuspoints.TL.includes(position)) {
        score += (letterScores[letter] || 0) * 3; // Triple Letter Score
      } else if (bonuspoints.DW.includes(position)) {
        score += letterScores[letter] || 0;
        wordMultiplier *= 2; // Double Word Score
      } else if (bonuspoints.TW.includes(position)) {
        score += letterScores[letter] || 0;
        wordMultiplier *= 3; // Triple Word Score
      } else {
        score += letterScores[letter] || 0; // Regular score
      }
    });

    score *= wordMultiplier; // Apply word multiplier
    return score;
  };

  // Move letters for "CAT"
  useEffect(() => {
    if (currentLetterIndexCAT < lettersCAT.length) {
      const letter = lettersCAT[currentLetterIndexCAT];
      const { row, col } = targetPositionsCAT[currentLetterIndexCAT];
      moveLetterToBoard(letter, row, col);
      setCurrentLetterIndexCAT(prev => prev + 1);
    } else {
      const scoreCAT = calculateScore(lettersCAT, targetPositionsCAT);
      setScore(prev => prev + scoreCAT);
    }
  }, [currentLetterIndexCAT]);

  // Move letters for "TASK"
  useEffect(() => {
    if (currentLetterIndexTASK < lettersTASK.length) {
      const letter = lettersTASK[currentLetterIndexTASK];
      const { row, col } = targetPositionsTASK[currentLetterIndexTASK];
      moveLetterToBoard(letter, row, col);
      setCurrentLetterIndexTASK(prev => prev + 1);
    } else {
      const scoreTASK = calculateScore(lettersTASK, targetPositionsTASK);
      setScore(prev => prev + scoreTASK);
    }
  }, [currentLetterIndexTASK]);

  // Get the background color for the tile based on tile type
  const getTileBackgroundColor = (tileType) => {
    switch (tileType) {
      case "DL":
        return "lightblue";
      case "DW":
        return "pink";
      case "TL":
        return "royalblue";
      case "TW":
        return "red";
      default:
        return "beige";
    }
  };

  return (
    <div>
      <h2>Score: {score}</h2>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((tile, colIndex) => (
              <div
                key={`${tile.row}-${tile.col}`} // Correct key prop syntax
                style={{
                  width: "40px",
                  height: "40px",
                  border: "2px solid grey",
                  position: "relative",
                  backgroundColor: getTileBackgroundColor(tile.tileType),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>{tile.letter || ""}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentN;


