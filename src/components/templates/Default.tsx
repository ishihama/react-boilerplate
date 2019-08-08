import * as React from 'react';

import Counter from '../molecules/Counter';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Default: React.FC<Props> = (props: Props) => {
  // const {  } = props;

  return (
    <React.Fragment>
      <Header />
      <Counter />
      <Footer />
    </React.Fragment>
  );
};

export default Default;
