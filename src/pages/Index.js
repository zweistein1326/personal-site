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
            A problem solver by nature and software engineer by profession.
            I like to design and build things.
            Interested in distributed systems, web3, and machine learning.
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
