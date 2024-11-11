import React, { useEffect, useState } from 'react';

function ScrabbleBoard() {
  const [letters, setLetters] = useState(['C', 'A', 'T', 'D', 'G', 'O', 'S', 'I', 'F', 'W']);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  
  const targetPositions = [
    { row: 8, col: 8 },  // C
    { row: 8, col: 9 },  // A
    { row: 8, col: 10 }, // T
  ];

  const bonusPoints = {
    DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
    TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
    DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
    TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
  };

  const genBoard = () => {
    let board = [];
    for (let r = 1; r < 16; r++) {
      let row = [];
      for (let c = 1; c < 16; c++) {
        const tileId = `${r},${c},moves`;
        let bonus = '';
        let bgColor = 'beige';
        
        if (bonusPoints.DL.includes(`${r},${c}`)) {
          bgColor = 'lightblue';
          bonus = 'DL';
        } else if (bonusPoints.DW.includes(`${r},${c}`)) {
          bgColor = 'pink';
          bonus = 'DW';
        } else if (bonusPoints.TL.includes(`${r},${c}`)) {
          bgColor = 'royalblue';
          bonus = 'TL';
        } else if (bonusPoints.TW.includes(`${r},${c}`)) {
          bgColor = 'red';
          bonus = 'TW';
        }

        row.push(
          <div
            key={`${r},${c}`}
            id={tileId}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: bgColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid grey',
              position: 'relative'
            }}
          >
            <p style={{ color: 'black' }}>{bonus}</p>
            {r === 8 && c === 8 && (
              <p style={{
                fontSize: '30px', fontWeight: 'bold', zIndex: '5'
              }}>*</p>
            )}
          </div>
        );
      }
      board.push(<div key={r} style={{ display: 'flex' }}>{row}</div>);
    }
    return board;
  };

  const moveLetterToBoard = (letter, targetRow, targetCol) => {
    // You would update the board state here instead of directly modifying the DOM
    const board = [...letters];
    board.push({ letter, row: targetRow, col: targetCol });
    setLetters(board);
  };

  const moveLetterBackToRack = (letter) => {
    setLetters((prev) => [...prev, letter]);
  };

  const autoMoveLetters = () => {
    if (currentLetterIndex < targetPositions.length) {
      const letter = ['C', 'A', 'T'][currentLetterIndex];
      const { row: targetRow, col: targetCol } = targetPositions[currentLetterIndex];

      moveLetterToBoard(letter, targetRow, targetCol);
      setCurrentLetterIndex((prev) => prev + 1);
    } else {
      setTimeout(() => {
        removeAllLettersFromBoard();
      }, 3000);
    }
  };

  const removeAllLettersFromBoard = () => {
    setLetters([]);
    setCurrentLetterIndex(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoMoveLetters();
    }, 1000); // Move each letter every 1 second
    setIntervalId(interval);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentLetterIndex]);

  return (
    <div>
      <div id="moves">
        {genBoard()}
      </div>

      <div id="row" style={{ display: 'flex', marginTop: '20px' }}>
        {letters.map((letter, index) => (
          <div key={index} className="column" style={{ margin: '0 5px' }}>
            <p style={{ color: 'black' }}>{letter}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrabbleBoard;
