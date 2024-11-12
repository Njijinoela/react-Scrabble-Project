import React from "react";
function ComponentM (){
    return (
        <div>
            <h2>STEP 3</h2>
      <p className="p">
        After placing a word on the board, draw an equal number of new tiles
        from the tile bag so that each player always has seven tiles.
      </p>

      <h2>STEP 4</h2>

      <p className="p">
        All letters played must touch at least one letter that
        is already on the board, to form at least one complete word. <br />
        When one player has used all of their tiles or no one can make any more
        words, the game ends. <br></br>If a player uses all seven of their tiles in one
        turn,they add a 50-point bonus to their word score.
      </p>
      
      <h2>STEP 5</h2>

      <p className="p">
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