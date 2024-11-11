import React, { useState, useEffect } from 'react';

function ScrabbleBoard() {
  const [lettersInRack, setLettersInRack] = useState(['C', 'A', 'T', 'D', 'G', 'O', 'S', 'I', 'F', 'W']);
  const [lettersOnBoard, setLettersOnBoard] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const targetPositions = [
    { row: 8, col: 8 },  // C
    { row: 8, col: 9 },  // A
    { row: 8, col: 10 }  // T
  ];

  const bonusPoints = {
    DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
    TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
    DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
    TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
  };

  // Generate board with JSX elements
  const genBoard = () => {
    let board = [];
    for (let r = 1; r < 16; r++) {
      let row = [];
      for (let c = 1; c < 16; c++) {
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

        const letterOnBoard = lettersOnBoard.find(
          (letter) => letter.row === r && letter.col === c
        );

        row.push(
          <div
            key={`${r},${c}`}
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
            <p style={{ color: 'black', margin: 0 }}>{bonus}</p>

            {/* Render the star (*) at position (8,8) */}
            {r === 8 && c === 8 && (
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: 'black',
                  position: 'absolute',
                  zIndex: '1',  // Lower z-index for the star
                }}
              >
                *
              </p>
            )}

            {/* Render letter on the board if it exists */}
            {letterOnBoard && (
              <p
                style={{
                  color: 'black',
                  fontSize: '20px',
                  //fontWeight: 'bold',//
                  position: 'absolute',  // Absolutely position the letter inside the tile
                  zIndex: '2', 
                  backgroundColor: "#f5d1d1" // Higher z-index to ensure it is on top of the star
                }}
              >
                {letterOnBoard.letter}
              </p>
            )}
          </div>
        );
      }
      board.push(<div key={r} style={{ display: 'flex' }}>{row}</div>);
    }
    return board;
  };

  // Move a letter from the rack to the board
  const moveLetterToBoard = (letter, targetRow, targetCol) => {
    setLettersOnBoard((prev) => [...prev, { letter, row: targetRow, col: targetCol }]);
    removeFromRack(letter);
  };

  // Remove letter from rack
  const removeFromRack = (letter) => {
    setLettersInRack((prev) => prev.filter((l) => l !== letter));
  };

  // Move letter back to rack
  const moveLetterBackToRack = (letter) => {
    setLettersInRack((prev) => [...prev, letter]);
    setLettersOnBoard((prev) => prev.filter((item) => item.letter !== letter));
  };

  // Automated movement of letters
  const autoMoveLetters = () => {
    const letters = ['C', 'A', 'T'];
    if (currentLetterIndex < letters.length) {
      const letter = letters[currentLetterIndex];
      const { row: targetRow, col: targetCol } = targetPositions[currentLetterIndex];
      moveLetterToBoard(letter, targetRow, targetCol);
      setCurrentLetterIndex((prev) => prev + 1);
    } else {
      setTimeout(() => {
        removeAllLettersFromBoard();
      }, 3000);
    }
  };

  // Remove all letters from board and reset
  const removeAllLettersFromBoard = () => {
    lettersOnBoard.forEach(({ letter }) => {
      moveLetterBackToRack(letter);
    });
    setCurrentLetterIndex(0);
  };

  useEffect(() => {
    if (currentLetterIndex < targetPositions.length) {
      const interval = setInterval(() => {
        autoMoveLetters();
      }, 1000);

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [currentLetterIndex]);

  return (
    <div>
      <div id="moves">
        {genBoard()}
      </div>

      <div id="rack" style={{ display: 'flex', marginTop: '20px', width: "500px", height : "100px"}}>
        {lettersInRack.map((letter, index) => (
          <div key={index} className="column" style={{ margin: '0 5px' }}>
            <p style={{ color: 'black', fontSize: '20px'}}>{letter}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrabbleBoard;




