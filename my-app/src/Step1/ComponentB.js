import React from "react";

function ComponentB(){
    return (
        <div>
            <div id="heading">
                <h1>
                    MASTERING SCRABBLE : <br />
                    How to Play and Win the game.
                </h1>
            </div>
            <div>
                <p className="p">
                    Scrabble is a classic word game where players score points by forming
                    words from individual letter tiles on a game board.</p>
                   
                <h2>Instructions</h2>
                <p className="p">Players arrange these tiles on a 15x15 grid
                to create words, much like a crossword puzzle. <br></br>The game combines vocabulary, strategy, and
                    sometimes luck with the letter tiles drawn. <br></br>Each letter tile has a point value.<br></br>Some squares on the board allow you to multiply the tiles value by
                    two or three.<br></br> Values range from 0 point for a blank tile to 10 points for the letters.
                    <br />
                    Tally each word score by adding point values for each letter in the word.
                    <br/>
                    The goal is to score
                    the most points by creating high-scoring words, often by taking
                    advantage of bonus squares on the board (like double or triple
                    letter/word scores). </p>
     
        </div> 
            </div>
        
    );
};

export default ComponentB;