import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  const linkLabel = `See what I'm using!`;

  return (
    <main className="main">
      <h1>Stephen Chiang</h1>
      <Link to="/uses/">{linkLabel}</Link>
    </main>
  );
};

export default IndexPage;
