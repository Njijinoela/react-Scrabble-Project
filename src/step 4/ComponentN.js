import React, { useState, useEffect } from "react";

// Letter score mapping
const letterScores = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8,
  K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

// Board bonus points
const bonuspoints = {
  DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
  TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
  DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
  TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
};

// Predefined positions for "CAT" and "TASK"
const targetPositionsCAT = [
  { row: 8, col: 8, letter: 'C' },
  { row: 8, col: 9, letter: 'A' },
  { row: 8, col: 10, letter: 'T' }
];

const targetPositionsTASK = [
  { row: 9, col: 10, letter: 'A' },
  { row: 10, col: 10, letter: 'S' },
  { row: 11, col: 10, letter: 'K' }
];

function ScrabbleBoard() {
  const [board, setBoard] = useState(Array(15).fill().map(() => Array(15).fill(null)));
  const [catIndex, setCatIndex] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);
  const [score, setScore] = useState({ CAT: 0, TASK: 0 });

  // Helper function to calculate the score for a word
  const calculateScore = (wordPositions) => {
    let score = 0;
    let wordMultiplier = 1; // For DW, TW

    wordPositions.forEach(({ row, col, letter }) => {
      let letterScore = letterScores[letter] || 0;
      const pos = `${row},${col}`;

      // Apply bonus tile effects
      if (bonuspoints.DL.includes(pos)) {
        letterScore *= 2; // Double Letter Score
      } else if (bonuspoints.TL.includes(pos)) {
        letterScore *= 3; // Triple Letter Score
      } else if (bonuspoints.DW.includes(pos)) {
        wordMultiplier *= 2; // Double Word Score
      } else if (bonuspoints.TW.includes(pos)) {
        wordMultiplier *= 3; // Triple Word Score
      }

      score += letterScore;
    });

    return score * wordMultiplier;
  };

  // Effect for automating "CAT" placement
  useEffect(() => {
    if (catIndex < targetPositionsCAT.length) {
      const timeout = setTimeout(() => {
        const { row, col, letter } = targetPositionsCAT[catIndex];
        setBoard(prevBoard => {
          const newBoard = [...prevBoard];
          newBoard[row - 1][col - 1] = letter;
          return newBoard;
        });
        setCatIndex(catIndex + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      setScore(prevScore => ({
        ...prevScore,
        CAT: calculateScore(targetPositionsCAT)
      }));
    }
  }, [catIndex]);

  // Effect for automating "TASK" placement (after CAT is placed)
  useEffect(() => {
    if (catIndex === targetPositionsCAT.length && taskIndex < targetPositionsTASK.length) {
      const timeout = setTimeout(() => {
        const { row, col, letter } = targetPositionsTASK[taskIndex];
        setBoard(prevBoard => {
          const newBoard = [...prevBoard];
          newBoard[row - 1][col - 1] = letter;
          return newBoard;
        });
        setTaskIndex(taskIndex + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    } else if (taskIndex === targetPositionsTASK.length) {
      setScore(prevScore => ({
        ...prevScore,
        TASK: calculateScore(targetPositionsTASK)
      }));
    }
  }, [taskIndex, catIndex]);

  // Function to render the board with bonus tiles and letters
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: "flex" }}>
        {row.map((cell, colIndex) => {
          let backgroundColor = "beige";
          let label = null;
          const pos = `${rowIndex + 1},${colIndex + 1}`;
          
          if (bonuspoints.DL.includes(pos)) {
            backgroundColor = "lightblue";
            label = "DL"; // Double Letter
          }
          if (bonuspoints.TL.includes(pos)) {
            backgroundColor = "royalblue";
            label = "TL"; // Triple Letter
          }
          if (bonuspoints.DW.includes(pos)) {
            backgroundColor = "pink";
            label = "DW"; // Double Word
          }
          if (bonuspoints.TW.includes(pos)) {
            backgroundColor = "red";
            label = "TW"; // Triple Word
          }
          if (rowIndex === 7 && colIndex === 7) label = "⭐"; // Star in the middle

          return (
            <div
              key={colIndex}
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor,
                border: "2px solid grey",
                position: "relative"
              }}
            >
              {label && (
                <span style={{ position: "absolute", fontSize: "15px", color: "black", zIndex: 1 }}>
                  {label}
                </span>
              )}
              {cell && (
                <span style={{ zIndex: 2, fontSize: "20px", color: "black", backgroundColor:"#f5d1d1"}}>
                  {cell}<sub style={{ fontSize: "10px" }}>{letterScores[cell]}</sub>
                </span>
              )}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div>
      <div>
        {renderBoard()}
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        Score for Player 1 (CAT): {score.CAT}
        <br />
        Score for Player 2 (TASK): {score.TASK}
      </div>
    </div>
  );
}

export default ScrabbleBoard;

