import React from 'react';

import './Computer.scss';

function Computer() {
  return (
    <div className="display">
      <div className="display2">
        <div className="search" id="sombra">
          <p>Priscilla González</p>
        </div>
        <div className="flores">
          <div className="grid-flores">
            <div className="display3">
              <div className="petalo1" />
              <div className="petaloMedio">
                <div className="petalo2">
                  <div className="petalo3" />
                </div>
              </div>
              <div className="petalo4">
                <div className="petalo5" />
              </div>
              <div className="tallo">
                <div className="hoja" id="sombra" />
              </div>
            </div>
          </div>
          <div className="grid-flores">
            <div className="display4" id="sombra">
              <div className="botones">
                <div className="grid-botones">
                  <div className="red" />
                </div>
                <div className="grid-botones">
                  <div className="yellow" />
                </div>
                <div className="grid-botones">
                  <div className="green" />
                </div>
              </div>
              <div className="textInfo">
                Me gusta que me digan Prisci, soy estudiante
                <br />
                de 3er año en la UVG.
                <br />
                Actualmente estoy
                <br />
                cursando Sistemas y
                <br />
                Tecnologías Web
              </div>
            </div>
          </div>
        </div>

        <div className="ball" />
      </div>
      <div className="cuadrado" />
      <div className="cuadrado2" />
    </div>
  );
}

export default Computer;
