import React from 'react';
import { useMediaQuery } from "react-responsive";
import './StartApp.scss';
import Computer from '../Computer/Computer';

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
    </>
  );
}

export default StartApp;
