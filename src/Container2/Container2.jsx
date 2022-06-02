import React from 'react';
import './Container2.scss';
import Object1 from '../../assets/3dObject1.gif';
import Object2 from '../../assets/3dObject2.gif';
import Lenguaje from '../../assets/lenguajes.png';

function Container2() {
  return (
    <header>
      <div className="grid-main">
        <div className="grid-containerImages">
          <div className="grid-infoo1">
            <div className="mainText2">ACERCA DE MÍ</div>
            <div className="infoText2">Me considero una persona bastante centrada en lo que realizo. Soy demasiado perfeccionista al hacer cualquier cosa, algo que puede ser una ventaja y desventaja al mismo tiempo. Esto debido a que por lo más mínimo que sea, si algo a mí parecer no se ve visualmente bien, me puede tomar bastante tiempo en dejarlo a como a mí me gustaría. Es por eso que desde siempre me ha llamado mucho la atención todo lo relacionado con el diseño, por lo tanto el Front End.</div>
            <a href="#CV">
              <button name="btn1" type="submit" className="btn1I1 btnI11">MÁS</button>
            </a>
          </div>
          <div className="grid-images">
            <img src={Object1} alt="" height="700" width="750px" />
          </div>
        </div>
      </div>
      <div className="grid-main">
        <div className="grid-containerImages">
          <div className="grid-images2">
            <img src={Object2} alt="" height="700" width="750px" />
          </div>
          <div className="grid-infoo1">
            <div className="mainText4">LENGUAJES</div>
            <div className="infoText2">Durante estos últimos meses he logrado aprender distinos lenguajes que anteriormente no tenía idea de cómo manejarlos y me gusta mucho poder tener estas nuevas herramientas para crear nuevas cosas.</div>
            <img src={Lenguaje} alt="" className="lenguaje" height="110" width="200px" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Container2;
