import React from 'react';
import './Container2.scss';
import Object1 from '../../assets/3dObject1.gif'
import Object2 from '../../assets/3dObject2.gif'

function Container2() {
  return (
      <header>
          <div className='grid-main'>
              <div className="grid-containerImages">
                  <div className="grid-infoo1">
                      <div className="mainText2">ACERCA DE MÍ</div>
                      <div className="infoText2">LALA MA DASNDKSADKA DA KD JA SDSJD  ASPDAÑSDJALDJAKSLJDÑASJDAJD A DALDLAJD AJDLAJ DA D ALDJ A LD JAL DALSD AD AL JDAJDLAS</div>
                      <form method="get" action="http://www.donothingfor2minutes.com/">
                          <button name='btn1' type="submit" className="btn1I1 btnI11">LEARN MORE</button>
                      </form>
                  </div>
                  <div className="grid-images">
                      <img src={Object1} height="700" width="750px"></img>
                  </div>
              </div>
          </div>
          <div className='grid-main'>
                    <div className="grid-containerImages">
                        <div className="grid-images2">
                            <img src={Object2} height="700" width="750px"></img>
                        </div>
                        <div className="grid-infoo1">
                            <div className="mainText4">TRABAJOS</div>
                            <div className="infoText2">LALA AKLSDNASD ASDIAODI ASIDÁPDUASPDUA DUA D UDASPDUAOD  AOU D OAIPDOUAODPO APUSPDU ASDIUASUDASUDO AUSPDOU AUDAPDUD</div>
                            <form method="get" action="http://www.donothingfor2minutes.com/">
                                <button name='btn2' type="submit" className="btn1I1 btnI11">VIEW NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
      </header>
  );
}

export default Container2;