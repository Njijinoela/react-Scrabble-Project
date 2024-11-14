import React, { useEffect } from "react";

const Board = () => {
  const bonusPoints = {
    DL: ["4,1", "12,1", "7,3", "9,3", "8,4", "15,4", "3,7", "7,7", "9,7", "13,7", "4,8", "12,8", "3,9", "7,9", "9,9", "13,9", "1,12", "8,12", "15,12", "7,13", "9,13", "4,15", "12,15"],
    TW: ["1,1", "8,1", "15,1", "1,8", "15,8", "1,15", "8,15", "15,15"],
    DW: ["2,2", "14,2", "3,3", "13,3", "4,4", "12,4", "5,5", "11,5", "5,11", "11,11", "4,12", "12,12", "3,13", "13,13", "2,14", "14,14"],
    TL: ["6,2", "10,2", "2,6", "6,6", "10,6", "14,6", "2,10", "6,10", "10,10", "14,10", "6,14", "10,14"]
  };

  const getTileColor = (r, c) => {
    if (bonusPoints.DL.includes(`${r},${c}`)) return { color: "lightblue", text: "DL" };
    if (bonusPoints.DW.includes(`${r},${c}`)) return { color: "pink", text: "DW" };
    if (bonusPoints.TL.includes(`${r},${c}`)) return { color: "royalblue", text: "TL" };
    if (bonusPoints.TW.includes(`${r},${c}`)) return { color: "red", text: "TW" };
    return { color: "beige", text: "" };
  };

  const renderBoard = () => {
    const rows = [];

    for (let r = 1; r < 16; r++) {
      const cols = [];

      for (let c = 1; c < 16; c++) {
        const { color, text } = getTileColor(r, c);
        const isCenterTile = r === 8 && c === 8;
        cols.push(
          <div
            key={`${r},${c}`}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: color,
              border: "2px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}
            id={`${r},${c},moves`}
          >
            <p style={{ color: "black", fontSize: isCenterTile ? "30px" : "16px", fontWeight: isCenterTile ? "bold" : "normal" }}>
              {isCenterTile ? "⭐" : text}
            </p>
          </div>
        );
      }
      rows.push(
        <div key={r} style={{ display: "flex" }}>
          {cols}
        </div>
      );
    }

    return rows;
  };

  return <div id="moves">{renderBoard()}</div>;
};

export default Board;
