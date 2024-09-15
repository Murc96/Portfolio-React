import React from 'react';

function HomeContent({ loadContent }) {
  return (
    <>
      <h1 className="headline">Welcome</h1>
      <p>
        I'm Marc,<br />
        a passionate programmer with an unconventional journey into the world of code.
        Before the algorithms and data structures became my tools of choice,<br />
        my creativity flowed through the rhythm and beats of music production.<br />
        This unique blend of experiences shapes my approach to problem-solving and innovation in programming.<br /><br />
        In this space, I showcase the projects that I am most proud of.<br /><br />
        Whether you're here to explore potential collaborations or just to satisfy your curiosity,
        I'm thrilled to share my passion for programming with you.<br />
      </p>
      <button className="button" onClick={() => loadContent('contact')}>Contact Me</button>
    </>
  );
}

export default HomeContent;