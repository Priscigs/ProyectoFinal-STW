import React from 'react';

import './StartApp.scss';
import Computer from '../Computer/Computer';
import Container2 from '../Container2/Container2';
import Cv from '../CV/Cv';
import Jobs from '../Jobs/Jobs';
import Info from '../Info/Info';

function StartApp() {
  return (
    <>
      <Computer />
      <Container2 />
      <Cv />
      <Jobs />
      <Info />
    </>
  );
}

export default StartApp;
