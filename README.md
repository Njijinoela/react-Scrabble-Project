# Scrabble Tutorial with React

Welcome to the **Scrabble Tutorial** project! This web-based Scrabble game shows two players to take turns, place words on a Scrabble board, and track their scores. It's built using **React** and serves as a learning tool for how to build interactive games with React.

## Features

- **Two-Player Gameplay**: Players take alternate turns.
- **Score Tracking**: Keeps track of each player's score dynamically.
- **React Components**: Uses React components to manage the board, player actions, and scoring.
- **Interactive User Interface**: A responsive game board that allows players to select tiles and form words.

## Demo

> [Scrabble](#) (https://react-scrabble-project-nine.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Flow](#game-flow)
  - [Player One's Move](#player-ones-move)
  - [Player Two's Move](#player-twos-move)
  - [Scoring System](#scoring-system)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the Scrabble game locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Njijinoela/react-Scrabble-Project.git
   cd react-Scrabble-Project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser to view the game.

## Usage

Once the game starts, you will see a Scrabble board, tile rack, and score area for each player.

- **Player 1** starts first, followed by **Player 2**.
- Players take turns placing tiles on the board to form valid words.
- The game automatically updates the score after each move based on the tiles played.

## Game Flow

### Player One's Move

1. **Select tiles**: Player One selects tiles from their rack and places them on the Scrabble board.
2. **Form a word**: The word must follow standard Scrabble rules (horizontal or vertical, connected to existing words, etc.).

### Player Two's Move

1. **Select tiles**: Player Two picks tiles from their rack and forms a word on the board.
2. **Form a word**: The word must also adhere to Scrabble rules.

### Scoring System

The scoring system follows official Scrabble rules:

- **Letter scores**: Each tile has a point value, ranging from 1 to 10.
- **Bonus squares**: The board includes double and triple letter scores as well as double and triple word scores. These bonuses are applied when tiles are placed on those squares.
- **Word validation**: Words are validated based on a predefined Scrabble dictionary (if implemented).
- **Final scores**: The game keeps a running total of both players' scores, displayed in real-time on the interface.

## Technology Stack

- **React**: Front-end library for building the UI components.
- **JavaScript (ES6+)**: Core scripting language.
- **CSS**: Styling for the game board and components.
- **HTML5**: Markup for structuring the application.
- **React Hooks**: Managing state (e.g., player turns, tile placement, score updates).

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a new branch
3. Submitting a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
