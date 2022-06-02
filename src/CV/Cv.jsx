import React from 'react';
import './Cv.scss';
import Part1 from '../../assets/part1CV.png';
import Part2 from '../../assets/part2CV.png';

function Cv() {
  return (
    <div className="grid-mainCV" id="CV">
      <div className="grid-containerCV">
        <img src={Part1} alt="" className="encima" id="sombra" height="500" width="350px" />
        <img src={Part2} alt="" id="sombra" height="500" width="350px" />
      </div>
    </div>

  );
}

export default Cv;
