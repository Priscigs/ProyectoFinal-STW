import React from 'react';
import MediaQuery from 'react-responsive';
import './Computer.scss';

function Computer() {
  return (

    <>
    <div className='display'>
          <div className='display2'>
          
            <div className='search' id='sombra'>
                <p>Priscilla González</p>
            </div>
            <div className='display3' id='sombra'>
                <div className='botones'>
                    <div className='grid-botones'>
                        <div className='red'></div>
                    </div>
                    <div className='grid-botones'>
                        <div className='yellow'></div>
                    </div>
                    <div className='grid-botones'>
                        <div className='green'></div>
                    </div>
                </div>
                <div className='textInfo'>Me gusta que me digan Prisci, soy estudiante <br/> de 3er año en la UVG. <br/>Actualmente estoy <br/>cursando Sistemas y <br/> Tecnologías Web</div>
            </div>
            <div className='ball'></div>
          </div>
          <div className='cuadrado'>
            
          </div>
          <div className='cuadrado2'></div>
      </div>
      
    </>
      
  );
}

export default Computer;