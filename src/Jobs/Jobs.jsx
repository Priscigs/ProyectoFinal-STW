import React from 'react';
import './Jobs.scss';
import P1 from '../../assets/1.png'
import P2 from '../../assets/1-2.png'
import P3 from '../../assets/1-3.png'

function Jobs() {
  
  return (
    <>
        <div className='grid-mainJobs'>
            <div className='textJobs'>Mis trabajos más recientes</div>
            <div className='textJobsInfo'>Acá algunos de los trabajos que he realizado últimamente :)</div>
        </div>
        <div className='grid-containerJobs'>
            <form method="get" action="http://107.23.156.48:3018">
                <button type="submit" className="cuadradosJobs" id='zoom'>
                    <img src={P1} height="300" width="400px"></img>
                </button>
            </form>
            <form method="get" action="http://107.23.156.48:3020">
                <button type="submit" className="cuadradosJobs" id='zoom'>
                    <img src={P2} height="300" width="400px"></img>
                </button>
            </form>
            <form method="get" action="http://107.23.156.48:3010">
                <button type="submit" className="cuadradosJobs" id='zoom'>
                    <img src={P3} height="300" width="400px"></img>
                </button>
            </form>
        </div>
    </>
  );
}

export default Jobs;
