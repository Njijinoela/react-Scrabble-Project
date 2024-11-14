import React from "react";

function ComponentD(){
    return (
        <section id="container">
      <div id="content">
        <h2 id="h2">WHAT IS SCRABBLE:</h2>

        <p class="p">HOW TO PLAY</p>
        <h3>BOARD LAYOUT</h3>
        <ul class="p" >
            <li>
            Center star: The center star is where the first word of the game
            must be placed. .
          </li>
          <li>
            TW (Triple Word): When a word covers a square marked "TW," the total
            score of the word is tripled. If you place a word that covers more
            than one TW square, the score is multiplied by 9 (3x3).
          </li>
          <li>
            DW (Double Word): If a word covers a "DW" square, the total score of
            the word is doubled. If a word lands on two DW squares, the score is
            multiplied by 4 (2x2).
          </li>
          <li>
            DL (Double Letter): When a letter is placed on a "DL" square, the
            value of that letter is doubled. Only the individual letter score is
            doubled, not the entire word.
          </li>
          <li>
            TL (Triple Letter): If a letter lands on a "TL" square, the value of
            that letter is tripled. Again, only the letter score is tripled, not
            the entire word.
          </li>
        </ul>
      </div>
      {/* <div id="moves">
        <h2>THE BOARD:</h2>
      </div> */}
      <div id="row" class=""></div>
    </section>
    );
};

export default ComponentD;