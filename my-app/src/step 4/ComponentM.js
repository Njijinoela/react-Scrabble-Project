import React from "react";
function ComponentM (){
    return (
        <div>
            <h3>STEP 4</h3>
      <p>
        After placing a word on the board, draw an equal number of new tiles
        from the tile bag so that each player always has seven tiles.
      </p>

      <h3>STEP 5</h3>

      <p>
        All letters played must touch at least one letter that
        is already on the board to form at least one complete word. <br />
        When one player has used all of their tiles or no one can make any more
        words, the game ends. If a player uses all seven of their tiles in one
        turn, <br />
        they add a 50-point bonus to their word score.
      </p>

      <h3>STEP 6</h3>

      <p>
        Consult a dictionary only if you’re challenging another player’s word. <br />
        If the word isn’t in the dictioanary, the player loses their turn. <br />
        If the word is allowed, the challenger loses their turn.
      </p>
      <h3>STEP 7</h3>

      <p>
        Calculate each player’s final score by adding up the points from all of
        their word scores. <br />
        Then, subtract the sum of their unplayed letters. <br /> If one player has used
        up all of their letters, add the sum of everyone else’s unplayed letters to their score. <br />
         The player with the highest score wins.
      </p>

        </div>
    )
}
export default ComponentM ;