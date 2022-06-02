import React from 'react';
import './Info.scss';
import Logo from '../../assets/logo.png';
import Insta from '../../assets/insta.png';
import Face from '../../assets/face.png';
import Link from '../../assets/link.png';
import Git from '../../assets/git.png';
import Email from '../../assets/email.png';

function Info() {
  return (
    <div className="grid-containerI">
      <img className="img" alt="" src={Logo} height="100" width="100px" />
      <div className="grid-containerI2">
        <div className="grid-containerI3">
          <form method="get" action="https://www.instagram.com">
            <button type="submit" className="btnI100">
              <img alt="" src={Insta} height="30" width="30px" />
            </button>
          </form>
          <form method="get" action="http://facebook.com">
            <button type="submit" className="btnI100">
              <img className="git" alt="" src={Face} height="50" width="50px" />
            </button>
          </form>
          <form method="get" action="https://www.linkedin.com">
            <button type="submit" className="btnI100">
              <img alt="" src={Link} height="30" width="30px" />
            </button>
          </form>
          <form method="get" action="https://github.com/Priscigs/ProyectoFinal-STW">
            <button type="submit" className="btnI100">
              <img className="git" alt="" src={Git} height="50" width="50px" />
            </button>
          </form>
        </div>
        <div className="grid-containerI4">
          <form method="get" action="https://www.google.com/intl/es/gmail/about/">
            <button type="submit" className="btnI100">
              <img className="email" alt="" src={Email} height="50" width="50px" />
              <div className="textEmail">fatimag811@gmail.com</div>
            </button>
          </form>

        </div>
      </div>
    </div>

  );
}

export default Info;
