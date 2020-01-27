import * as React from 'react';
import Layout from '../components/Layout';

type Props = {};

const Uses: React.FC<Props> = props => {
  return (
    <Layout>
      <section data-testid="page-uses" className="page">
        I am using...
      </section>
    </Layout>
  );
};

export default Uses;
