import React from 'react';
import './ProjectsContent.css';
import memoryGameImg from './img/Memory_Game.png';
import minesweeperImg from './img/minesweeper.png';

function ProjectsContent() {
  return (
    <>
      <h1 className="headline">Projects</h1>
      <main className="projects-container">
        <a href="https://memory-game-one-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="project">
            <img src={memoryGameImg} alt="Memory Game" />
            <h2>Memory Game</h2>
            <p>React/CSS/HTML</p>
          </div>
        </a>
        <div className="project">
          <img src={minesweeperImg} alt="Minesweeper" />
          <h2>Minesweeper</h2>
          <p>JavaScript/CSS/HTML</p>
        </div>
      </main>
    </>
  );
}

export default ProjectsContent;