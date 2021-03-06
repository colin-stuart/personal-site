import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Colin Stuart's personal website."}
  >
    <article className="post" id="index">
      <p> Hi! I&apos;m Colin. Currently an SEII at <a href="https://www.rapid7.com/">Rapid7</a>, working on cool shit.
        Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/colin-stuart/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
