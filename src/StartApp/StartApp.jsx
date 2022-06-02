import React from 'react';
import { useMediaQuery } from "react-responsive";
import './StartApp.scss';
import Computer from '../Computer/Computer';
import Container2 from '../Container2/Container2'
import Cv from '../CV/Cv';

function StartApp() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)"
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)"
  });

  return (
    <>
        <Computer></Computer>
        <Container2></Container2>
        <Cv></Cv>
    </>
  );
}

export default StartApp;
