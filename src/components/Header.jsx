import React from 'react';
import Logo from '../assets/logo.png';
const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="#home">
          <img src={Logo} height={100} width={100} alt="" />
        </a>
        {/* <button className='btn btn-sm'>Propostas</button> */}
      </div>
    </div>
  </div>;
};

export default Header;
