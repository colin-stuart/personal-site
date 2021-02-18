import React from 'react';
import { Document, Page } from 'react-pdf';
import Main from '../layouts/Main';
import ResumePDF from '../data/resume/Colin_Stuart_Resume.pdf';

const Resume = () => (
  <Main
    title="Resume"
    description="Colin Stuart's Resume."
  >
    <p1 style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
      }
    }
    >
      <a href="https://github.com/mldangelo/personal-site/tree/main/src/data/resume/Colin_Stuart_Resume.pdf">
        Download a PDF of my resume here.
      </a>
    </p1>
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }
    }
    >
      <Document file={ResumePDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  </Main>
);

export default Resume;
