import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Siddharth Agarwal</h2>
        <p><a href="mailto:sid.agarwal45@gmail.com">sid.agarwal45@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Siddharth. I am a <a href="https://cs.hku.hk">HKU CS</a> graduate and a CUPP Alumni.
        I am currently looking for roles in software engineering. Previously, I was working as a Software Engineer at <a href="https://parallelchain.io">ParallelChain Lab</a>.
        I was the co-founder and CTO of <a href="https://www.payphone.hk">PayPhone Inc.</a>
        , and formerly worked as a SE at
        {' '}<a href="https://roju.app">ROJU</a> and a tutor at <a href="https://www.youtube.com/watch?v=-UxTi3anqrc&ab_channel=BloombergTechnology">First Code Academy</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/resume" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Siddharth Agarwal <Link to="/">zweistein1326.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
