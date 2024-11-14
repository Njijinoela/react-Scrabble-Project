import React, { useState, useEffect } from "react";

function ComponentK() {
  const [rack, setRack] = useState(['C', 'A', 'T', 'K', 'G', 'W', 'S', 'I', 'F', 'K']);
  const [board, setBoard] = useState(Array(15).fill(null).map(() => Array(15).fill(null))); // 15x15 grid

  const targetPositionsCAT = [
    { row: 8, col: 8 },  // C
    { row: 8, col: 9 },  // A
    { row: 8, col: 10 }, // T
  ];

  const targetPositionsASK = [
    { row: 9, col: 10 },  // A
    { row: 10, col: 10 }, // S
    { row: 11, col: 10 }, // K
  ];

  const [currentLetterIndexCAT, setCurrentLetterIndexCAT] = useState(0);
  const [currentLetterIndexASK, setCurrentLetterIndexASK] = useState(0);

  // Board positions with bonus points
  const bonusPoints = {
    DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
    TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
    DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
    TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
  };

  // Function to move a letter to the board
  const moveLetterToBoard = (letter, targetRow, targetCol) => {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[targetRow - 1][targetCol - 1] = letter; // Update the board with the letter
      return newBoard;
    });

    // Remove the letter from the rack
    setRack(prevRack => prevRack.filter(l => l !== letter));
  };

  // Function to move a letter back to the rack
  const moveLetterBackToRack = (letter, targetRow, targetCol) => {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[targetRow - 1][targetCol - 1] = null; // Clear the board position
      return newBoard;
    });

    // Add the letter back to the rack
    setRack(prevRack => [...prevRack, letter]);
  };

  // Function to generate the board display
  const generateBoard = () => {
    let boardDisplay = [];
    for (let r = 1; r <= 15; r++) {
      let row = [];
      for (let c = 1; c <= 15; c++) {
        row.push(
          <Tile
            key={`${r},${c}`}  // Corrected template literal
            r={r}
            c={c}
            letter={board[r - 1][c - 1]} // Letter in the current tile
            bonusPoints={bonusPoints}
            onLetterMove={moveLetterToBoard}
          />
        );
      }
      boardDisplay.push(<div style={{ display: 'flex' }} key={r}>{row}</div>);
    }
    return boardDisplay;
  };

  // Auto-move letters for CAT
  useEffect(() => {
    const intervalIdCAT = setInterval(() => {
      if (currentLetterIndexCAT < targetPositionsCAT.length) {
        const { row: targetRow, col: targetCol } = targetPositionsCAT[currentLetterIndexCAT];
        const letter = ['C', 'A', 'T'][currentLetterIndexCAT];
        moveLetterToBoard(letter, targetRow, targetCol);
        setCurrentLetterIndexCAT(prevIndex => prevIndex + 1);
      } else {
        // After all letters are on the board, move them back to the rack after 2 seconds
        if (currentLetterIndexCAT >= targetPositionsCAT.length) {
          setTimeout(() => {
            ['C', 'A', 'T'].forEach((letter, index) => {
              moveLetterBackToRack(letter, targetPositionsCAT[index].row, targetPositionsCAT[index].col);
            });
            setCurrentLetterIndexCAT(0); // Reset the index for continuous movement
          }, 2000); // Wait for 2 seconds before moving letters back to the rack
        }
      }
    }, 1000); // Move each letter every 1 second

    return () => clearInterval(intervalIdCAT); // Cleanup on unmount
  }, [currentLetterIndexCAT]);

  // Auto-move letters for ASK
  useEffect(() => {
    const intervalIdASK = setInterval(() => {
      if (currentLetterIndexASK < targetPositionsASK.length) {
        const { row: targetRow, col: targetCol } = targetPositionsASK[currentLetterIndexASK];
        const letter = ['A', 'S', 'K'][currentLetterIndexASK];
        moveLetterToBoard(letter, targetRow, targetCol);
        setCurrentLetterIndexASK(prevIndex => prevIndex + 1);
      } else {
        // After all letters are on the board, move them back to the rack after 2 seconds
        if (currentLetterIndexASK >= targetPositionsASK.length) {
          setTimeout(() => {
            ['A', 'S', 'K'].forEach((letter, index) => {
              moveLetterBackToRack(letter, targetPositionsASK[index].row, targetPositionsASK[index].col);
            });
            setCurrentLetterIndexASK(0); // Reset the index for continuous movement
          }, 2000); // Wait for 2 seconds before moving letters back to the rack
        }
      }
    }, 1500); // Move each letter for ASK

    return () => clearInterval(intervalIdASK); // Cleanup on unmount
  }, [currentLetterIndexASK]);

  return (
    <div>
      <div id="board" style={{ position: 'relative', marginBottom: '20px' }}>
        {generateBoard()}
      </div>
      <div id="rack" style={{ display: 'flex', width:'300px', height:'90px'}}>
        {rack.map((letter, index) => (
          <div key={index} className="column" style={{ marginRight: '10px' }}>
            <p style={{ color: 'black' }}>{letter}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Tile = ({ r, c, letter, bonusPoints, onLetterMove }) => {
  const getTileColor = () => {
    if (bonusPoints.DL.includes(`${r},${c}`)) return 'lightblue';
    if (bonusPoints.DW.includes(`${r},${c}`)) return 'pink';
    if (bonusPoints.TL.includes(`${r},${c}`)) return 'royalblue';
    if (bonusPoints.TW.includes(`${r},${c}`)) return 'red';
    return 'beige';
  };

  const getBonusLabel = () => {
    if (bonusPoints.DL.includes(`${r},${c}`)) return 'DL';
    if (bonusPoints.DW.includes(`${r},${c}`)) return 'DW';
    if (bonusPoints.TL.includes(`${r},${c}`)) return 'TL';
    if (bonusPoints.TW.includes(`${r},${c}`)) return 'TW';
    return null;
  };

  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        backgroundColor: getTileColor(),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid grey',
        position: 'relative', // Make tile relative to hold absolute elements inside
      }}
    >
      {/* Bonus label rendered with absolute positioning */}
      {getBonusLabel() && (
        <p
          style={{
            position: 'relative',
            top: '2px',
            left: '2px',
            color: 'black',
            fontSize: '15px',
            margin: 0,
            zIndex: 1, // Ensure it's below the letter
          }}
        >
          {getBonusLabel()}
        </p>
      )}

      {/* Letter rendered on top without pushing the bonus label */}
      {letter && (
        <p
          style={{
            position: 'absolute',
            zIndex: 2, // On top of the bonus label
            backgroundColor: '#f5d1d1',
            color: 'black',
            fontSize: '20px',
            margin: 0,
          }}
        >
          {letter}
        </p>
      )}
    </div>
  );
};

export default ComponentK;

