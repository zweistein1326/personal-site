import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Siddharth Agarwal's personal website. Hong Kong based HKU CS graduate, "
    + 'Software Engineer at ParallelChain Lab, co-founder of PayPhone, and CUPP Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Me</Link></h2>
          <p>
            Highly motivated and skilled front-end engineer with experience in web and mobile
            application development, rapid prototyping, UX design, and user-sentiment analysis.
            Proficient in React/Next.js for web development and Expo/RN for mobile development.
            Excited to leverage my skills and experience to help organizations create
            intuitive and user-friendly applications. Possesses excellent leadership and team
            management skills with experience in leading a team of 5 developers.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/zweistein1326/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
