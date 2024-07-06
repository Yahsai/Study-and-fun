# Study and Fun

## Project Description

Study and Fun is an interactive educational game designed to help children improve their basic reading and math skills. The game presents an engaging story about a kitten who wants to be a lion, combining word completion practice with addition challenges at the end of each stage.

## Table of Contents

- [Inspiration](#inspiration)
- [Problem and Solution](#problem-and-solution)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
- [CSS Styles](#css-styles)
- [Game Logic](#game-logic)
- [Tests](#tests)
- [Project Challenges](#project-challenges)
- [Collaboration](#collaboration)
- [Project Updates](#project-updates)
- [Contribution](#contribution)
- [License](#license)

## Inspiration

We were inspired by the need to create educational games for the tech-savvy generation of children in their educational development stages. We aim to create engaging and dynamic games to promote education at an early age, as everything today is based on educational technology. With this, we apply the knowledge we've learned.

## Problem and Solution

### Problem
Many children find challenges in learning to read and perform basic mathematical operations such as addition. This may be due to a lack of practice with material that engages their interest while reinforcing their fundamental skills.

### Solution
Study and Fun presents an interactive and engaging solution. In each stage of the game, children face sentences with missing letters that they must complete, encouraging careful reading and improving spelling and reading comprehension. Additionally, at the end of each stage, an addition problem is presented that children must solve to advance.

## Features

- Interactive story about a kitten who wants to be a lion
- 10 game stages with progressive difficulty
- Word completion exercises with missing vowels
- Addition challenges at the end of each stage
- Kid-friendly interface

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js with Express.js
- Database: MySQL
- Authentication: JSON Web Tokens (JWT)
- Validation: express-validator
- API Documentation: Swagger
- Testing: Mocha, Chai, and Supertest

## Installation

1. Install dependencies:
cd study-and-fun
npm install

## Configuration

1. Create a `.env` file in the project root with the following information:
DB_HOST=localhost
DB_USER=root
DB_PASS=new_password
DB_NAME=Study_and_fun
PORT=3000
ACCESS_TOKEN_SECRET=your_secret_key

2. Configure the database by running the provided SQL scripts:
mysql -u root -p < setup_database.sql
mysql -u root -p < dump.sql

## Usage

1. Start the server:
npm start

2. Access the API documentation at `http://localhost:3000/api-docs`

## Project Structure
study-and-fun/
│
├── src/
│   ├── database/
│   │   └── connection.js
│   ├── middleware/
│   │   └── authenticateToken.js
│   ├── routes/
│   │   ├── users.js
│   │   ├── gamestate.js
│   │   └── scores.js
│   └── server.js
│
├── test/
│   ├── users.test.js
│   ├── scores.test.js
│   └── gamestate.test.js
│
├── public/
│   ├── index.html
│   └── resources/
│       ├── styles/
│       └── images/
│
├── package.json
└── README.md

## Frontend

The game's frontend is built with HTML, CSS, and JavaScript. Here's an overview of the main files:

### Main Page (index.html)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Kitten Who Wanted to Be a Lion</title>
    <link rel="stylesheet" href="./resources/styles/styles.css">
    <link rel="icon" type="image/png" sizes="32x32" href="../public/icons/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>
    <main>
        <!-- Main content -->
    </main>
    <script src="script.js"></script>
</body>
</html>

### Game Page (game.html)

html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Kitten Who Wanted to Be a Lion</title>
    <link rel="stylesheet" href="../../resources/styles/styles.css">
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>
    <div id="game">
        <h1 class="game_title">The Kitten Who Wanted to Be a Lion</h1>
        <!-- Game elements -->
    </div>
    <script src="script.js"></script>
</body>
</html>

### About Us Page (about_us.html)

html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Kitten Who Wanted to Be a Lion</title>
    <link rel="stylesheet" href="../../resources/styles/about_us.css">
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>
    <main>
        <!-- Team information -->
    </main>
</body>
</html>

### CSS Styles

The project styles are divided into several CSS files:

#### styles.css
css

@import url("https://use.typekit.net/kbu5ehi.css");
@import url('./game.css');
@import url('./about_us.css');

:root{
  --sfBlue: #4FC2FF;
  --sfRed: #FF5064;
}

* {
  margin: 0;
  padding: 0;
  font-family: "brandon-grotesque", sans-serif;
}

h1{
  font-family:"basenji-variable";
}

.header_nav{
  display: flex;
  background-color: var(--sfBlue);
  font-size: 2rem;
  font-family: 'basenji-variable', sans-serif;
}

/* More styles... */

#### game.css
css

#game {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    margin: 3rem auto;
}

.game_title{
    background-color: var(--sfBlue);
    text-align: center;
    color: white;
    padding: .5rem;
    border-radius: 10px;
}

/* More styles... */
#### about_us.css
css

@import url(./styles.css);

.portrait_container{
  display: flex;
  margin: 1rem;
  width: 650px;
}

.portrait_info{
  margin: 0 1rem;
}

.portrait img {
  width: 300px;
}

/* More styles... */

### Game Logic

The game logic is implemented in JavaScript. Here's a summary of the main functions:

javascript

let currentStage = 0;
const stages = [
    // Definition of game stages
];

function startGame() {
    displayStage();
}

function displayStage() {
    // Displays the current stage
}

function checkAnswer() {
    // Checks the user's answer
}

function checkSum() {
    // Checks the user's sum
}

function nextStage() {
    // Advances to the next stage
}

window.onload = startGame;

### Tests

To run the tests, use the following command:


npm test
#### Test examples:

javascript

// users.test.js
describe('Users API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'test@example.com'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});

// scores.test.js
describe('Scores API', () => {
  it('should create or update a score', async () => {
    const res = await request(app)
      .post('/api/scores')
      .send({
        user_id: 1,
        score: 100
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user_id', 1);
    expect(res.body).toHaveProperty('score', 100);
  });
});

### Project Challenges

During the project, we faced significant challenges:

Building a game in a programming language initially unfamiliar.
Integrating data into the database, resolved with expert help.
Non-technical issues such as frequent power outages.
Balancing campus obligations with project work.
Limitations on working on game art off-campus due to Cintiq use.
Despite these challenges, we managed to make progress on multiple fronts, demonstrating effective management skills.

### Collaboration
The team maintains constant communication through:

Daily meetings for updates
Immediate communication via WhatsApp for issues or ideas
Regular updating of the Trello board

### Contribution
Robert Santana, Angelo Garcia, Yahsai Santana